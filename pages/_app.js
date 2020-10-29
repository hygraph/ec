import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <style jsx global>{`
        @font-face {
          font-family: "Roboto";
          src: url("/fonts/Roboto/Roboto-Regular.ttf");
          font-weight: regular;
          font-style: normal;
          font-display: swap;
        }
        @font-face {
          font-family: "Roboto Condensed";
          src: url("/fonts/Roboto_Condensed/RobotoCondensed-Light.ttf");
          font-weight: light;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
    </div>
  );
}

export default MyApp;
