import React, { Component } from 'react';
import Link from 'next/link';

class Homepage extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="title">Hello, I am <span className="text-blue-light">F</span>ran <span className="text-blue-light">J</span>urmanović</div>
                <div className="nav">You can learn more <Link href="/about">about me</Link> or jump right to my <Link href="/portfolio"><span className="btn btn-blue btn-rounder f1 p-6">portfolio</span></Link></div>
            </div>
        );
    }
}

export default Homepage;