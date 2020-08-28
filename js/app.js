(function(w, d, namespace) {
    const Home = () => {
        document.title = "Homepage - Fran Jurmanovic"
        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        const title = document.createElement("div");
        title.classList.add("title");
        title.innerHTML = "Hello, I am Fran Jurmanović"; 
        const nav = document.createElement("div");
        nav.classList.add("nav");
        nav.innerHTML = `You can learn more <a href="/about">about me</a> or jump right to my <a href="/portfolio"><span className="btn btn-blue btn-rounder f1 p-6">portfolio</span></a>`;

        wrapper.appendChild(title);
        wrapper.appendChild(nav);

        return wrapper;
    }

    const About = () => {
        document.title = "About - Fran Jurmanovic"
        const wrapper = document.createElement("div");
        wrapper.className = "about-wrapper";
        const back = document.createElement("div");
            back.className = "back position-absolute";
            const backButton = document.createElement("a");
                backButton.className = "btn btn-icon-round btn-white back-button";
                backButton.setAttribute("href", "../");
                const arrow = document.createElement("div");
                arrow.className = "gg-arrow-left";
            backButton.appendChild(arrow);
        back.appendChild(backButton);
        const about = document.createElement("div");
        about.classList = "about container mt-8";
        const [p1, p2, p3] = [document.createElement("p"), document.createElement("p"), document.createElement("p")];
        p1.innerHTML = `<i>I am coding and programming for almost half of my life.</i>`;
        p2.innerHTML = `I always wondered how things worked and as a kid I was obsessed with computers so naturally I wanted to know how programs on my computer worked. My first coding experiences were with Visual Basic. I was amazed how I created something from almost nothing and I fell in love with it. After that I started researching more and more about programming and as I was already familiar with Visual Studio IDE, I started learning C#. Somewhere in between I stumbled upon HTML and CSS. I adored how easy it was to create a website. Few lines of code and you are up. I was almost 15 and already experimented with few programming languages and I knew I wanted to do that for living. So I enrolled in high school that, in my proximity, was the most similar to something that I wanted to be. It was Computer Technician where I learned C++ and Java and also a lot of relevant stuff about computers, databases, network and even electricity. While at high school I participated in several programming competitions and I participated and won competition for the best innovative idea to prevent misuse of handicapped parking spaces. My final work for high school was android application that I made with my friend. It was an multi tool application with unit converters, calculator, timer, stopwatch.`;
        p3.innerHTML = `After high school I enrolled in Department of mathematics in Osijek with programme in mathematics and computer science. While at college I started reading more and more about javascript and its frameworks. I really liked the idea of it so I started learning it little by little on my own. Few months later I started creating more and more projects and finally, I settled. No longer was I looking for what I wanted to do as a programmer. Eventually I dropped out of college and started PHP course at Algebra to get an degree which I finished after 3 months. After that I kept learning more about front-end while doing my own projects in javascript.`;
        about.appendChild(p1);
        about.appendChild(p2);
        about.appendChild(p3);
        wrapper.appendChild(back);
        wrapper.appendChild(about);
        return wrapper;
    }

    const Portfolio = () => {
        document.title = "Portfolio - Fran Jurmanovic"
        const wrapper = document.createElement("div");
        wrapper.className = "portfolio";
        const back = document.createElement("div");
            back.className = "back position-absolute";
            const backButton = document.createElement("a");
                backButton.className = "btn btn-icon-round btn-white back-button";
                backButton.setAttribute("href", "../");
                const arrow = document.createElement("div");
                arrow.className = "gg-arrow-left";
            backButton.appendChild(arrow);
        back.appendChild(backButton);

        wrapper.appendChild(back);
        wrapper.appendChild(namespace.timeline.getNode());
        return wrapper;
    }

    const routes = [
        {
            path: '/about',
            component: About
        },
        {
            path: '/portfolio',
            component: Portfolio
        },
        {
            path: '/',
            component: Home,
        }
    ];
    const router = new Router(routes);
    document.querySelector("#app").appendChild(router.init());
})(window, document, window.namespace = window.namespace || {})