import React, { useState } from "react";
import Head from "next/head";
import { connectToDatabase } from "../lib/mongodb";
import Header from "../shared/Header";
import styles from "../styles/aboutme.module.css";
import { Modal, ModalBody } from "reactstrap";
import axios from "axios";
import fire from "../config/fire_config";

function Aboutme({ isConnected, aboutme }) {
  const [description, setDescription] = useState(null);
  const [resume, setResume] = useState(null);
  const [isOpen, setModal] = useState(false);

  ///check user
  const [loggedIn, setLoggedIn] = useState(false);

  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const update = async () => {
    let url = null;

    // modified the code for better logic.
    if (resume) {
      url = await getBase64(resume);
    }
    const body = {
      id: aboutme._id,
      description: description ?? aboutme.description,
      resume: url,
      public_id: aboutme.public_id ?? null,
    };
    alert("process?");
    axios
      .put("/api/aboutme", body)
      .then((data) => window.location.reload())
      .catch((error) => alert(error.message));
  };

  if (isConnected) {
    return (
      <>
        <Head>
          <title>Himraj Gogoi | About me</title>
        </Head>
        <div>
          <Header />
          <Modal isOpen={isOpen}>
            <ModalBody>
              <span
                className="fa fa-close fa-lg"
                onClick={() => setModal(!isOpen)}
              ></span>
              <form>
                <div className="form-group">
                  <label for="desc">Description</label>
                  <textarea
                    id="desc"
                    className="form-control"
                    rows="6"
                    placeholder={aboutme.description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <label for="resume">Resume</label>
                  <input
                    id="resume"
                    type="file"
                    className="form-control"
                    onChange={(e) => setResume(e.target.files[0])}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => update()}
                >
                  Update
                </button>
              </form>
            </ModalBody>
          </Modal>
          <div className={`container ${styles.contents}`}>
            <img src="/my_dp.jpg" className={`img-fluid ${styles.my_dp}`}></img>
            <h2 className="animate fadeInLeft left">About Me.</h2>
            <div className="row">
              <div className="col-12 col-md-4">
                <h4 className="animate fadeInDown down">
                  <b>I am, Himraj Gogoi.</b>
                </h4>
              </div>
              <div className="col-12 col-md-5 offset-md-1">
                <p
                  style={{
                    fontFamily: `'Hind Madurai', sans-serif`,
                    color: "white",
                  }}
                >
                  {aboutme.description}
                </p>
                {loggedIn ? (
                  <span
                    className="fa fa-edit fa-lg"
                    onClick={() => {
                      setModal(!isOpen);
                    }}
                    style={{ color: "white" }}
                  ></span>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Himraj Gogoi | Home</title>
        </Head>
        <div className={`container ${styles.contents}`}>
          <p>
            <h2>An error occured.</h2>
          </p>
        </div>
      </>
    );
  }
}

export default Aboutme;

export async function getServerSideProps(context) {
  const { client, db } = await connectToDatabase();

  const isConnected = await client.isConnected();
  const aboutme = await db.collection("AboutMe").find({}).toArray();
  const about = JSON.parse(JSON.stringify(aboutme))[0];

  return {
    props: {
      isConnected: isConnected,
      aboutme: about,
    },
  };
}
