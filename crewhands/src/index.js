import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import 'styles/styles.scss'

import App from './App'
import * as serviceWorker from './serviceWorker'
import { render } from 'react-dom'
import CookieConsent from 'react-cookie-consent'
render(
    <Router>
        <App />
        <CookieConsent
            debug={false}
            buttonText="Akzeptieren"
            style={{
                background: '#2B373B',
                fontSize: '12px',
                fontFamily: 'PetitaLight',
                opacity: '0.95',
            }}
            buttonStyle={{
                color: '#ffffff',
                backgroundColor: '#0062cf',
                fontSize: '13px',
                borderRadius: '50px',
                fontFamily: 'PetitaBold',
            }}
        >
            Diese Website verwendet Cookies. Durch die Nutzung dieser Webseite
            erkl&auml;ren Sie sich damit einverstanden, dass Cookies gesetzt
            werden.
            <Link to="/datenschutz"> Mehr erfahren</Link>
        </CookieConsent>
    </Router>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
