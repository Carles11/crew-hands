import React from 'react'
import Button from 'components/elements/Button/Button'

const HomeButtons = () => {
    return (
        <section className="home-buttons-container">
            <Button
                elementType="Link"
                pathLink="/suppliers-profile"
                size="sm"
                variant="light"
                className="btn-home"
            >
                Ich leite eine Crew
            </Button>
            <Button
                elementType="Link"
                pathLink="/hands-profile"
                size="sm"
                variant="primary"
                className="btn-home"
            >
                Ich bin Crew
            </Button>
        </section>
    )
}

export default HomeButtons
