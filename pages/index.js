import Head from "next/head";
import { useEffect, useState } from "react";
import { connectToDatabase } from "../lib/mongodb";
import styles from "../styles/Home.module.css";
import Header from "../shared/Header";
import fire from "../config/fire_config";
import axios from "axios";
import { Modal, ModalBody } from "reactstrap";
import Loader from "../shared/Loader";
import imageCompression from "browser-image-compression";

export default function Home({
  isConnected,
  skills,
  frameworks,
  databases,
  articles,
  websites,
}) {
  const [links, setLinks] = useState([]);
  const [webs, setWebsites] = useState([]);
  const [isOpen, setModal] = useState(false);
  const [isOpen_skills, setModalSkills] = useState(false);
  const [update, setUpdate] = useState(false);
  const [url, setUrl] = useState(null);
  const [flag, setFlag] = useState(null);

  const [image, setImage] = useState(null);
  const [entity, setEntity] = useState("not provided");
  const [experience, setExperience] = useState("not provided");
  const [id, setId] = useState(null);
  const [public_id, setPublicId] = useState(null);

  ///check user
  const [loggedIn, setLoggedIn] = useState(false);

  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  useEffect(() => {
    /// to populate the articles
    function Articles() {
      const body = {
        links: articles,
      };
      axios
        .post("/api/article_preview", body)
        .then((res) => {
          setLinks(res.data);
        })
        .catch((error) => {
          alert(error.message);
        });
    }

    /// to populate the websites
    function Websites() {
      const body = {
        links: websites,
      };
      axios
        .post("/api/website_preview", body)
        .then((res) => {
          setWebsites(res.data);
        })
        .catch((error) => {
          alert(error.message);
        });
    }
    Websites();
    Articles();
  }, []);

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  /// update skill or framework or database
  const updateSkill_or_Frmrk_or_db = async (id, public_id) => {
    let img = null;
    if (image) {
      const compressedImage = await imageCompression(image, {
        maxSizeMB: 2,
        useWebWorker: true,
      });

      img = await getBase64(compressedImage);
    }
    if (flag === "skill") {
      const body = {
        id: id,
        skill: entity,
        experience: experience,
        public_id: public_id,
        image: img,
      };

      alert("process?");
      axios
        .patch("/api/language", body)
        .then((res) => window.location.reload())
        .catch((err) => alert(err.message));
    } else if (flag === "framework") {
      const body = {
        id: id,
        framework: entity,
        experience: experience,
        public_id: public_id,
        image: img,
      };

      alert("process?");
      axios
        .patch("/api/framework", body)
        .then((res) => window.location.reload())
        .catch((err) => alert(err.message));
    } else if (flag === "database") {
      const body = {
        id: id,
        technology: entity,
        experience: experience,
        public_id: public_id,
        image: img,
      };

      alert("process?");
      axios
        .patch("/api/database", body)
        .then((res) => window.location.reload())
        .catch((err) => alert(err.message));
    }
  };

  /// posting skill or framework or database
  const postSkill_or_Frmrk_or_db = async () => {
    let img = null;
    if (image !== null && entity !== null && experience !== null) {

      const compressedImage = await imageCompression(image, {
        maxSizeMB: 2,
        useWebWorker: true,
      });

      img = await getBase64(compressedImage);

      if (flag === "skill") {
        const body = {
          skill: entity,
          experience: experience,
          image: img,
        };
        alert("process?");
        axios
          .post("/api/language", body)
          .then((res) => window.location.reload())
          .catch((err) => alert(err.message));
      } else if (flag === "framework") {
        const body = {
          framework: entity,
          experience: experience,
          image: img,
        };
        alert("process?");
        axios
          .post("/api/framework", body)
          .then((res) => window.location.reload())
          .catch((err) => alert(err.message));
      } else if (flag === "database") {
        const body = {
          technology: entity,
          experience: experience,
          image: img,
        };
        alert("process?");
        axios
          .post("/api/database", body)
          .then((res) => window.location.reload())
          .catch((err) => alert(err.message));
      }
    } else {
      alert("some fields are missing !");
    }
  };

  /// deleting a skill or framework or database
  const deleteSkill_or_Frmrk_or_db = (id, public_id) => {
    const body = {
      id: id,
      image: public_id,
    };

    if (flag === "skill") {
      alert("delete?");
      fetch("/api/language", {
        method: "DELETE",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => window.location.reload())
        .catch((err) => alert(err.message));
    } else if (flag === "framework") {
      alert("delete?");
      fetch("/api/framework", {
        method: "DELETE",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => window.location.reload())
        .catch((err) => alert(err.message));
    } else if (flag === "database") {
      alert("delete?");
      fetch("/api/database", {
        method: "DELETE",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => window.location.reload())
        .catch((err) => alert(err.message));
    }
  };

  /// posting an article_or_website
  const postArticle_or_Website = async () => {
    if (url && image) {
      let img;
      const compressedImage = await imageCompression(image, {
        maxSizeMB: 2,
        useWebWorker: true,
      });

      img = await getBase64(compressedImage);

      const body = {
        url: url,
        image: img,
      };
      alert("process?");
      axios
        .post("/api/websites", body)
        .then((data) => window.location.reload())
        .catch((error) => alert(error.message));
    } else if (url) {
      if (flag === "article") {
        const body = {
          article: url,
        };
        alert("process?");
        axios
          .post("/api/articles", body)
          .then((data) => window.location.reload())
          .catch((error) => alert(error.message));
      } else if (flag === "website") {
        const body = {
          url: url,
        };
        alert("process?");
        axios
          .post("/api/websites", body)
          .then((data) => window.location.reload())
          .catch((error) => alert(error.message));
      }
    } else {
      alert("enter valid url!");
    }
  };

  /// deleting an article_or_website
  const deleteArticle_or_website = (index) => {
    if (flag === "article") {
      const body = {
        id: articles[index]._id,
      };
      alert("delete?");
      fetch("/api/articles", {
        method: "DELETE",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => window.location.reload())
        .catch((error) => alert(error.message));
    } else if (flag === "website") {
      const body = {
        id: websites[index]._id,
        image: websites[index].public_id ?? null,
      };
      alert("delete?");
      fetch("/api/websites", {
        method: "DELETE",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => window.location.reload())
        .catch((error) => alert(error.message));
    }
  };

  if (isConnected) {
    return (
      <>
        <Head>
          <title>Himraj Gogoi | Home</title>
        </Head>
        <div>
          <Header />
          <div className={`container ${styles.contents}`}>
            <div>
              <h2 className="animate fadeInLeft left">I am, Himraj Gogoi.</h2>
              <h4 className="animate fadeInRight right">
                Web Developer, Mobile App Developer and a programming
                enthusiast.
              </h4>
              <h5
                className="animate fadeInDown down"
                style={{ color: `#ffde59` }}
              >
                Scroll below.
              </h5>
            </div>
          </div>
          <Modal isOpen={isOpen_skills}>
            <ModalBody>
              <span
                className="fa fa-close fa-lg"
                onClick={() => setModalSkills(!isOpen_skills)}
              ></span>
              <form>
                <div className="form-group">
                  <label for="entity">Entity</label>
                  <input
                    id="entity"
                    type="text"
                    className="form-control"
                    placeholder={entity ?? " "}
                    onChange={(e) => setEntity(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label for="experience">Experience</label>
                  <input
                    id="experience"
                    type="text"
                    className="form-control"
                    placeholder={experience ?? " "}
                    onChange={(e) => setExperience(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label for="image">Image</label>
                  <input
                    id="image"
                    type="file"
                    className="form-control"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() =>
                    update
                      ? updateSkill_or_Frmrk_or_db(id, public_id)
                      : postSkill_or_Frmrk_or_db()
                  }
                >
                  {update ? "Update" : " Post"}
                </button>
              </form>
            </ModalBody>
          </Modal>
          <div className={`container ${styles.titles}`}>
            <h2>Language Experience.</h2>
            {loggedIn ? (
              <span
                className="fa fa-plus fa-lg"
                onClick={() => {
                  setFlag("skill");
                  setUpdate(false);
                  setModalSkills(!isOpen_skills);
                }}
                style={{ color: "white" }}
              ></span>
            ) : (
              <div></div>
            )}
          </div>
          <div className={`${styles.scrolled_content}`}>
            {skills.map((skill) => (
              <div className={styles.scrolled_content_item} key={skill._id}>
                <div
                  className={`card ${styles.cards}`}
                  style={{
                    backgroundImage: `url(${skill.image})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className={`card-body ${styles.card_content}`}>
                    {skill.skill}

                    {loggedIn ? (
                      <span
                        className="fa fa-edit fa-lg"
                        onClick={() => {
                          setFlag("skill");
                          setEntity(skill.skill);
                          setExperience(skill.experience ?? null);

                          setId(skill._id);
                          setPublicId(skill.public_id ?? null);
                          setUpdate(true);
                          setModalSkills(!isOpen_skills);
                        }}
                      ></span>
                    ) : (
                      <div></div>
                    )}

                    {loggedIn ? (
                      <span
                        className="fa fa-trash fa-lg"
                        onClick={() => {
                          setFlag("skill");
                          deleteSkill_or_Frmrk_or_db(
                            skill._id,
                            skill.public_id ?? null
                          );
                        }}
                      ></span>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
                <br></br>
                <div>
                  <b className={styles.experience}>
                    Experience: {skill.experience}{" "}
                  </b>
                </div>
              </div>
            ))}
          </div>
          <div className={`container ${styles.titles}`}>
            <h2>Framework Experience.</h2>
            {loggedIn ? (
              <span
                className="fa fa-plus fa-lg"
                onClick={() => {
                  setFlag("framework");
                  setUpdate(false);
                  setModalSkills(!isOpen_skills);
                }}
                style={{ color: "white" }}
              ></span>
            ) : (
              <div></div>
            )}
          </div>
          <div className={`${styles.scrolled_content}`}>
            {frameworks.map((framework) => (
              <div className={styles.scrolled_content_item} key={framework._id}>
                <div
                  className={`card ${styles.cards}`}
                  style={{
                    backgroundImage: `url(${framework.image})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className={`card-body ${styles.card_content}`}>
                    {framework.framework}

                    {loggedIn ? (
                      <span
                        className="fa fa-edit fa-lg"
                        onClick={() => {
                          setFlag("framework");
                          setEntity(framework.framework);
                          setExperience(framework.experience ?? null);

                          setId(framework._id);
                          setPublicId(framework.public_id ?? null);
                          setUpdate(true);
                          setModalSkills(!isOpen_skills);
                        }}
                      ></span>
                    ) : (
                      <div></div>
                    )}
                    {loggedIn ? (
                      <span
                        className="fa fa-trash fa-lg"
                        onClick={() => {
                          setFlag("framework");
                          deleteSkill_or_Frmrk_or_db(
                            framework._id,
                            framework.public_id ?? null
                          );
                        }}
                      ></span>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
                <br></br>
                <div>
                  <b className={styles.experience}>
                    Experience: {framework.experience}{" "}
                  </b>
                </div>
              </div>
            ))}
          </div>
          <div className={`container ${styles.titles}`}>
            <h2>Database Experience.</h2>
            {loggedIn ? (
              <span
                className="fa fa-plus fa-lg"
                onClick={() => {
                  setFlag("database");
                  setUpdate(false);
                  setModalSkills(!isOpen_skills);
                }}
                style={{ color: "white" }}
              ></span>
            ) : (
              <div></div>
            )}
          </div>
          <div className={`${styles.scrolled_content}`}>
            {databases.map((base) => (
              <div className={styles.scrolled_content_item} key={base._id}>
                <div
                  className={`card ${styles.cards}`}
                  style={{
                    backgroundImage: `url(${base.image})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className={`card-body ${styles.card_content}`}>
                    {base.technology}

                    {loggedIn ? (
                      <span
                        className="fa fa-edit fa-lg"
                        onClick={() => {
                          setFlag("database");
                          setEntity(base.technology);
                          setExperience(base.experience ?? null);

                          setId(base._id);
                          setPublicId(base.public_id ?? null);
                          setUpdate(true);
                          setModalSkills(!isOpen_skills);
                        }}
                      ></span>
                    ) : (
                      <div></div>
                    )}
                    {loggedIn ? (
                      <span
                        className="fa fa-trash fa-lg"
                        onClick={() => {
                          setFlag("database");
                          deleteSkill_or_Frmrk_or_db(
                            base._id,
                            base.public_id ?? null
                          );
                        }}
                      ></span>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
                <br></br>
                <div>
                  <b className={styles.experience}>
                    Experience: {base.experience}{" "}
                  </b>
                </div>
              </div>
            ))}
          </div>
          <Modal isOpen={isOpen}>
            <ModalBody>
              <span
                className="fa fa-close fa-lg"
                onClick={() => setModal(!isOpen)}
              ></span>
              <form>
                <div className="form-group">
                  <label for="url">Url</label>
                  <input
                    id="url"
                    type="text"
                    className="form-control"
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  {flag === "website" ? (
                    <>
                      <label for="image">Image</label>
                      <input
                        id="image"
                        type="file"
                        accept="image/*"
                        className="form-control"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => postArticle_or_Website()}
                >
                  Post
                </button>
              </form>
            </ModalBody>
          </Modal>
          <div className={`container ${styles.titles}`} id="articles">
            <h2>Some of my articles.</h2>
            {loggedIn ? (
              <span
                className="fa fa-plus fa-lg"
                onClick={() => {
                  setFlag("article");
                  setModal(!isOpen);
                }}
                style={{ color: "white" }}
              ></span>
            ) : (
              <div></div>
            )}
          </div>
          {links.length === 0 && (
            <div className={`container ${styles.titles}`}>
              {" "}
              <Loader />
            </div>
          )}
          <div className={`container ${styles.scrolled_content}`}>
            {links.length !== 0 &&
              links.map((link, index) => (
                <div
                  className={`card ${styles.webscrapper_card_item}`}
                  key={index}
                >
                  <div className="card-img">
                    <img src={link.ogImage.url} className="img-fluid" />
                  </div>
                  <div className="card-body">
                    <a
                      href={link.ogUrl}
                      style={{ textDecoration: "none" }}
                      target="_blank"
                    >
                      {link.ogTitle}
                    </a>
                    <br></br>
                    <br></br>
                    <small>Published at: {link.ogSiteName}</small>
                    {loggedIn ? (
                      <span
                        className="fa fa-trash fa-lg"
                        onClick={() => {
                          setFlag("article");
                          deleteArticle_or_website(index);
                        }}
                      ></span>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              ))}
          </div>
          <div className={`container ${styles.titles}`} id="websites">
            <h2>My live websites.</h2>
            {loggedIn ? (
              <span
                className="fa fa-plus fa-lg"
                onClick={() => {
                  setFlag("website");
                  setModal(!isOpen);
                }}
                style={{ color: "white" }}
              ></span>
            ) : (
              <div></div>
            )}
          </div>
          {webs.length === 0 && (
            <div className={`container ${styles.titles}`}>
              {" "}
              <Loader />
            </div>
          )}
          <div className={`container ${styles.scrolled_content}`}>
            {webs.length !== 0 &&
              webs.map((link, index) => (
                <div
                  className={`card ${styles.webscrapper_card_item}`}
                  key={index}
                >
                  <div className={`card-img ${styles.card_img}`}>
                    <img
                      src={websites[index].image ?? "/background.jpeg"}
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body">
                    <a
                      href={link.requestUrl}
                      style={{ textDecoration: "none" }}
                      target="_blank"
                    >
                      {link.ogTitle}
                    </a>
                    <br></br>
                    {loggedIn ? (
                      <span
                        className="fa fa-trash fa-lg"
                        onClick={() => {
                          setFlag("website");
                          deleteArticle_or_website(index);
                        }}
                      ></span>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              ))}
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

export async function getServerSideProps(context) {
  const { client, db } = await connectToDatabase();

  const isConnected = await client.isConnected();
  let skillset, frameworkset, databaseset, articleset, websiteset;
  if (isConnected) {
    const skills = await db.collection("Skills").find({}).toArray();
    const frameworks = await db.collection("Frameworks").find({}).toArray();
    const databases = await db
      .collection("Database_technologies")
      .find({})
      .toArray();
    const articles = await db.collection("Articles").find({}).toArray();
    const websites = await db
      .collection("Websites_and_Apps")
      .find({})
      .toArray();

    skillset = JSON.parse(JSON.stringify(skills));
    frameworkset = JSON.parse(JSON.stringify(frameworks));
    databaseset = JSON.parse(JSON.stringify(databases));
    articleset = JSON.parse(JSON.stringify(articles));
    websiteset = JSON.parse(JSON.stringify(websites));
  }

  return {
    props: {
      isConnected: isConnected,
      skills: skillset,
      frameworks: frameworkset,
      databases: databaseset,
      articles: articleset,
      websites: websiteset,
    },
  };
}
