import '@mdi/font/css/materialdesignicons.css';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const customLightTheme = {
  dark: false,
  colors: {
    background: "#eeeeee",
    surface: "#009688",
    primary: "#00695C",
    secondary: "#4DB6AC",
    info: "#f2c35a",
    error: "#ab274f",
  },
  variables: {
    // 'border-color': '#000000',
    // 'border-opacity': 0.12,
    // 'high-emphasis-opacity': 0.87,
    // 'medium-emphasis-opacity': 0.60,
    // 'disabled-opacity': 0.38,
    // 'idle-opacity': 0.04,
    // 'body-font-family': 'Arial',
    'hover-opacity': 0.2,
    'theme-overlay-multiplier': 0.5,
    'theme-on-surface': '#ffffff',
    // 'focus-opacity': 0.12,
    // 'selected-opacity': 0.08,
    // 'activated-opacity': 0.12,
    // 'pressed-opacity': 0.12,
    // 'dragged-opacity': 0.08,
    // 'theme-kbd': '#212529',
    // 'theme-on-kbd': '#FFFFFF',
    // 'theme-code': '#F5F5F5',
    // 'theme-on-code': '#000000',
  }
};

export default {
    install: app => {
        const vuetify = createVuetify({
            components,
            directives,
            theme: {
                themes: {
                    light: customLightTheme,
                }
            },
        });
        app.use(vuetify);
      }
};
