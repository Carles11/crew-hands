import React from 'react'
import styled from 'styled-components'

const Sliders = styled.section`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 20px;
    margin: 15px;
`
const Label = styled.label`
    font-family: 'PetitaMedium', sans-serif;
    font-size: 1.1em;
    padding-right: 5px;
    padding-left: 35px;
    min-width: 150px;
`
const Buttons = styled.div`
    margin: 15px;
`
class SliderButton extends React.Component {
    state = {
        active: false,
    }
    handleClick = (e) => {
        this.setState((prevState) => ({ active: !prevState.active }))
    }
    render() {
        const { active } = this.state
        const { label } = this.props
        const id = `${this.props.label}_checkbox`
        return (
            <Sliders className="switch" htmlFor="checkbox">
                <Label htmlFor={id}>{label}</Label>
                <Buttons onClick={this.handleClick}>
                    <input
                        type="checkbox"
                        id={id}
                        label={label}
                        checked={active}
                    />
                    <div className="slider round" />
                </Buttons>
            </Sliders>
        )
    }
}

export default SliderButton
