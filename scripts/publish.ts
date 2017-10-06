/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Logger } from '@angular-devkit/core';
import * as stream from 'stream';
import { packages } from '../lib/packages';

const npm = require('npm');

class NullStream extends stream.Writable {
  _write() {}
}


export default function (_: {}, logger: Logger) {
  logger.info('Building...');
  const build = require('./build').default;
  build({}, new Logger('build', logger));

  return new Promise<void>((resolve, reject) => {
    const loadOptions = { progress: false, logstream: new NullStream() };
    npm.load(loadOptions, (err: Error | string) => err ? reject(err) : resolve());
  })
    .then(() => {
      return Object.keys(packages).reduce((acc: Promise<void>, name: string) => {
        const pkg = packages[name];
        if (pkg.packageJson['private']) {
          logger.debug(`${name} (private)`);

          return acc;
        }

        return acc
          .then(() => new Promise<void>((resolve, reject) => {
            logger.info(name);
            process.chdir(pkg.dist);
            npm.commands['publish']([], (err: Error) => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            });
          }))
          .catch((err: Error) => {
            logger.error(err.message);
          });
      }, Promise.resolve());
    })
    .then(() => logger.info('done'), (err: Error) => logger.fatal(err.message));
}
