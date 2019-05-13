import React from "react";
import styled from "styled-components";
import Avatar from "react-avatar-edit";

import img from "../../../assets/logos/crew-hands-logo.png";

class UploadLogo extends React.Component {
  constructor(props) {
    super(props);
    const src = "./example/einshtein.jpg";
    this.state = {
      preview: img,
      src
    };
    this.onCrop = this.onCrop.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this);
  }

  onSubmit() {

  }
  onClose() {
    this.setState({ preview: null });
  }

  onCrop(preview) {
    this.setState({ preview });
  }

  onBeforeFileLoad(elem) {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    }
  }

  render() {
    const Button = styled.button`
      margin-left: 15px;
    `;
    return (
      <div className="padding-left">
        <h2>Klick darauf um dein Firmenlogo hochzuladen:</h2>
        <Avatar
          width={290}
          height={195}
          onCrop={this.onCrop}
          onClose={this.onClose}
          onBeforeFileLoad={this.onBeforeFileLoad}
          src={this.state.src}
        />
        <img src={this.state.preview} alt="Preview" />
        <Button>Hochladen</Button>
        <Button>Abbrechen</Button>
      </div>
    );
  }
}

export default UploadLogo;
