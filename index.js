fetch("./project.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Verwerkt het antwoord als JSON
  })
  .then((data) => {
    const projectsList = document.querySelector(".projects");
    data.forEach((project) => {
      const li = document.createElement("li");
      li.textContent = `${project.name}: ${project.description}`;
      projectsList.appendChild(li);
    });
  })
  .catch((error) => {
    console.error("Er is een probleem met de fetch-operatie:", error);
  });
