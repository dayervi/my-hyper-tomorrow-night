'use strict';

const black = '#3a3e42',
	red = '#cc6666',
	green = '#b5bd68',
	yellow = '#f0c674',
	blue = '#81a2be',
	magenta = '#b294bb',
	cyan = '#81a2be',
	white = '#c4c7c4';

exports.decorateConfig = config => Object.assign({}, config, {

	backgroundColor: '#27292b',
	foregroundColor: '#c5c8c6',
	borderColor: '#1d1f21',
	cursorColor : white,

	colors: {
		black: black,
		red: red,
		green: green,
		yellow: yellow,
		blue: blue,
		magenta: magenta,
		cyan: cyan,
		white: white,
		lightBlack: black,
		lightRed: red,
		lightGreen: green,
		lightYellow: yellow,
		lightBlue: blue,
		lightMagenta: magenta,
		lightCyan: cyan,
		lightWhite: white
	},

	css: `
		.tabs_title {
			color: #c4c7c4;
			font-weight: bold;
		}
		.tab_tab {
			background-color: #3c3e40;
			color: #c4c7c4;
			opacity: .5;
			font-weight: bold;
		}
		.tab_active {
			background-color: #27292b;
			opacity: 1;
		}
		${config.css}
	`

});
