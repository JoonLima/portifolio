import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "lightTheme",
    themes: {
      lightTheme: {
        dark: false,
        colors: {
          primary: "#2e2e2e",
          "page-header-background": "#d7d7ce",
          "page-background": "#cdcdc1",
          "table-header": "#3F3F4A",
          background: "#EBECF0",
          "header-background": "#b5b5a6",
          "info-text": "#666660",
        },
      },
      darkTheme: {
        dark: true,
        colors: {
          primary: "#d7d7ce",
          "page-header-background": "#282831",
          "page-background": "#32323E",
          "table-header": "#2e2e2e",
          background: "#38383f",
          "header-background": "#4a4a59",
          "info-text": "#99999F",
        },
      },
    },
  },
});
