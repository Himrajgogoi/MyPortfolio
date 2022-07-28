import React from 'react'
import NextLink from "next/link";

import styles from "../styles/Footer.module.css";


function Footer() {
    return (
        <div className={`footer ${styles.footer_container}`}>
            <div className={`container ${styles.footer_content}`}>
                <ul>
                    <li>
                       <NextLink href="/" >
                        <span  style={{ color:'white'}}>Home</span>
                        </NextLink>
                    </li>
                    <li className={styles.item}>
                       <NextLink href="/aboutme"> 
                       <span  style={{ color:'white'}}>About me</span>
                       </NextLink>
                    </li>
                    <li className={styles.item}>
                       <NextLink href="/projects"> 
                       <span  style={{ color:'white'}}>Projects</span>
                       </NextLink>
                    </li>
                    <li className={styles.item}>
                       <NextLink href="/#websites" > 
                       <span style={{ color:'white'}}>Websites</span>
                       </NextLink>
                    </li>
                    <li className={styles.item}>
                       <NextLink href="/#articles" > 
                       <span style={{ color:'white'}}>Articles</span>
                       </NextLink>
                    </li>
                    <li className={styles.item}>
                       <NextLink href="/contactme" > 
                       <span style={{color:'white'}}>Contact me</span>
                       </NextLink>
                    </li>
                </ul>
                <div>
                    <b>Address:</b>
                    <p>Guwahati,Assam,India</p>
                    <b>Contact:</b>
                    <p>+91 7635823494</p>
                    <b>Reach me at:</b>
                    <br></br>
                    <a style={{textDecoration:'none', color:'white', marginRight:'2vw'}} href="mailto:galacticmacawesomeville@gmail.com"><i className="fa fa-envelope fa-lg"></i></a>
                    <a style={{textDecoration:'none', color:'white', marginRight:'2vw'}} href="https://www.linkedin.com/in/himraj-gogoi"><i className="fa fa-linkedin fa-lg"></i></a>
                    <a style={{textDecoration:'none', color:'white', marginRight:'2vw'}} href="https://github.com/Himrajgogoi"><i className="fa fa-github fa-lg"></i></a>
                    <a style={{textDecoration:'none', color:'white', marginRight:'2vw'}} href="https://www.instagram.com/himraj_gogoi_/"><i className="fa fa-instagram fa-lg"></i></a>
                    <a style={{textDecoration:'none', color:'white', marginRight:'2vw'}} href="https://himrajgogoi.medium.com/"><i className="fa fa-medium fa-lg"></i></a>
                </div>
            </div>
            <div className={styles.copyright}>
                <b>copyright@HimrajGogoi2021</b>
            </div>
        </div>
    )
}

export default Footer
