import React,{useState} from 'react'
import Head from "next/head";
import { connectToDatabase } from '../lib/mongodb'
import Header from '../shared/Header'
import styles from "../styles/projects.module.css"
import {CardHeader, CardBody, Collapse, Card, ModalBody, Modal} from 'reactstrap';
import axios from 'axios';
import fire from '../config/fire_config';


function projects({isConnected, projects}) {


    const [flag, setFlag] = useState(null);
    const [framework, setFramework] = useState("not provided");
    const [url, setUrl] = useState("not provided");
    const [id, setId] = useState(null);
    const [ modal, setModal] = useState(false);

    ///check user
    const [loggedIn, setLoggedIn] = useState(false);

    fire.auth().onAuthStateChanged((user) => {
        if (user) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
    });

    
    /// posting and updating projects
    const handleSubmit = () =>{
        
        if(framework !== null && url !== null){


            if(flag === 'post'){

                const body = {
                    framework: framework,
                    url: url
                }
                alert("process?");
                axios.post('/api/projects', body)
                .then(res=> window.location.reload())
                .catch(error => alert(error.message));
            }

            else if( flag === 'update'){
                const body = {
                    id: id,
                    url: url
                }
                alert("process?");
                axios.put('/api/projects', body)
                .then(res=> window.location.reload())
                .catch(error => alert(error.message));
            }
        }
        else{
            alert('some fields are missing!');
        }
    }

      /// delete the project
      const deleteProject = (id,url) =>{
        const body = {
            id: id,
            url: url
        }
        alert("delete?");
        axios.patch('/api/projects', body)
        .then(res=> window.location.reload())
        .catch(error => alert(error.message));
    }

    /// delete the framework
    const deleteFramework = (id) =>{
        const body = {
            id: id
        }
        alert("delete?");
        fetch('/api/projects',{
            method: 'DELETE',
            body: JSON.stringify(body),
            headers:{
              'Content-Type': 'application/json'
            }
        })
        .then(res=>window.location.reload())
        .catch(err=>alert(err.message))
    }

    if(isConnected){
        return(
            <>
             <Head>
                 <title>Himraj Gogoi | Projects</title>
             </Head>
             <div>
                 <Header/>
                 <Modal isOpen={modal}>
                     <ModalBody>
                        <span
                           className="fa fa-close fa-lg"
                           onClick={()=>setModal(!modal)}
                        ></span>
                        <form>
                           <div className="form-group">
                               <label for="framework">Framework</label>
                               <input id="framework" type="text" className="form-control" placeholder={framework??' '} onChange={e=>setFramework(e.target.value)}/>
                            </div>
                            <div className="form-group">
                               <label for="project">Project</label>
                               <input id="project" type="text" className="form-control" onChange={e=>setUrl(e.target.value)}/>
                            </div>
                <button type="button" className="btn btn-primary" onClick={()=>handleSubmit()}>
                  {flag === 'update'?"Update":" Post"}
                </button>
              </form>
                     </ModalBody>
                 </Modal>
                 <div className={`container ${styles.contents}`}>
                     <h2   className="animate fadeInLeft left">Some of my projects.</h2>
                     {loggedIn? <span className="fa fa-plus fa-lg" onClick={()=>{setFlag('post'); setModal(!modal)}} style={{color:'white'}}></span>:<div></div>}
                    <div className="row">
                        <div className="col-12 col-md-11">
                           {projects.map(item=>{
                               const [isOpen,setOpen] = useState(false);
                               return (
                                <Card className={styles.card_decoration} key={item._id}>
                                    <CardHeader><div className={styles.framework_tile}>
                                        <h5>{item.framework}</h5>
                                        <div>  <i className={isOpen === false?'fa fa-arrow-down fa-lg': 'fa fa-arrow-up fa-lg'} onClick={()=>setOpen(!isOpen)} color="black"></i>
                                        {loggedIn? <span className="fa fa-plus fa-lg" onClick={()=>{setFlag('update');setId(item._id); setFramework(item.framework); setModal(!modal)}}></span>:<div></div>}
                                        {loggedIn? <span className="fa fa-trash fa-lg" onClick={()=>{deleteFramework(item._id)}}></span>:<div></div>}
                                        </div>
                                        </div></CardHeader>
                                    <Collapse isOpen={isOpen}><CardBody>{item.projects.map((project, index)=>(<div key={index}><a href={project}>{project}</a>
                                        {loggedIn? <span className="fa fa-trash fa-lg" onClick={()=>{deleteProject(item._id, project)}}></span>:<div></div>}</div>))}</CardBody></Collapse>
                                </Card>
                            )
                           })}
                        </div>
                    </div>
                 </div>
             </div>
            </>
        )
    }
    else{
        return(
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
          )
    }
}

export default projects

export async function getServerSideProps(context){
    const {client,db} = await connectToDatabase()

    const isConnected = await client.isConnected()
    const projects = await db.collection('Projects').find({}).toArray()
    const projects_set = JSON.parse(JSON.stringify(projects));

    return{
        props:{
            isConnected: isConnected,
            projects: projects_set
        }
    }
}

