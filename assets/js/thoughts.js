import { posts } from "./data.js";

const categories = [
  "Venture Capital News",
  "PE News",
  "Banking",
  "Finance",
  "Health Tech",
  "Fitness",
  "Social Media",
  "Startups",
  "Personal Essays",
];

const chipsContainer = document.querySelector("[data-category-chips]");
const postsContainer = document.querySelector("[data-posts-list]");
const searchInput = document.querySelector("[data-post-search]");

let activeCategory = "All";
let searchTerm = "";

const renderChips = () => {
  if (!chipsContainer) return;
  const allCategories = ["All", ...categories];
  chipsContainer.innerHTML = allCategories
    .map(
      (category) =>
        `<button class="filter-chip ${
          activeCategory === category ? "active" : ""
        }" data-category="${category}">${category}</button>`
    )
    .join("");
};

const renderPosts = () => {
  if (!postsContainer) return;
  const filtered = posts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  postsContainer.innerHTML = filtered
    .map(
      (post) => `
        <article class="post-item">
          <div class="post-meta">${post.date} · ${post.category}</div>
          <h3 class="post-title"><a href="./post.html?slug=${post.slug}">${post.title}</a></h3>
          <p class="section-subtitle">${post.excerpt}</p>
        </article>
      `
    )
    .join("");
};

if (chipsContainer) {
  chipsContainer.addEventListener("click", (event) => {
    const target = event.target;
    if (target.matches("button[data-category]")) {
      activeCategory = target.dataset.category;
      renderChips();
      renderPosts();
    }
  });
}

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value.trim().toLowerCase();
    renderPosts();
  });
}

renderChips();
renderPosts();
