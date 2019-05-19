import React from "react";
import styled from "styled-components";
import Avatar from "react-avatar-edit";

import img from "../../../assets/logos/crew-hands-logo.png";

class UploadLogo extends React.Component {
  constructor(props) {
    super(props);
    const src = "";
    this.state = {
      img:
        { data: img, contentType: "" },
      preview: img,
      src
    };
    this.onCrop = this.onCrop.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }
  // this.resetForm(name);
  // // this.cleanFields(elements)
  ssd
  handlePost = async () => {
    try {
      console.log("state", this.state)
      const response = await fetch("http://localhost:9000/api/user/logo", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: this.state.img

      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
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
        <Avatar
          width={290}
          height={195}
          onCrop={this.onCrop}
          onClose={this.onClose}
          onBeforeFileLoad={this.onBeforeFileLoad}
          src={this.state.src}
        />
        <img src={this.state.preview} alt="Logo preview" />

        <Button onClick={this.handlePost}>Hochladen</Button>
      </div>
    );
  }
}

export default UploadLogo;
