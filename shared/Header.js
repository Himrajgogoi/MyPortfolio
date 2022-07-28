import React, { useState } from "react";
import { useRouter } from "next/router";
import { NavbarToggler, Collapse, Modal, ModalBody } from "reactstrap";
import NextLink from "next/link";
import styles from "../styles/Header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import fire from "../config/fire_config";

function Header() {
  const router = useRouter();
  const [isOpen, setisOpen] = useState(false);

  const [modal, setModal] = useState(false);
  const [error, setError] = useState(" ");

  ///user signIn
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        alert(err.message);
        setError(err.message);
      });

    setEmail("");
    setPassword("");
    setModal(!modal);
  };

  const handleLogout = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
        router.reload();
      });
  };

  return (
    <div className={styles.header_content}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <span
          className="navbar-brand"
          href="#"
          style={{ marginRight: "40vw" }}
        ></span>
        <NavbarToggler onClick={() => setisOpen(!isOpen)}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <ul className="navbar-nav">
            <li>
              <NextLink href="/">
                <span className={styles.hover_underline_animation}>Home</span>
              </NextLink>
            </li>
            <li>
              <NextLink href="/aboutme">
                <span className={styles.hover_underline_animation}>
                  About me
                </span>
              </NextLink>
            </li>
            <li>
              <NextLink href="/projects">
                <span className={styles.hover_underline_animation}>
                  Projects
                </span>
              </NextLink>
            </li>
            <li>
              <NextLink href="/#websites">
                <span className={styles.hover_underline_animation}>
                  Websites
                </span>
              </NextLink>
            </li>
            <li>
              <NextLink href="/#articles">
                <span className={styles.hover_underline_animation}>
                  Articles
                </span>
              </NextLink>
            </li>
            <li>
              <NextLink href="/contactme">
                <span className={styles.hover_underline_animation}>
                  Contact me
                </span>
              </NextLink>
            </li>
            <li onClick={() => setModal(!modal)}>
              <span className={styles.hover_underline_animation}>Sign In</span>
            </li>
            <li onClick={() => setModal(!modal)}>
              <span
                className={styles.hover_underline_animation}
                onClick={() => handleLogout()}
              >
                Sign Out
              </span>
            </li>
          </ul>
        </Collapse>
      </nav>
      <Modal isOpen={modal}>
        <ModalBody>
          <span
            className="fa fa-close fa-lg"
            onClick={() => setModal(!modal)}
          ></span>
          <form onSubmit={handleLogin}>
            <div class="form-group">
              <label for="username">Email</label>
              <input
                type="email"
                className="form-control"
                id="username"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="passwordoftheuser">Password</label>
              <input
                type="password"
                className="form-control"
                id="passwordoftheuser"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <div>{error}</div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Header;
