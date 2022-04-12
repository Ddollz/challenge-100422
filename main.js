
window.onload = function () {
    const speaker = document.querySelector('#hero');

    let checkdark = false
    let inner = document.querySelector('.counter');

    const loaderdiv = document.querySelector('#pre-loader');

    console.log(loaderdiv)
    const wave1 = document.querySelector('#wave1');
    const wave2 = document.querySelector('#wave2');
    let paths1 = wave1.querySelectorAll('path');
    let paths2 = wave2.querySelectorAll('path');

    let authors = document.querySelectorAll('.author__image');
    let card = document.querySelectorAll('.speaker__card');
    console.log(authors)

    authors.forEach(element => {
        element.onmouseover = function (e) {
            wave1.classList.add("pulse");
            wave2.classList.add("pulse");
            timeout = setTimeout(function () {

                wave1.classList.remove("pulse");
                wave2.classList.remove("pulse");
            }, 3000)
        };
    });

    card.forEach(element => {
        element.onmouseover = function (e) {
            wave1.classList.add("pulse");
            wave2.classList.add("pulse");
            timeout = setTimeout(function () {

                wave1.classList.remove("pulse");
                wave2.classList.remove("pulse");
            }, 3000)
        };
    });

    var w = 0,
        t = setInterval(function () {
            w = w + 1;
            inner.textContent = w + '%';

            if (w === 100) {
                loaderdiv.style.display = "none";
                clearInterval(t);
            }

        }, 10);
    window.onscroll = function (e) {
        let value = window.scrollY;
        scrollAnimation(value);
    }

    function scrollAnimation(value) {
        //Scroll bar End
        if (value <= 900) {
            paths1.forEach(element => {
                element.style.strokeDashoffset = (value * 2) + "px";
            });

            paths2.forEach(element => {
                element.style.strokeDashoffset = (-value * 1.5) + "px";
            });

            wave1.classList.remove("pulse");
            wave2.classList.remove("pulse");
        }
    }
    if (window.pageYOffset >= 900) {

        paths1.forEach(element => {
            element.style.strokeDashoffset = 1500 + "px";
        });

        paths2.forEach(element => {
            element.style.strokeDashoffset = -1500 + "px";
        });
        colorchange();
    }
    function colorchange() {
        document.body.classList.toggle("dark-theme")
    }

    let icon = document.getElementById("theme")
    icon.onclick = function () {
        colorchange()
    }

    const sectionHeroOption = {

        root: null,
        rootMargin: '100px',
        threshold: .1
    };
    const sectionObserver = new IntersectionObserver(function (entries, sectionObserver) {
        entries.forEach(entry => {
            if (entry.target.className == "hero") {
                console.log(entry.target.className)
                document.body.classList.toggle("dark-theme")
            }
        });
    }, sectionHeroOption)


    sectionObserver.observe(speaker);



    let menuOpen = false;
    const topBar = document.querySelector('#top-navbar');

    menuBtn.addEventListener('click', () => {
        if (!menuOpen) {
            topBar.classList.add("js-open");
            menuOpen = true;
        } else {
            topBar.classList.remove("js-open");
            menuOpen = false;
        }
    });
};

