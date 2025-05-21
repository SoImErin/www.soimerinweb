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
        } catch (error) {
            this.shadowRoot.innerHTML = `<p>Error loading project data.</p>`;
        }
    }

    render(project) {
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
                }

                .project-card section {
                    width: 100%
                }

                .project-card h3 {
                    font-size: 1.5rem;
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
                    box-shadow: 0 0 40px rgba(0, 0, 0, 0.8);
                    transition: all .3s ease;
                    transform: scale(1.01);
                }

                .project-card:hover .project-card__media video,
                .project-card:hover .project-card__media img {
                    filter: grayscale(0);
                    transition: all 0.3s ease;
                }

                .project-card:hover .clickable-card-header {
                    transition: all 0.1s ease;
                }

                ${project.onClick ?
                    `
                    .project-card {
                        cursor: pointer;
                    }
                    ` :
                    ``
                }

                .project-card__content {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    flex-grow: 1;
                }

                .project-card__section {
                    display: flex;
                }

                .video-additional-info p {
                    margin-top: 0;
                    margin-bottom: 0;
                }

                .background-primary {
                    background-color: var(--color-base) !important;
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
                
                @media (max-width: 1300px) {
                    .project-card {
                        display: none;
                    }
                        
                    .mobile-temp-text {
                        display: block;
                    }
                    
                }

            </style>
            <h1 class="mobile-temp-text text-primary">Project Card - '${project.name}' is unavailable, mobile version coming soon.</h1>
            <button class="project-card panel background-primary" ${project.onClick ? `onclick="window.open('${project.onClick}', '_blank')"` : ``}>
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
                            ${project.onClick ?
                                `<svg class="svg-inline--fa fa-chevron-right clickable-header-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-v-7eb23141=""><path class="" fill="currentColor" d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>` :
                                ``
                            }
                            <small class="text-primary">${project.role}</small>
                        </h3>
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
            </button>
        `;
    }
}

// Define the custom element
customElements.define("project-card", ProjectCard);
