class ExperienceCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        const experienceId = this.getAttribute("id");
        const dataLocation = this.getAttribute("data-location");

        if (!experienceId) {
            this.shadowRoot.innerHTML = `<p>Error: No experience ID provided.</p>`;
            return;
        }

        try {
            const response = await fetch(dataLocation);
            const experiences = await response.json();
            const experience = experiences[experienceId];

            if (!experience) {
                this.shadowRoot.innerHTML = `<p>Error: Experience not found.</p>`;
                return;
            }

            this.render(experience);
        } catch (error) {
            this.shadowRoot.innerHTML = `<p>Error loading experience data.</p><p>${error}</p>`;
        }
    }

    render(exp) {
        const inputColourTag = this.getAttribute("card-colour") || "--color-base";

        const software = exp.software?.length > 0 ? `<li><p class="text-primary"><span>Software</span> used: <span>${exp.software.join('</span>, <span>')}</span></p></li>` : "";
        const responsibilities = exp.responsibilities.map(item => `<li><p class="text-primary">${item}</p></li>`).join("");

        this.shadowRoot.innerHTML = `
            <style>
                .experience-card__header h1,
                .experience-card__header p {
                    margin: 0;
                }

                .experience-card__details {
                    margin-top: 20px;
                    display: flex;
                    justify-content: space-between;
                }

                .experience-card__details h1 {
                    margin: 0;
                    font-size: 1.2rem;
                }

                .experience-card__details p {
                    margin: 0;
                    font-size: 1.125rem;
                }

                .experience-card__date {
                    display: flex;
                    gap: 8px;
                    align-items: center;
                }

                .experience-card ul {
                    font-size: 1.2rem;
                    margin: 0;
                    padding-top: 5px;
                }

                .experience-card ul li p {
                    margin: 5px 0;
                }

                .experience-card ul li p span {
                    color: var(--highlight-color);
                    font-weight: bold;
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

                .experience-card__date svg {
                    color: var(--color-text-primary);
                }

                .svg-inline--fa {
                    height: 1em;
                }

            </style>
            <div class="experience-card panel background-primary">
                <div class="experience-card__header">
                    <h1 class="text-primary">${exp.name}</h1>
                    <p class="text-primary">${exp.description}</p>
                </div>
                <div class="experience-card__details">
                    <h1 class="text-primary">${exp.role}</h1>
                    <div class="experience-card__date">
                        <svg class="svg-inline--fa fa-calendar icon" aria-hidden="true" focusable="false" data-prefix="fas" fill="currentColor" data-icon="calendar" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"></path></svg>   
                        <p class="text-primary">${exp.fromDate} - ${exp.toDate}</p>
                    </div>
                </div>
                <ul class="text-primary">
                    ${responsibilities}
                </ul>
            </div>
        `;
    }
}

customElements.define("experience-card", ExperienceCard);