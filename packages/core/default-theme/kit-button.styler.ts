import { StylerService } from '@ngx-kit/styler';

import { KitDefaultThemeParams } from './interfaces';

export class KitButtonStyler {

  static style(styler: StylerService, params: KitDefaultThemeParams) {
    // Base
    styler.register({
      host: {
        position: 'relative',
        display: 'inline-block',
        boxSizing: 'border-box',
        textDecoration: 'none',
        marginBottom: 0,
        fontWeight: 400,
        textAlign: 'center',
        verticalAlign: 'middle',
        cursor: 'pointer',
        backgroundImage: 'none',
        border: '1px solid transparent',
        whiteSpace: 'nowrap',
        lineHeight: 1.42857,
        borderRadius: '3px',
        userSelect: 'none',
        boxShadow: '0 0 2px 0 rgba(50, 50, 50, 0.1)',
      }
    });

    // Size state
    styler.registerState('size', {
      xs: {
        host: {
          padding: '1px 4px',
          fontSize: '.8rem',
        },
      },
      s: {
        host: {
          padding: '2px 8px',
          fontSize: '1rem',
        },
      },
      m: {
        host: {
          padding: '6px 12px',
          fontSize: '1.1rem',
        },
      },
      l: {
        host: {
          padding: '8px 20px',
          fontSize: '1.3rem',
        },
      },
      xl: {
        host: {
          padding: '16px 32px',
          fontSize: '1.6rem',
        },
      }
    }, 'm');

    // Type state
    styler.registerState('type', {
      'default': {
        host: {
          background: params.colors.button.color,
          color: params.colors.button.text,
          borderColor: params.colors.border.color,
        },
      },
      primary: {
        host: {
          background: params.colors.brand.color,
          borderColor: params.colors.brand.color,
          color: params.colors.brand.text,
        }
      },
      success: {
        host: {
          background: params.colors.success.color,
          borderColor: params.colors.success.color,
          color: params.colors.success.text,
        }
      },
      warning: {
        host: {
          background: params.colors.success.color,
          borderColor: params.colors.success.color,
          color: params.colors.success.text,
        }
      },
      error: {
        host: {
          background: params.colors.success.color,
          borderColor: params.colors.success.color,
          color: params.colors.success.text,
        }
      },
      link: {
        host: {
          boxShadow: 'none',
          paddingLeft: 0,
          paddingRight: 0,
          background: params.colors.link.color,
          borderColor: 'transparent',
          color: params.colors.link.text,
        }
      },
    }, 'default');

    // Disabled state
    styler.registerState('disabled', {
      disabled: {
        host: {
          cursor: 'default',
          background: params.colors.border.color,
          borderColor: params.colors.border.color,
          color: params.colors.border.text,
        },
      },
    });
  }

}