import React,{useEffect} from 'react'
import './Main.css'
import bgImage from "../assets/bg.jpg" 

import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
import { TimelineLite } from 'gsap/gsap-core';
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin); 

function Main() {
    useEffect(()=>{
        gsap.timeline({
            scrollTrigger: {
                trigger: ".header",
                start: "center center",
                end: "bottom top",
                // markers: true,
                scrub: 1,
                pin: true,
            }
        })
        .to(".title",{opacity:0})
        .to(".bg_dark",{opacity: 1})
        .to(".image",{scale: 1.4},.2)
        .to(".blog",{y: -120, opacity:1}, .5)
        .to(".text",{y: -100, opacity:1}, .6)
    },[])
    return (
        <div className="main">
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <section className="header">
                <h1 className="title">Boburmirzo</h1>
                <h2 className="blog">Blog</h2>
                <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, minima, suscipit corporis reprehenderit eum consequuntur omnis explicabo in ullam dolorem laudantium ad velit natus ea assumenda eaque est veniam ratione.</p>
                <div className="bg">
                    <img className="image" src={bgImage} alt="" />
                </div>
                <div className="bg_dark">

                </div>
            </section>
            <section></section>
            <section></section>
        </div>
    )
}

export default Main
