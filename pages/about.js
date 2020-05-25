import React, { Component } from 'react';
import Router from 'next/router';

class About extends Component {
    render() {
        return (
            <div className="about-wrapper">
                <div className="back position-absolute">
                    <button className="btn btn-icon-round btn-white back-button" onClick={() => Router.push('/')}>
                        <div className="gg-arrow-left"></div>
                    </button>
                </div>
                <div className="about container mt-8">
                    About me
                </div>
            </div>
        );
    }
}

export default About;