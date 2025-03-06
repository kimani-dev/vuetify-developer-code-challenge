/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#212121",
          secondary: "#26C6DA",
        },
      },
      dark: {
        colors: {
          primary: "#26C6DA",
          secondary: "#FF9100",
        },
      },
    },
  },
  defaults: {
    VBtn: {
      color: "primary",
      variant: "elevated",
      class: "text-capitalize",
    },
    VIcon: {
      color: "secondary",
    },
  },
});
