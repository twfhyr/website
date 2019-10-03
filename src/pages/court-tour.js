import React from "react";
import get from "lodash/get";
import Helmet from "react-helmet";
import { navigateTo } from "gatsby-link";
import Modal from "react-responsive-modal";
import theMeta from "../js/helpers.js";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class RootIndex extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    companyEmail: "",
    companyName: "",
    message: "",
    open: false
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() =>
        this.setState({
          firstname: "",
          lastname: "",
          companyEmail: "",
          companyName: "",
          message: "",
          open: true
        })
      )
      .catch(error => alert(error));
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const {
      firstname,
      lastname,
      companyEmail,
      companyName,
      message,
      open
    } = this.state;

    const siteTitle = "Kleros - Court Tour Page";

    return (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{siteTitle}</title>
        </Helmet>
        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          classNames={{
            modal: "customModal"
          }}
        >
          <h2>Message sent!</h2>
          <p>We will answer you as soon as possible.</p>
          <p>
            While waiting for an answer you can join our{" "}
            <a href="https://t.me/kleros" target="_blank">
              Telegram
            </a>
            .
          </p>
        </Modal>
        <section
          className="ca_home_top ca_escrow_top"
          style={{ minHeight: "10vh" }}
        >
          <div className="container">
            <div className="row ca_txt">
              <div className="col-12 col-md-12 text-left">
                <h1 style={{ marginTop: "15%", fontSize: "420%" }}>
                  {"Kleros Court Tour"}
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section
          className="ca_escrow_content ca_wave_top_inverted"
          style={{ paddingTop: "26rem" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 text-left">
                <h2>Enter fullscreen mode for best experience.</h2>
                <h5>
                  Click on fullscreen at the top right corner of the image below
                  to start
                </h5>
              </div>
            </div>

            <div className="row">
              <div
                className="col-12 col-md-12 one"
                style={{ position: "relative", paddingTop: "56.25%" }}
              >
                <iframe
                  style={{
                    border: "none",
                    width: "inherit",
                    height: "100%",
                    position: "absolute",
                    top: "0",
                    left: "0"
                  }}
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FOWLtvy6EdqqIEKxRLqQ7XF%2FKleros-2%3Fnode-id%3D14%253A4486%26viewport%3D319%252C405%252C0.015625%26scaling%3Dscale-down-width"
                  allowfullscreen
                />
              </div>
            </div>
          </div>
          );
        </section>
      </div>
    );
  }
}

export default RootIndex;
