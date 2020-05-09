import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from 'components/elements/Button/Button'

const HomeButtons = () => {
    return (
        <section className="home-buttons-container">
            <Link to="/suppliers-profile">
                <Button
                    elementType="Link"
                    pathLink="/suppliers-profile"
                    size="sm"
                    variant="light"
                >
                    Ich bin Crew-Director
                </Button>
            </Link>
            <div>
                <Link to="/hands-profile">
                    <Button
                        elementType="Link"
                        pathLink="/hands-profile"
                        size="sm"
                        variant="primary"
                    >
                        Ich bin Hand
                    </Button>
                </Link>
            </div>
        </section>
    )
}

export default HomeButtons
