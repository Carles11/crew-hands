import React from 'react'
import HomeButtons from '../components/home/HomeButtons'
import HomeTitle from '../components/home/HomeTitle'

import './views.scss'

const Home = () => {
    return (
        <div className="bg-image">
            <HomeTitle />
            <HomeButtons />
        </div>
    )
}

export default Home
