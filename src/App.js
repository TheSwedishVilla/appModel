import React, { useState } from "react";

import { motion } from "framer-motion";

function App() {
  const [modal, setModal] = useState(false);
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <section
        className="hero is-fullheight is-dark is-bold"
        style={{
          backgroundImage: "url(https://picsum.photos/5000/3000)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <nav
          className="navbar"
          role="navigation"
          aria-label="main navigation"
          style={{ backgroundColor: "rgba(30, 39, 46,0.6)" }}
        >
          <div className="navbar-brand">
            <div className="navbar-item is-size-5" href="/">
              THE SWEDISH VILLA
            </div>

            <button
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={() => setNavbar(!navbar)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>

          <div
            id="navbarBasicExample"
            className={`navbar-menu ${navbar && "is-active"}`}
          >
            <div className="navbar-end">
              <div className="navbar-item">
                <p>Our Experts</p>
              </div>
              <div className="navbar-item">
                <p>About us</p>
              </div>
              <div className="navbar-item">
                <motion.button
                  whileHover={{ backgroundColor: "#1e272e" }}
                  className="button is-success is-small"
                >
                  <i className="fas fa-user"></i>&nbsp;Log in
                </motion.button>
              </div>
            </div>
          </div>
        </nav>
        <div
          className="hero-body"
          style={{ backgroundColor: "rgba(30, 39, 46,0.6)" }}
        >
          <div className="container has-text-centered">
            <h1 className="title is-1">Catch Phrase</h1>
            <motion.button
              whileHover={{ backgroundColor: "#1e272e" }}
              onClick={() => setModal(true)}
              className="button is-rounded is-primary"
            >
              Let's get started !
            </motion.button>
          </div>
        </div>
      </section>

      <section className="hero is-fullheight is-light">
        <div className="hero-body">
          <div className="container">
            <h2 className="title mb-6">Brands who trust us</h2>
            <hr />
            <div className="columns is-mobile is-multiline ">
              <div className="column is-one-quarter-tablet has-text-centered my-6 is-half-mobile">
                <motion.p
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.5,
                    backgroundColor: "#c6a161",
                    borderRadius: 100,
                  }}
                  className="tag is-dark is-size-3 is-large"
                >
                  Brand 1
                </motion.p>
              </div>
              <div className="column is-one-quarter-tablet has-text-centered my-6 is-half-mobile">
                <motion.p
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.5,
                    backgroundColor: "#c6a161",
                    borderRadius: 100,
                  }}
                  className="tag is-dark is-size-3 is-large"
                >
                  Brand 2
                </motion.p>
              </div>
              <div className="column is-one-quarter-tablet has-text-centered my-6 is-half-mobile">
                <motion.p
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.5,
                    backgroundColor: "#c6a161",
                    borderRadius: 100,
                  }}
                  className="tag is-dark is-size-3 is-large"
                >
                  Brand 3
                </motion.p>
              </div>
              <div className="column is-one-quarter-tablet has-text-centered my-6 is-half-mobile">
                <motion.p
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.5,
                    backgroundColor: "#c6a161",
                    borderRadius: 100,
                  }}
                  className="tag is-dark is-size-3 is-large"
                >
                  Brand 4
                </motion.p>
              </div>
              <div className="column is-one-quarter-tablet has-text-centered my-6 is-half-mobile">
                <motion.p
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.5,
                    backgroundColor: "#c6a161",
                    borderRadius: 100,
                  }}
                  className="tag is-dark is-size-3 is-large"
                >
                  Brand 5
                </motion.p>
              </div>
              <div className="column is-one-quarter-tablet has-text-centered my-6 is-half-mobile">
                <motion.p
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.5,
                    backgroundColor: "#c6a161",
                    borderRadius: 100,
                  }}
                  className="tag is-dark is-size-3 is-large"
                >
                  Brand 6
                </motion.p>
              </div>
              <div className="column is-one-quarter-tablet has-text-centered my-6 is-half-mobile">
                <motion.p
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.5,
                    backgroundColor: "#c6a161",
                    borderRadius: 100,
                  }}
                  className="tag is-dark is-size-3 is-large"
                >
                  Brand 7
                </motion.p>
              </div>
              <div className="column is-one-quarter-tablet has-text-centered my-6 is-half-mobile">
                <motion.p
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.5,
                    backgroundColor: "#c6a161",
                    borderRadius: 100,
                  }}
                  className="tag is-dark is-size-3 is-large"
                >
                  Brand 8
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h2 className="title is-1 mb-6">How does it Work</h2>
            <hr />
            <div className="columns">
              <div className="column">
                <div
                  className="box content has-text-white"
                  style={{ backgroundColor: "#1e272e" }}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    at nibh vitae dolor molestie convallis. Donec ut dignissim
                    massa, ac scelerisque urna. Pellentesque imperdiet, erat et
                    tristique posuere, nisl lorem gravida eros, molestie
                    accumsan ante lacus nec velit. Nunc euismod rhoncus
                    volutpat. Praesent scelerisque placerat imperdiet. Nam
                    vestibulum felis sollicitudin elit congue iaculis. Mauris
                    vulputate mi nec erat posuere congue quis non nunc.{" "}
                  </p>
                </div>
                <div className="has-text-centered">
                  <motion.button
                    whileHover={{ backgroundColor: "#1e272e" }}
                    onClick={() => setModal(true)}
                    className="button is-rounded is-primary is-fullwidth"
                  >
                    Let's get started !
                  </motion.button>
                </div>
              </div>
              <div className="column">
                <ul className="steps is-vertical">
                  <li className="steps-segment">
                    <span href="#" className="steps-marker">
                      <span className="icon">
                        <i className="fas fa-book-reader"></i>
                      </span>
                    </span>
                    <div className="steps-content">
                      <p className="is-size-4">Define your project</p>
                      <p>
                        Do a meeting with our curators to discuss you project
                      </p>
                      <hr />
                    </div>
                  </li>
                  <li className="steps-segment">
                    <span href="#" className="steps-marker">
                      <span className="icon">
                        <i className="fas fa-users"></i>
                      </span>
                    </span>
                    <div className="steps-content">
                      <p className="is-size-4">Experts presentation</p>
                      <p>
                        We provide you with a curated list of independent
                        experts that match perfectly you project
                      </p>
                      <hr />
                    </div>
                  </li>
                  <li className="steps-segment">
                    <span className="steps-marker">
                      <span className="icon">
                        <i className="fas fa-clipboard-check"></i>
                      </span>
                    </span>
                    <div className="steps-content">
                      <p className="is-size-4">Decision</p>
                      <p>
                        Each experts express his willing to work on the project
                        and you make the final choice
                      </p>
                      <hr />
                    </div>
                  </li>
                  <li className="steps-segment">
                    <span className="steps-marker">
                      <span className="icon">
                        <i className="fas fa-rocket"></i>
                      </span>
                    </span>
                    <div className="steps-content">
                      <p className="is-size-4">Let's work !</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-fullheight is-light">
        <div className="hero-body">
          <div className="container">
            <h2 className="title mb-6">Reviews</h2>
            <hr />

            <div className="columns">
              <div className="column is-1"></div>
              <div className="column is-6">
                <figure className="image is-5by3">
                  <img src="https://picsum.photos/500/300" alt="random" />
                </figure>
              </div>
              <div className="column">
                <p className="title is-2 mt-6">"Some nice Client review"</p>
                <p className="subtitle">Client name</p>
              </div>
            </div>
            <div className="has-text-centered">
              <motion.button
                whileHover={{ backgroundColor: "#1e272e" }}
                onClick={() => setModal(true)}
                className="button is-rounded is-primary"
              >
                Let's get started !
              </motion.button>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-2"></div>
              <div className="column">
                <p>Adress :</p>
                <p>Chimney office</p>
                <p>Skeppsbron 38,</p>
                <p>111 30 Stockholm</p>
              </div>
              <div className="column">
                <p>Contact :</p>
                <p>
                  <i className="fas fa-envelope"></i> office@theswedishvilla.com
                </p>
                <p>
                  <i className="fab fa-facebook"></i>&nbsp;
                  <i className="fab fa-instagram"></i>&nbsp;
                  <i className="fab fa-linkedin"></i>
                </p>
              </div>
              <div className="column is-1"></div>
            </div>
          </div>
        </div>
      </section>

      {modal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="modal is-active"
        >
          <div
            className="modal-background"
            onClick={() => setModal(false)}
          ></div>
          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
            className="modal-card"
          >
            <header className="modal-card-head">
              <p className="modal-card-title">Let's meet up</p>
              <button
                className="delete"
                aria-label="close"
                onClick={() => setModal(false)}
              ></button>
            </header>
            <section className="modal-card-body">
              <div className="columns">
                <div className="column">
                  <div className="field">
                    <div className="control has-icons-left">
                      <input
                        className="input is-small"
                        type="text"
                        placeholder="Company*"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-building"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control has-icons-left">
                      <input
                        className="input is-small"
                        type="text"
                        placeholder="Name*"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control has-icons-left">
                      <input
                        className="input is-small"
                        type="text"
                        placeholder="Position"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-suitcase"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control has-icons-left">
                      <input
                        className="input is-small"
                        type="text"
                        placeholder="Mail*"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control has-icons-left">
                      <input
                        className="input is-small"
                        type="text"
                        placeholder="Phone"
                      />
                      <span class="icon is-small is-left">
                        <i class="fas fa-phone"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <input
                    type="date"
                    className="input is-small"
                    placeholder="Date ..."
                  />
                </div>
              </div>

              <hr />
              <p className="title is-4">How would you like to be conacted ?</p>
              <div className="field">
                <input
                  className="is-checkradio is-primary"
                  id="zoom"
                  type="checkbox"
                  name="zoom"
                />
                <label htmlFor="zoom">Zoom</label>
                <input
                  className="is-checkradio is-primary"
                  id="google"
                  type="checkbox"
                  name="google"
                />
                <label htmlFor="google">Google meeting</label>
                <input
                  className="is-checkradio is-primary"
                  id="microsoft"
                  type="checkbox"
                  name="microsoft"
                />
                <label htmlFor="microsoft">Microsoft Team</label>
                <input
                  className="is-checkradio is-primary"
                  id="phone"
                  type="checkbox"
                  name="phone"
                />
                <label htmlFor="phone">Phone</label>
              </div>
            </section>
            <footer className="modal-card-foot">
              <motion.button
                whileHover={{ backgroundColor: "#1e272e" }}
                className="button is-primary"
                onClick={() => setModal(false)}
              >
                Request meeting
              </motion.button>
              <motion.button
                whileHover={{ backgroundColor: "#1e272e", color: "white" }}
                className="button is-light"
                onClick={() => setModal(false)}
              >
                Cancel
              </motion.button>
            </footer>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default App;
