  // List your project IDs here
  const projectIds = ["detbadg", "pktsurvivor"];

  // Key for sessionStorage
  const storageKey = "selectedBackgroundProject";

  // Function to get or set a project ID for the session
  function getSelectedProject() {
    let project = sessionStorage.getItem(storageKey);

    if (!project) {
      // Pick a random project from the list
      const randomIndex = Math.floor(Math.random() * projectIds.length);
      project = projectIds[randomIndex];
      sessionStorage.setItem(storageKey, project);

      console.log(`[SET] ${storageKey}: ${project}`);
    } else {
      console.log(`[FOUND] ${storageKey}: ${project}`);
    }

    return project;
  }

  // Set image sources based on selected project
  function applyBackgroundImages() {
    const project = getSelectedProject();
    const basePath = `media/backgrounds/${project}/${project}`;

    const darkImg = document.getElementById("background-dark-img");
    const lightImg = document.getElementById("background-light-img");

    if (darkImg) darkImg.src = `${basePath}-dark.png`;
    if (lightImg) lightImg.src = `${basePath}-light.png`;
  }

  // Run on page load
  window.addEventListener("DOMContentLoaded", applyBackgroundImages);
