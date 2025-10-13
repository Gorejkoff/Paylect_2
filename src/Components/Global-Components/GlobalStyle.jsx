import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
	--font-family: "Unbounded", sans-serif;
	--second-family: "Stratos", sans-serif;
	--paylect-black: #000000;
	--paylect-mine-shaft: #373737;
	--paylect-outrageous-orange: #ff6338;
	--color-white-solid: #ffffff;
	--color-white-solid-opacity-35: #ffffff59;
	--color-grey-1: #030303;
	--color-spring-green-73: #00ff83;
	--color-grey-76: #c1c1c1;
	--color-spring-green-45: #22c55e;
	--color-grey-96: #f4f6f6;
	--color-modal-background: rgba(10, 10, 10, 0.8);
	--color-almost-black:#141414;
}

* {
	padding: 0;
	margin: 0;
	border: 0;
	box-sizing: border-box;
	font-family: var(--font-family); 
}

*,
*:before,
*:after {
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}

:focus,
:active {
	outline: none;
	-webkit-tap-highlight-color: transparent;
}

a:focus,
a:active {
	outline: none;
	-webkit-tap-highlight-color: transparent;
}

nav,
footer,
header,
aside {
	display: block;
}

html,
body {
	height: 100%;
	width: 100%;
	font-size: 100%;
	line-height: 1;
	font-size: 14px;
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
	font-size: inherit;
	font-family: inherit;
	background-color: transparent;
}

input:-internal-autofill-selected{
background-color: #030303;
color: #ffffff;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active{
	color: #ffffff;
   background-color: #030303;
	-webkit-background-clip: text;
   -webkit-text-fill-color: #ffffff;
	-webkit-box-shadow: none;
}
input::-ms-clear {
	display: none;
}

button {
	cursor: pointer;color: inherit
}

button::-moz-focus-inner {
	padding: 0;
	border: 0;
}

a,
a:visited {
	text-decoration: none;
	color: inherit;
}

a:hover {
	text-decoration: none;
}
ol li,
ul li {
	list-style: none;
}

img {
	vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-size: inherit;
	font-weight: 400;
}

body{
	position: relative;
	margin-bottom: 20px;
	background-color: var(--color-grey-1, #030303);
	color: var(--color-white-solid, #ffffff)
}
#root{
	position: relative;
}
`;
