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
    'hover-opacity': 0.2,
    'theme-overlay-multiplier': 0.5,
    'theme-on-surface': '#ffffff',
    'theme-surface': '#A5A5A5',
    'theme-bar': '#009688',
    'theme-table-bg': "#e9e9e9",
    'theme-table-head': '#a9a9a9',
    'theme-table-color': '#000000',
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
