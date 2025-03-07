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

const formFieldsDefaults = {
  color: "primary",
  variant: "outlined",
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#212121",
          secondary: "#708D81",
        },
      },
      dark: {
        colors: {
          primary: "#645E9D",
          secondary: "#C2AFF0",
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
    VTextField: {
      ...formFieldsDefaults,
    },
    VCombobox: {
      ...formFieldsDefaults,
    },
    VTextarea: {
      ...formFieldsDefaults,
    },
  },
});
