import React, { Component } from 'react';
import Router from 'next/router';
import Head from 'next/head';

class About extends Component {
    render() {
        return (
            <div className="about-wrapper">
                <Head>
                    <title>About - Fran Jurmanovic</title>
                </Head>
                <div className="back position-absolute">
                    <button className="btn btn-icon-round btn-white back-button" onClick={() => Router.push('/')}>
                        <div className="gg-arrow-left"></div>
                    </button>
                </div>
                <div className="about container mt-8">
                    <p><i>I am coding and programming for almost half of my life.</i></p>
                    <p>I always wondered how things worked and as a kid I was obsessed with computers so naturally I wanted to know how programs on my computer worked. My first coding experiences were with Visual Basic. I was amazed how I created something from almost nothing and I fell in love with it. After that I started researching more and more about programming and as I was already familiar with Visual Studio IDE, I started learning C#. Somewhere in between I stumbled upon HTML and CSS. I adored how easy it was to create a website. Few lines of code and you are up. I was almost 15 and already experimented with few programming languages and I knew I wanted to do that for living. So I enrolled in high school that, in my proximity, was the most similar to something that I wanted to be. It was Computer Technician where I learned C++ and Java and also a lot of relevant stuff about computers, databases, network and even electricity. While at high school I participated in several programming competitions and I participated and won competition for the best innovative idea to prevent misuse of handicapped parking spaces. My final work for high school was android application that I made with my friend. It was an multi tool application with unit converters, calculator, timer, stopwatch.</p>
                    <p>After high school I enrolled in Department of mathematics in Osijek with programme in mathematics and computer science. While at college I started reading more and more about javascript and its frameworks. I really liked the idea of it so I started learning it little by little on my own. Few months later I started creating more and more projects and finally, I settled. No longer was I looking for what I wanted to do as a programmer. Eventually I dropped out of college and started PHP course at Algebra to get an degree which I finished after 3 months. After that I kept learning more about front-end while doing my own projects in javascript.</p>
                </div>
            </div>
        );
    }
}

export default About;