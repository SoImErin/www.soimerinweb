class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        const projectId = this.getAttribute("id");
        const dataLocation = this.getAttribute("data-location");

        if (!projectId) {
            this.shadowRoot.innerHTML = `<p>Error: No project ID provided.</p>`;
            return;
        }

        try {
            const response = await fetch(dataLocation);
            const projects = await response.json();
            const project = projects[projectId];

            if (!project) {
                // this.shadowRoot.innerHTML = `<p>Error: Project not found.</p>`;
                return;
            }

            this.render(project);

            const cardButton = this.shadowRoot.querySelector("button.project-card");
            const projectCard = this.shadowRoot.querySelector(".project-card");
            const moreInfo = this.shadowRoot.querySelector(".project-card__moreInfo");

            if (cardButton && projectCard && moreInfo) {
                cardButton.addEventListener("click", () => {
                    const isExpanded = projectCard.classList.contains("expanded");

                    if (isExpanded) {
                        // Collapse: hide overflow immediately, then remove class
                        moreInfo.style.overflow = "hidden";
                        projectCard.classList.remove("expanded");
                    } else {
                        // Expand: add class, then wait for transition to end
                        projectCard.classList.add("expanded");

                        const onTransitionEnd = (e) => {
                            if (e.target === moreInfo && e.propertyName === "max-height") {
                                moreInfo.style.overflow = "unset";
                                moreInfo.removeEventListener("transitionend", onTransitionEnd);
                            }
                        };

                        // Reset overflow so the transition works again
                        moreInfo.style.overflow = "hidden";
                        moreInfo.addEventListener("transitionend", onTransitionEnd);
                    }
                });
            }
        } catch (error) {
            this.shadowRoot.innerHTML = `<p>Error loading project data.</p><p>${error}</p>`;
        }
    }

    render(project) {
        const inputColourTag = this.getAttribute("card-colour") || "--color-base";

        const totalLinks = Object.entries(project.links).length;
        const linksToAdd = Object.entries(project.links).map(([name, url], i, arr) => {
            let style = "";

            function widthCalc(itemsInRow) {
                const gapPx = 20;
                return `calc((100% - ${(itemsInRow - 1) * gapPx}px) / ${itemsInRow})`;
            }

            if (totalLinks <= 4) {
                // All links get same width
                style = `min-width: ${widthCalc(totalLinks)}; max-width: ${widthCalc(totalLinks)};`;
            } else {
                if (i < 4) {
                style = `min-width: ${widthCalc(4)}; max-width: ${widthCalc(4)};`;
                } else {
                const leftover = totalLinks - 4;
                if (leftover === 1) {
                    style = `min-width: ${widthCalc(1)}; max-width: ${widthCalc(1)};`;
                } else if (leftover === 2) {
                    style = `min-width: ${widthCalc(2)}; max-width: ${widthCalc(2)};`;
                } else {
                    style = `min-width: ${widthCalc(3)}; max-width: ${widthCalc(3)};`;
                }
                }
            }

            return `
                <a href="${url}" class="text-primary" target="_blank" style="${style}">
                ${name}
                </a>
            `;
        }).join("");


        this.shadowRoot.innerHTML = `
            <style>
                .project-card {
                    border: none;
                    text-align: left;
                    color: #fff;
                    display: flex;
                    padding: 24px;
                    border-radius: 4px;
                    line-height: 1.44;
                    width: 100%;
                    height: 100%;
                    transition: all .3s ease;
                    flex-direction: column;
                }

                .project-card__section {
                    width: 100%;
                    align-items: center;
                }

                .project-card h3 {
                    font-size: 1.4rem;
                    margin-block-start: 1rem;
                    margin-block-end: 1rem;
                    margin-inline-start: 0px;
                    margin-inline-end: 0px;
                    margin-top: 0;
                }

                .project-card p {
                    margin: 16px 0;
                    font-size: 1.125rem;
                }

                .project-card h3 small {
                    display: block;
                    font-weight: 400;
                    color: #fff;
                    width: 100%;
                }

                .project-card__media {
                    background-color: #252525;
                    overflow: hidden;
                    min-width: 220px;
                    max-width: 220px;
                    height: 100%;
                    margin-right: 20px;
                    border-radius: 6px;
                }

                .project-card__media video,
                .project-card__media img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(.5);
                    transition: all 0.3s ease;
                }

                .video-additional-info {
                    display: flex;
                    align-items: center;
                }

                .video-additional-info svg {
                    color: var(--color-text-primary);
                }

                .video-additional-info .icon {
                    margin-right: 8px;
                }

                .video-additional-info div {
                    margin-right: 16px;
                    display: flex;
                    align-items: center;
                }

                .video-additional-info .date {
                    margin-right: 0px;
                    margin-left: auto;
                }

                .svg-inline--fa {
                    height: 1em;
                    transition: all 0.3s ease;
                }

                .clickable-card-header {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    color: var(--highlight-color);
                    transition: all 0.3s ease;
                }

                .clickable-header-icon {
                    margin-left: auto;
                }

                @media (min-width: 768px) {
                    .project-card {
                        font-size: 1.125rem;
                    }
                }

                .project-card:hover {
                    box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
                    transition: all .3s ease;
                    transform: scale(1.01);
                }

                .project-card.expanded:hover {
                    box-shadow: none;
                    transition: all .3s ease;
                    transform: scale(1);
                }

                .project-card.expanded .project-card__moreInfo-buttons a:hover {
                    box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
                    transition: all .3s ease;
                    transform: scale(1.1);
                }

                .project-card:hover .project-card__media video,
                .project-card:hover .project-card__media img {
                    filter: grayscale(0);
                    transition: all 0.3s ease;
                }

                .project-card:hover .clickable-card-header {
                    transition: all 0.1s ease;
                }

                .project-card {
                    cursor: pointer;
                }

                .project-card.expanded {
                    cursor: unset;
                }

                .project-card__content {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    flex-grow: 1;
                    width: 100%;
                }

                .project-card__section {
                    display: flex;
                }

                .video-additional-info p {
                    margin-top: 0;
                    margin-bottom: 0;
                }

                .background-primary {
                    background-color: var(${inputColourTag}) !important;
                }

                .text-primary {
                    color: var(--color-text-primary) !important;
                }

                .panel {
                    padding: 20px;
                    border-radius: 5px;
                }

                .mobile-temp-text {
                    display: none;
                }

                .project-card__header-sep {
                    border: none;
                    height: 1px;
                    background-color: var(--color-text-primary);
                    margin: 10px 0;
                }

                .project-card__moreInfo h1,
                .project-card__moreInfo p {
                    margin-bottom: 0;
                }

                .project-card__moreInfo-sep {
                    margin: 20px 0px;
                }

                .project-card__moreInfo-buttons {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 20px;
                }

                .project-card__moreInfo-buttons a {
                    padding: 10px 0px;
                    background-color: var(--highlight-color);
                    color: var(--highlight-text-color);
                    text-decoration: none;
                    border-radius: 10px;
                    transition: all .3s ease;
                    display: flex;
                    justify-content: center;
                }

                .project-card__moreInfo {
                    max-height: 0px;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }

                .project-card.expanded .project-card__moreInfo {
                    max-height: 500px;
                    overflow: unset;
                    transition: all 0.3s ease;
                }
                
                .project-card.expanded .clickable-card-header .svg-inline--fa {
                    transform: rotate(180deg);
                    transition: all 0.3s ease;
                }

                ${!project.links || Object.keys(project.links).length === 0 ? `
                    .project-card__moreInfo-sep {
                        display: none;
                    }
                ` : ''}

                @media (max-width: 1300px) {
                    .project-card__section {
                        flex-direction: column;
                    }
                    
                    .project-card__media {
                        width: 100%;
                        max-width: unset;
                        margin: 0;
                        margin-bottom: 10px;
                    }

                    .clickable-card-header {
                        margin: 0 !important;
                        font-size: 1rem !important;
                    }

                    .clickable-card-header {
                        font-size: .75rem !important;
                    }

                    .clickable-card-header small {
                        font-size: .7rem;
                    }

                    .video-additional-info {
                        flex-wrap: wrap;
                        align-items: start;
                    }

                    .video-additional-info div {
                        width: 50%;
                        margin-right: 0;
                        margin-left: unset;
                    }

                    .video-additional-info div p {
                        font-size: .8rem;
                    }

                    .project-card__moreInfo p {
                        font-size: .65rem;
                    }

                    .project-card__moreInfo-buttons {
                        flex-wrap: wrap;
                    }

                }

            </style>
            <h1 class="mobile-temp-text text-primary">Project Card - '${project.name}' is unavailable, mobile version coming soon.</h1>
            <button class="project-card panel background-primary"}>
                <section class="project-card__section">
                    <div class="project-card__media">
                        ${project.backgroundVideo ? 
                            `<video muted loop autoplay preload="metadata" src="${project.backgroundVideo}"></video>` :
                            `<img src="${project.backgroundImg}" alt="Project Background">`
                        }
                    </div>
                    <div class="project-card__content">
                        <h3 class="clickable-card-header">
                            ${project.name}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="svg-inline--fa clickable-header-icon bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                            </svg>
                            <small class="text-primary">${project.role}</small>
                        </h3>
                        <hr class="project-card__header-sep">
                        <div class="video-additional-info">
                            <div class="team-size">
                                <svg class="svg-inline--fa fa-users icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-v-7eb23141=""><path class="" fill="currentColor" d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"></path></svg>
                                <p class="text-primary">${project.developers}</p>
                            </div>
                            <div class="time">
                                <svg class="svg-inline--fa fa-clock icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-7eb23141=""><path class="" fill="currentColor" d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"></path></svg>
                                <p class="text-primary">${project.duration}</p>
                            </div>
                            <div class="software">
                                <svg class="svg-inline--fa fa-screwdriver-wrench icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="screwdriver-wrench" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-v-7eb23141=""><path class="" fill="currentColor" d="M331.8 224.1c28.29 0 54.88 10.99 74.86 30.97l19.59 19.59c40.01-17.74 71.25-53.3 81.62-96.65c5.725-23.92 5.34-47.08 .2148-68.4c-2.613-10.88-16.43-14.51-24.34-6.604l-68.9 68.9h-75.6V97.2l68.9-68.9c7.912-7.912 4.275-21.73-6.604-24.34c-21.32-5.125-44.48-5.51-68.4 .2148c-55.3 13.23-98.39 60.22-107.2 116.4C224.5 128.9 224.2 137 224.3 145l82.78 82.86C315.2 225.1 323.5 224.1 331.8 224.1zM384 278.6c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158L191.1 95.99l-127.1-95.99L0 63.1l96 127.1l62.04 .0077l106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.0016l52.75-52.75c14.5-14.5 14.5-38.08-.0016-52.71L384 278.6zM227.9 307L168.7 247.9l-148.9 148.9c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24S88 434.7 88 448C88 461.3 77.25 472 64 472z"></path></svg>
                                <p class="text-primary">${project.software}</p>
                            </div>
                            <div class="date">
                                <svg class="svg-inline--fa fa-calendar icon" aria-hidden="true" focusable="false" data-prefix="fas" fill="currentColor" data-icon="calendar" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"></path></svg>
                                <p class="text-primary">${project.date}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="project-card__moreInfo">
                    <h1 class="text-primary">Summary:</h1>
                    <p class="text-primary">${project.summary}</p>
                    <hr class="project-card__moreInfo-sep">
                    <div class="project-card__moreInfo-buttons">
                            ${linksToAdd}
                    </div>
                </section>
            </button>
        `;
    }
}

// Define the custom element
customElements.define("project-card", ProjectCard);
