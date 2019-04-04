import React from "react";
import styled from "styled-components";

const Container = styled.div`
  .switch {
    display: inline-block;
    height: 24px;
    position: relative;
    width: 50px;
  }

  .switch input {
    display: none;
  }

  .slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }

  .slider:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 16px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 16px;
  }

  input:checked + .slider {
    border: 1px solid green;
    background-color: #0a6285;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  body {
    background-color: #f1f2f3;
  }
`;

const SliderButton = () => {
  return (
    <Container>
      <label class="switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round" />
      </label>
    </Container>
  );
};

export default SliderButton;
