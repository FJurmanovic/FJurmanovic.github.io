import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

class Homepage extends Component {
    render() {
        return (
            <div className="wrapper">
                <Head>
                    <title>Homepage - Fran Jurmanovic</title>
                </Head>
                <div className="title">Hello, I am Fran Jurmanović</div>
                <div className="nav">You can learn more <Link href="/about">about me</Link> or jump right to my <Link href="/portfolio"><span className="btn btn-blue btn-rounder f1 p-6">portfolio</span></Link></div>
            </div>
        );
    }
}

export default Homepage;