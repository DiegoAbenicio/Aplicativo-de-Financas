// Styles
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import 'vuetify/styles'

const vuetify = createVuetify({
	theme: {
		defaultTheme: "dark",
		themes: {
			dark: {
				dark: true,
				colors: {
					surface: "#292929",
					primary: "#3C2E8B",
					"primary-lighten-1": "#4B39B3",
					"primary-darken-1": "#101010",
				},
			},
		},
	},
	components,
	directives,
});

export default vuetify;
