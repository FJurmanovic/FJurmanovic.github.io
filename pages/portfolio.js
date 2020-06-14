import React, { Component } from 'react';
import Router from 'next/router';
import Head from 'next/head';

class About extends Component {
    render() {

        return (
            <div className="portfolio">
                <Head>
                    <title>Portfolio - Fran Jurmanovic</title>
                </Head>
                <div className="back">
                    <button className="btn btn-icon-round btn-white back-button" onClick={() => Router.push('/')}>
                        <div className="gg-arrow-left"></div>
                    </button>
                </div>
                <div className="timeline">
                    <div className="timeline-left">
                        <div className="content">
                            <div className="title">Shopping cart</div>
                            <div className="thumbnail"><a href="https://yurma.wtf/shopping-cart"><img src="/shopping-cart.webp" /></a></div>
                            <div className="labels"><span className="label mr-2">Angular</span><span className="label">Typescript</span></div>
                            <div className="description">First front-end project that I created. It was for an assigment Cobe set for their internship. Shopping cart helped me start front-end journey and this is where I started to settle with what I wanted to do as a programmer.</div>
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
                            <div className="thumbnail"><a href="https://yurma.wtf/todo-list"><img src="/todo-list.webp" /></a></div>
                            <div className="labels"><span className="label mr-2">React</span><span className="label">Javascript</span></div>
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
                            <div className="thumbnail"><a href="https://php-movie-database.herokuapp.com/"><img src="/movie-database.webp" /></a></div>
                            <div className="labels"><span className="label mr-2">PHP</span><span className="label">MySQL</span></div>
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
                            <div className="thumbnail"><a href="https://schnitzel.yurma.wtf/"><img src="/schnitzel.webp" /></a></div>
                            <div className="labels"><span className="label mr-2">React</span><span className="label mr-2">Javascript</span><span className="label mr-2">Express.js</span><span className="label">MongoDB</span></div>
                            <div className="description">This is my biggest project so far. Schnitzel is my first full-stack project where I wanted to test and improve my front-end and back-end skills. I started developing it 6 months after my first front-end project, and I believe it shows how I am evolving as front-end developer. It is a social network for sharing recipes. I learned a lot of new things while I was developing it, like backend-frontend connection, using redux states, react routing, balancing stability with more complex project.</div>
                            <div className="links">
                                <div className="link"><a href="https://github.com/Yurma/schnitzel">Github(front-end)</a></div>
                                <div className="link"> | </div>
                                <div className="link"><a href="https://github.com/Yurma/schnitzel_backend">Github(back-end)</a></div>
                                <div className="link"> | </div>
                                <div className="link"><a href="https://schnitzel.yurma.wtf/">Demo</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-left">
                        <div className="content">
                            <div className="title">Thorn CSS</div>
                            <div className="labels"><span className="label mr-2">SCSS</span><span className="label">Gulp</span></div>
                            <div className="description">I started developing thorn-css because I wanted to have signature design for all my projects. </div>
                            <div className="links">
                                <div className="link"><a href="https://github.com/Yurma/thorn">Github</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-right">
                        <div className="content">
                            <div className="title">Boards</div>
                            <div className="thumbnail"><a href="https://yurma.wtf/boards"><img src="/boards.webp" /></a></div>
                            <div className="labels"><span className="label mr-2">React</span><span className="label">Javascript</span></div>
                            <div className="description">This project was actually my experimentation with drag and drop package and project where I tried using more react hooks. I plan on making it default kanban boards for my projects in the future.</div>
                            <div className="links">
                                <div className="link"><a href="https://github.com/Yurma/boards">Github</a></div>
                                <div className="link"> | </div>
                                <div className="link"><a href="https://yurma.wtf/boards">Demo</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-left">
                        <div className="content">
                            <div className="title">This personal site</div>
                            <div className="labels"><span className="label mr-2">Next.js</span><span className="label mr-2">React</span><span className="label">Javascript</span></div>
                            <div className="description">This site is powerwed by Next.js and uses thorn-css. It is not as big project as "schnitzel" but it still shows my front-end capabilities.</div>
                            <div className="links">
                                <div className="link"><a href="https://github.com/Yurma/yurma.github.io">Github</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-right">
                        <div className="content">
                            <div className="title">Angular Boards</div>
                            <div className="thumbnail"><a href="https://yurma.wtf/angular-boards"><img src="/angular-boards.webp" /></a></div>
                            <div className="labels"><span className="label mr-2">Angular</span><span className="label">Typescript</span></div>
                            <div className="description">Made out of curiosity to see if I could create the same thing in react and angular. And actually created a better version.</div>
                            <div className="links">
                                <div className="link"><a href="https://github.com/Yurma/angular-boards">Github</a></div>
                                <div className="link"> | </div>
                                <div className="link"><a href="https://yurma.wtf/angular-boards">Demo</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-left">
                        <div className="content">
                            <div className="title">Todo Typescript</div>
                            <div className="thumbnail"><a href="https://yurma.wtf/todo-ts"><img src="/todo-ts.webp" /></a></div>
                            <div className="labels"><span className="label mr-2">Webpack</span><span className="label">Typescript</span></div>
                            <div className="description">I wanted to challenge myself so I created pure typescript todo list (like the one I created in reactjs) and built it with webpack.</div>
                            <div className="links">
                                <div className="link"><a href="https://github.com/Yurma/todo-ts">Github</a></div>
                                <div className="link"> | </div>
                                <div className="link"><a href="https://yurma.wtf/todo-ts">Demo</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;