import { projects } from "./data.js";

const grid = document.querySelector("[data-projects-grid]");

if (grid) {
  grid.innerHTML = projects
    .map((project) => {
      const tags = project.tags
        ? project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")
        : "";
      const button = project.link
        ? `<a class="button secondary" href="${project.link}" target="_blank" rel="noreferrer">View</a>`
        : "";
      const image = project.image
        ? `<img src="${project.image}" alt="${project.title}" class="card-image" />`
        : `<div class="card-image" aria-hidden="true"></div>`;

      return `
        <article class="card">
          ${image}
          <h3>${project.title}</h3>
          <p class="section-subtitle">${project.description}</p>
          <div class="tag-list">${tags}</div>
          ${button}
        </article>
      `;
    })
    .join("");
}
