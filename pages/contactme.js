import React from 'react'
import Head from 'next/head'
import Header from '../shared/Header'
import styles from "../styles/contactme.module.css";
import { connectToDatabase } from '../lib/mongodb'

function contactme({resume}) {
    return (
        <div>
            <Head>
                <title>Himraj Gogoi | Contact me</title>
            </Head>
            <div>
                <Header/>
                <div className={`container ${styles.contents}`}>
                    <h2  className="animate fadeInLeft left">Wanna Collaborate?</h2>
                   <div className="row">
                       <div className="col-12 col-md-4">
                           <h4 className="animate fadeInDown down"><b>Reach me at,</b></h4>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-4 col-lg-2">
                           <p className={styles.links}><a style={{textDecoration:'none', color:'white'}} href="mailto:galacticmacawesomeville@gmail.com">Gmail</a></p>
                       </div>
                       <div className="col-4 col-lg-2">
                           <p className={styles.links}><a style={{textDecoration:'none', color:'white'}} href="https://www.linkedin.com/in/himraj-gogoi">LinkedIn</a></p>
                       </div>
                       <div className="col-4 col-lg-2">
                           <p className={styles.links}><a style={{textDecoration:'none', color:'white'}} href="https://github.com/Himrajgogoi">GitHub</a></p>
                       </div>
                       <div className="col-4 col-lg-2">
                           <p className={styles.links}><a style={{textDecoration:'none', color:'white'}} href="https://www.instagram.com/himraj_gogoi_/">Instagram</a></p>
                       </div>
                       <div className="col-4 col-lg-2">
                           <p className={styles.links}><a style={{textDecoration:'none', color:'white'}} href="https://himrajgogoi.medium.com/">Medium</a></p>
                       </div>
                   </div>
                   <div className="row">
                       <div className="col-12 col-md-4">
                       <p className={styles.links}><a style={{textDecoration:'none', color:'white'}} href={resume}><i className="fa fa-download fa-lg"></i> My Resume</a></p>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default contactme


export async function getServerSideProps(context){
    const {client,db} = await connectToDatabase()

    const isConnected = await client.isConnected()
    const aboutme = await db.collection('AboutMe').find({}).toArray()
    const resume = JSON.parse(JSON.stringify(aboutme))[0].resume;

    return{
        props:{
            isConnected: isConnected,
            resume: resume
        }
    }
}
