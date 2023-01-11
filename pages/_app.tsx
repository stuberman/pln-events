import "../styles.css";
import React, { useEffect } from 'react';
import Router from 'next/router';
import * as Fathom from 'fathom-client';

Router.events.on('routeChangeComplete', (as, routeProps) => {
  if (!routeProps.shallow) {
    Fathom.trackPageview()
  }
});

const App = ({ Component, pageProps }) => {
  // Initialize Fathom when the app loads
  useEffect(() => {
    Fathom.load(pageProps.data.global.fathomSiteId, {
      includedDomains: [pageProps.data.global.siteUrl]
    })
  }, [])

  return <Component {...pageProps} />
};

export default App;
