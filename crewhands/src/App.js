import React, { Component } from 'react'
import Routes from './Routes'

import Footer from './components/Footer'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
        <Footer />
      </div>
    )
  }
}

export default App
