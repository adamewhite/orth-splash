import { useEffect } from 'react';
import Header from '../components/Header';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

const GOOGLE_FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500;600;700&display=swap';

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

:root {
  /* Background colors - adjust these values to change the site colors */
  --bg-color: rgb(248, 228, 163);
  --gradient-start: rgb(237, 223, 185);
  --gradient-end: rgb(255, 247, 153);
}

*, *::before, *::after {
  box-sizing: border-box;
}

html {
  background-color: var(--bg-color);
  background-image: linear-gradient(306deg, var(--gradient-start), var(--gradient-end));
  background-attachment: fixed;
  height: 100%;
  height: -webkit-fill-available;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
  color: black;
  text-decoration: none;
}

ul {
  list-style-type: none;
}

@font-face {
  font-family: "Sweet-Sans";
  src: url("../public/sweetsans-light-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Sweet-Sans";
  src: url("../public/sweetsans-italic-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: italic;
}

body {
  font-family: 'Hanken Grotesk', Helvetica, sans-serif;
  font-size: 10px;
  min-width: 320px;
  /* font-style: italic; */
  /* background: rgb(241, 238, 227); */
  background-color: var(--bg-color);
  background-image: linear-gradient(306deg, var(--gradient-start), var(--gradient-end));
  background-attachment: fixed;
  margin: 1rem 5rem;
  /* border: 1px solid green; */
}


@media (max-width: 768px) {
    body {
      margin: 1rem 1rem;
    }
  }

@media (max-width: 475px) {
  body {
    margin: .5rem .5rem;

  }
}

a:hover {
  color: #f85e49;
  transition: 200ms;
}

`;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Fix for iPad Chrome viewport height bug
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);

    return () => {
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
    };
  }, []);

  return (
    <>
      <Head>
        <title>JOHN ORTH</title>
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link
          href={GOOGLE_FONTS_URL}
          rel='stylesheet'
        />
        <meta
          property='og:title'
          content='JOHN ORTH'
        />
        <meta
          name='og:description'
          content='John Orth is an artist based in Brooklyn and Maine.'
        />
        <meta
          property='og:url'
          content='johnorth.com'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dixi5g16o/image/upload/v1708885234/orth-link-preview_oadyes.jpg'
        />
      </Head>
      <GlobalStyles />
      <Header>
        <Component {...pageProps} />
      </Header>
    </>
  );
}

export default MyApp;
