```javascript
/* ================= THEME TOGGLE ================= */

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    document.getElementById("themeIcon");


/* Check saved theme */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeIcon.textContent = "☀";

}


/* Toggle theme */

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const isLight =
        document.body.classList.contains("light-mode");


    if (isLight) {

        themeIcon.textContent = "☀";

        localStorage.setItem(
            "theme",
            "light"
        );

    } else {

        themeIcon.textContent = "☾";

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});


/* ================= SCROLL REVEAL ================= */

const sections =
    document.querySelectorAll(".section");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "reveal"
                    );

                    setTimeout(() => {

                        entry.target.classList.add(
                            "visible"
                        );

                    }, 100);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


sections.forEach((section) => {

    observer.observe(section);

});


/* ================= ACTIVE NAVIGATION ================= */

const navLinks =
    document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

    let currentSection = "";


    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;


        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.style.color = "";


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.style.color =
                getComputedStyle(document.body)
                .getPropertyValue("--primary");

        }

    });

});


/* ================= SMOOTH SCROLL ================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            function(event) {

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });


/* ================= PROFILE CARD 3D EFFECT ================= */

const profileCard =
    document.querySelector(".profile-card");


if (profileCard) {

    profileCard.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                profileCard.getBoundingClientRect();


            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;


            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) / centerY) * -4;

            const rotateY =
                ((x - centerX) / centerX) * 4;


            profileCard.style.transform =
                `perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;

        }
    );


    profileCard.addEventListener(
        "mouseleave",
        () => {

            profileCard.style.transform = "";

        }
    );

}
```
