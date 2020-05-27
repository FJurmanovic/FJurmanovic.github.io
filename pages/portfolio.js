import React, { Component } from 'react';
import Router from 'next/router';

class About extends Component {
    render() {

        return (
            <div className="portfolio">
                <div className="back">
                    <button className="btn btn-icon-round btn-white back-button" onClick={() => Router.push('/')}>
                        <div className="gg-arrow-left"></div>
                    </button>
                </div>
                <div className="timeline">
                    <div className="timeline-left">
                        <div className="content">
                            <div className="title">Shopping cart</div>
                            <div className="description">First front-end project that I created. It was for an assigment an internship. Shopping cart helped me start front-end journey and this is where I started to settle with what I wanted to do as a programmer.</div>
                            <div className="links">
                                <div className="link"><a href="https://github.com/Yurma/shopping-cart">Github</a></div>
                                <div className="link"> | </div>
                                <div className="link"><a href="https://yurma.wtf/shopping-cart">Demo</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-right">
                        <div className="content">
                            <div className="title">Todo list</div>
                            <div className="description">My first React project. It was the basic todo-list project with material elements. In this project I learned basics of react.</div>
                            <div className="links">
                                <div className="link"><a href="https://github.com/Yurma/todo-list">Github</a></div>
                                <div className="link"> | </div>
                                <div className="link"><a href="https://yurma.wtf/todo-list">Demo</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-left">
                        <div className="content">
                            <div className="title">PHP Movie Database</div>
                            <div className="description">PHP movie database was created as final work for Algebra's PHP course. It was created in PHP and mySQL as course demanded it. </div>
                            <div className="links">
                                <div className="link"><a href="https://github.com/Yurma/php_movie_database">Github</a></div>
                                <div className="link"> | </div>
                                <div className="link"><a href="https://php-movie-database.herokuapp.com/">Demo</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-right">
                        <div className="content">
                            <div className="title">Schnitzel</div>
                            <div className="description">This is my biggest project so far. Schnitzel is my first full-stack project where I wanted to test and improve my front-end and back-end skills. I started developing it 6 months after my first front-end project, and I believe it shows how I am evolving as front-end developer. It is a social network for sharing recipes. I learned a lot of new things while I was developing it, like backend-frontend connection, using redux states, react routing, balancing stability with more complex project.</div>
                            <div className="links">
                                <div className="link"><a href="https://github.com/Yurma/schnitzel">Github(front-end)</a></div>
                                <div className="link"> | </div>
                                <div className="link"><a href="https://github.com/Yurma/schnitzel_backend">Github(back-end)</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-left">
                        <div className="content">
                            <div className="title">Thorn CSS</div>
                            <div className="description">I started developing thorn-css because I needed to style the "schnitzel" project </div>
                            <div className="links">
                                <div className="link"><a href="https://github.com/Yurma/thorn">Github</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-right">
                        <div className="content">
                            <div className="title">This personal site</div>
                            <div className="description">This site is powerwed by Next.js and uses thorn-css. It is not as big project as "schnitzel" but it still shows my front-end capabilities.</div>
                            <div className="links">
                                <div className="link"><a href="https://github.com/Yurma/yurma.github.io">Github</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-0" />
            </div>
        );
    }
}

export default About;