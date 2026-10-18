const navLinks = [
    ["index.html", "Home"],
    ["learn.html", "Learn"],
    ["properties.html", "Properties"],
    ["simulation.html", "Simulation"],
    ["calculator.html", "Calculator"],
    ["quiz.html", "Quiz"]
];

function renderNav(active = "") {

    const el = document.getElementById("site-nav");

    if (!el) return;

    el.innerHTML = `
        <nav class="navbar">

            <div class="container nav-inner">

                <a class="brand" href="index.html">

                    <span class="brand-mark">
                        ∫
                    </span>

                    <span>
                        ThermoLearn
                        <small>
                            Energy • Matter • Systems
                        </small>
                    </span>

                </a>

                <div class="nav-links">

                    ${navLinks.map(([href, label]) => `
                        <a
                            class="${active === href ? "active" : ""}"
                            href="${href}">
                            ${label}
                        </a>
                    `).join("")}

                </div>

                <button
                    class="menu-btn"
                    id="menuBtn">
                    ☰
                </button>

            </div>

            <div
                class="container mobile-menu"
                id="mobileMenu">

                ${navLinks.map(([href, label]) => `
                    <a href="${href}">
                        ${label}
                    </a>
                `).join("")}

            </div>

        </nav>
    `;

    const menuBtn =
        document.getElementById("menuBtn");

    const mobileMenu =
        document.getElementById("mobileMenu");

    if (menuBtn) {

        menuBtn.onclick = () => {

            mobileMenu.classList.toggle("open");

        };

    }
}


function renderFooter() {

    const footer =
        document.getElementById("site-footer");

    if (!footer) return;

    footer.innerHTML = `

        <footer>

            <div class="container">

                <div class="brand">

                    <span class="brand-mark">
                        ∫
                    </span>

                    <span>
                        ThermoLearn

                        <small>
                            Interactive Thermodynamics
                        </small>
                    </span>

                </div>

                <p>
                    Platform belajar termodinamika
                    interaktif untuk memahami konsep,
                    menguji pemahaman, dan bereksperimen
                    dengan energi, kerja, tekanan,
                    temperatur, serta properties.
                </p>

                <p style="margin-top:15px">

                    © 2026 ThermoLearn
                    • Built for learning.

                </p>

            </div>

        </footer>

    `;
}


function markVisited(key) {

    const data =
        JSON.parse(
            localStorage.getItem(
                "thermoProgress"
            ) || "{}"
        );

    data[key] = true;

    localStorage.setItem(
        "thermoProgress",
        JSON.stringify(data)
    );

    updateProgress();
}


function updateProgress() {

    const data =
        JSON.parse(
            localStorage.getItem(
                "thermoProgress"
            ) || "{}"
        );

    const keys = [
        "fundamentals",
        "properties",
        "firstlaw",
        "simulation",
        "calculator",
        "quiz"
    ];

    const done =
        keys.filter(
            key => data[key]
        ).length;

    const percent =
        Math.round(
            done / keys.length * 100
        );

    document
        .querySelectorAll("[data-progress]")
        .forEach(element => {

            element.style.width =
                percent + "%";

        });

    document
        .querySelectorAll("[data-progress-text]")
        .forEach(element => {

            element.textContent =
                percent + "%";

        });
}


document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderFooter();

        updateProgress();

    }
);