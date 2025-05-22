const allTools = {
    "unity": `<div class="trained-tools__item" software-id="unity" tooltip="Unity Engine"> 
                <img src="media/logos/unity-logo.webp" alt="Unity">
              </div>`,
    "github": `<div class="trained-tools__item" tooltip="Github">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                    <g fill="#7f38a1" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-1 0.3,-1.6c0,0 1.4,0 2.8,1.3c0.5,-0.2 1.2,-0.3 1.9,-0.3c0.7,0 1.4,0.1 2,0.3c1.3,-1.3 2.8,-1.3 2.8,-1.3c0.2,0.6 0.2,1.2 0.2,1.6c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"></path></g></g>
                    </svg>
              </div>`,
    "html5": `<div class="trained-tools__item" software-id="html5" tooltip="HTML5">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                    <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                    </svg>
              </div>`,
    "css3": `<div class="trained-tools__item" software-id="css3" tooltip="CSS3">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                    <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                </svg>
              </div>`,
    "sql": `<div class="trained-tools__item" software-id="sql" tooltip="SQL">
                <img src="media/logos/sql-logo.png" alt="SQL">
            </div>`,
    "csharp": `<div class="trained-tools__item" software-id="csharp" tooltip="C#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/256px-Logo_C_sharp.svg.png" alt="C#">
            </div>`,
    "jira": `<div class="trained-tools__item" software-id="jira" tooltip="Jira">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><linearGradient id="jira-original-a" gradientUnits="userSpaceOnUse" x1="22.034" y1="9.773" x2="17.118" y2="14.842" gradientTransform="scale(4)"><stop offset=".176" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient><linearGradient id="jira-original-b" gradientUnits="userSpaceOnUse" x1="16.641" y1="15.564" x2="10.957" y2="21.094" gradientTransform="scale(4)"><stop offset=".176" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient></defs><path d="M108.023 16H61.805c0 11.52 9.324 20.848 20.847 20.848h8.5v8.226c0 11.52 9.328 20.848 20.848 20.848V19.977A3.98 3.98 0 00108.023 16zm0 0" fill="#2684ff"/><path d="M85.121 39.04H38.902c0 11.519 9.325 20.847 20.844 20.847h8.504v8.226c0 11.52 9.328 20.848 20.848 20.848V43.016a3.983 3.983 0 00-3.977-3.977zm0 0" fill="url(#jira-original-a)"/><path d="M62.219 62.078H16c0 11.524 9.324 20.848 20.848 20.848h8.5v8.23c0 11.52 9.328 20.844 20.847 20.844V66.059a3.984 3.984 0 00-3.976-3.98zm0 0" fill="url(#jira-original-b)"/></svg>
            </div>`,
    "figma": `<div class="trained-tools__item" software-id="figma" tooltip="Figma">
                <svg style="margin: 7.5% 0; height: 85%;" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 346 512.36"><g fill-rule="nonzero"><path fill="#00B6FF" d="M172.53 246.9c0-42.04 34.09-76.11 76.12-76.11h11.01c.3.01.63-.01.94-.01 47.16 0 85.4 38.25 85.4 85.4 0 47.15-38.24 85.39-85.4 85.39-.31 0-.64-.01-.95-.01l-11 .01c-42.03 0-76.12-34.09-76.12-76.12V246.9z"/><path fill="#24CB71" d="M0 426.98c0-47.16 38.24-85.41 85.4-85.41l87.13.01v84.52c0 47.65-39.06 86.26-86.71 86.26C38.67 512.36 0 474.13 0 426.98z"/><path fill="#FF7237" d="M172.53.01v170.78h87.13c.3-.01.63.01.94.01 47.16 0 85.4-38.25 85.4-85.4C346 38.24 307.76 0 260.6 0c-.31 0-.64.01-.95.01h-87.12z"/><path fill="#FF3737" d="M0 85.39c0 47.16 38.24 85.4 85.4 85.4h87.13V.01H85.39C38.24.01 0 38.24 0 85.39z"/><path fill="#874FFF" d="M0 256.18c0 47.16 38.24 85.4 85.4 85.4h87.13V170.8H85.39C38.24 170.8 0 209.03 0 256.18z"/></g></svg>
            </div>`,
    "php": `<div class="trained-tools__item" tooltip="PHP">
                <img src="media/logos/php.svg" alt="">
            </div>`,
    "xaml": `<div class="trained-tools__item" tooltip="XAML">
                <img src="media/logos/xaml.png" alt="">
            </div>`,
    "winforms": ``,
    "dotnet": `<div class="trained-tools__item" tooltip=".NET">
                    <img src="media/logos/dotnet.png" alt="">
                </div>`
};

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
        
        const toolsToRender = (exp.software || [])
            .map(toolId => allTools[toolId.toLowerCase()])
            .filter(Boolean)
            .join("");

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

                .trained-tools__container {
                    display: flex;
                    gap: 2px;
                }

                .trained-tools__item {
                    width: 30px;
                    height: 30px;
                    transition: transform 0.2s ease;
                }

                .trained-tools__item:hover {
                    transform: scale(1.2);
                    transition: transform 0.2s ease;
                }

                .trained-tools__item svg {
                    width: 100%;
                    height: 100%;
                }

                .trained-tools__item img {
                    width: 100%;
                    height: 85%;
                    object-fit: contain;
                    margin: 7.5% 0;
                }

            </style>
            <div class="experience-card panel background-primary">
                <div style="display: flex; justify-content: space-between;">
                    <div class="experience-card__header">
                        <h1 class="text-primary">${exp.name}</h1>
                        <p class="text-primary">${exp.description}</p>
                    </div>
                    
                    <div class="trained-tools__container">
                        ${toolsToRender}
                    </div>
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

        bindTooltipEvents(this.shadowRoot);
    }
}

customElements.define("experience-card", ExperienceCard);