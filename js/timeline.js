(function(w, d, namespace) {
    namespace.timeline = new function () {
        const timeline = [
            new Content(
                "Shopping cart", 
                new Thumbnail("https://yurma.wtf/shopping-cart", "images/shopping-cart.webp"), 
                ["Angular", "Typescript"], 
                "First front-end project that I created. It was for an assigment Cobe set for their internship. Shopping cart helped me start front-end journey and this is where I started to settle with what I wanted to do as a programmer.", 
                [new Link("https://github.com/Yurma/shopping-cart", "Github"), new Link("https://yurma.wtf/shopping-cart", "Live")]
            ),
            new Content(
                "Todo list",
                new Thumbnail("https://yurma.wtf/todo-list", "images/todo-list.webp"),
                ["React", "Javascript"],
                "My first React project. It was the basic todo-list project with material elements. In this project I learned basics of react.",
                [new Link("https://github.com/Yurma/todo-list", "Github"), new Link("https://yurma.wtf/todo-list", "Live")]
            ),
            new Content(
                "PHP Movie Database",
                new Thumbnail("https://php-movie-database.herokuapp.com/", "images/movie-database.webp"),
                ["PHP", "MySql"],
                "PHP movie database was created as final work for Algebra's PHP course. It was created in PHP and mySQL as course demanded it.",
                [new Link("https://github.com/Yurma/php_movie_database", "Github"), new Link("https://php-movie-database.herokuapp.com", "Live")]
            ),
            new Content(
                "Schnitzel",
                new Thumbnail("https://schnitzel.yurma.wtf/", "images/schnitzel.webp"),
                ["React", "Express.js", "MongoDB"],
                "This is my biggest project so far. Schnitzel is my first full-stack project where I wanted to test and improve my front-end and back-end skills. I started developing it 6 months after my first front-end project, and I believe it shows how I am evolving as front-end developer. It is a social network for sharing recipes. I learned a lot of new things while I was developing it, like backend-frontend connection, using redux states, react routing, balancing stability with more complex project.",
                [new Link("https://github.com/Yurma/schnitzel_rework", "Github"), new Link("https://schnitzel.yurma.wtf", "Live")]
            ),
            new Content(
                "Thorn CSS",
                null,
                ["SCSS", "Gulp"],
                "I started developing thorn-css because I wanted to have signature design for all my projects.",
                [new Link("https://github.com/Yurma/thorn", "Github")]
            ),
            new Content(
                "Boards",
                new Thumbnail("https://yurma.wtf/boards", "images/boards.webp"),
                ["React", "Javascript"],
                "This project was actually my experimentation with drag and drop package and project where I tried using more react hooks. I plan on making it default kanban boards for my projects in the future.",
                [new Link("https://github.com/Yurma/boards", "Github"), new Link("https://yurma.wtf/boards", "Live")]
            ),
            new Content(
                "This personal site",
                null,
                ["Vanilla Javascript"],
                "This site shows my skills with pure Javascript.",
                [new Link("https://github.com/Yurma/yurma.github.io", "Github")]
            ),
            new Content(
                "Angular Boards",
                new Thumbnail("https://yurma.wtf/angular-boards", "images/angular-boards.webp"),
                ["Angular", "Typescript"],
                "Made out of curiosity to see if I could create the same thing in react and angular. And actually created a better version.",
                [new Link("https://github.com/Yurma/angular-boards", "Github"), new Link("https://yurma.wtf/angular-boards", "Live")]
            ),
            new Content(
                "Todo Typescript",
                new Thumbnail("https://yurma.wtf/todo-ts", "images/todo-ts.webp"),
                ["Webpack", "Typescript"],
                "I wanted to challenge myself so I created pure typescript todo list (like the one I created in reactjs) and built it with webpack.",
                [new Link("https://github.com/Yurma/todo-ts", "Github"), new Link("https://yurma.wtf/todo-ts", "Live")]
            ),
            new Content(
                "Car Dealership",
                null,
                ["React", "Javascript", "Mobx"],
                "Car dealership mockup site.",
                [new Link("https://github.com/Yurma/car-dealership", "Github"), new Link("http://car-dealership.yurma.wtf/", "Live")],
            ),
            new Content(
                "Projects Dashboard",
                null,
                ["Angular", "Firebase"],
                "<i>Work is still in progress.</i> Projects Dashboard is angular and firebase project that I'm creating to make my project organization and planning easier.",
                [new Link("https://github.com/Yurma/projects-dashboard", "Github")]
            ),
            new Content(
                "Blog CRUD",
                null,
                ["React", "Express.js", "MongoDB"],
                "<i>Work is still in progress.</>. Blog CRUD is my try at recreating Wordpress' blogging system.",
                [new Link("https://github.com/Yurma/blog-crud", "Github")]
            )
        ];

        this.get = () => {
            return timeline;
        }

        this.getNode = () => {
            const timelineDiv = document.createElement("div");
            timelineDiv.className = "timeline";
            timeline.forEach((content, index) => {
                const tml = d.createElement("div");
                if(index % 2 == 0) tml.className = "timeline-left";
                else tml.className = "timeline-right";
                const cnt = d.createElement("div");
                    cnt.className = "content";
                        if(content.title){
                            const title = d.createElement("div");
                                title.className = "title";
                                title.innerHTML = content.title;
                                cnt.appendChild(title);
                        }
                        if(content.thumbnail) {
                        const thumbnail = d.createElement("div");
                            thumbnail.className = "thumbnail";
                            const thmbA = d.createElement("a");
                            thmbA.href = content.thumbnail.href;
                            const thmbSrc = d.createElement("img");
                            thmbSrc.src = content.thumbnail.src;
                            thmbA.appendChild(thmbSrc);
                            thumbnail.appendChild(thmbA);
                            cnt.appendChild(thumbnail);
                        }
                        if(content.labels) {
                        const labels = d.createElement("div");
                            labels.className = "labels";
                            content.labels.forEach(label => {
                                const labelNode = d.createElement("span");
                                labelNode.className = "label mr-2";
                                labelNode.innerHTML = label;
                                labels.appendChild(labelNode);
                            });
                            cnt.appendChild(labels);
                        }
                        if(content.description) {
                            const description = d.createElement("div");
                            description.className = "description";
                            description.innerHTML = content.description;
                            cnt.appendChild(description);
                        }
                        if(content.links) {
                            const links = d.createElement("div");
                                links.className = "links";
                                content.links.forEach(link => {
                                    const lnk = d.createElement("link");
                                        lnk.className = "link";
                                        const lnkA = d.createElement("a");
                                        lnkA.href = link.href;
                                        lnkA.innerHTML = link.text;
                                        lnk.appendChild(lnkA);
                                    links.appendChild(lnk);
                                });
                                cnt.appendChild(links);
                        }
                    tml.appendChild(cnt);
                timelineDiv.appendChild(tml);
            })
            return timelineDiv;
        }
    }

    function Thumbnail(href, src) {
        this.href = href,
        this.src = src
    }

    function Link(href, text) {
        this.href = href;
        this.text = text;
    }

    function Content(title, thumbnail, labels, description, links) {
        this.title = title,
        this.thumbnail = thumbnail,
        this.labels = labels,
        this.description = description,
        this.links = links
    }
})(window, document, window.namespace = window.namespace || {})