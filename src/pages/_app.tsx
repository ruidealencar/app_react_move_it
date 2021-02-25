import { useState } from 'react';

import '../styles/global.css'

import { ChallengesProvider } from "../contexts/ChallengesContext";

function Myapp({Component, pageProps}) {

  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default Myapp
