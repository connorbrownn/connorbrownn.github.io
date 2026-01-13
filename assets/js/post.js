import { posts } from "./data.js";

const content = document.querySelector("[data-post-content]");

const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

if (!content) {
  throw new Error("Post content container not found.");
}

const post = posts.find((item) => item.slug === slug);

if (!post) {
  content.innerHTML = "<p>Post not found. Return to <a href=\"./thoughts.html\">My Thoughts</a>.</p>";
} else {
  const paragraphs = post.content.split("\n\n");
  content.innerHTML = `
    <div class="post-meta">${post.date} · ${post.category}</div>
    <h1 class="hero-title">${post.title}</h1>
    ${paragraphs.map((paragraph) => `<p class="section-subtitle">${paragraph}</p>`).join("")}
    <div class="section">
      <a class="button secondary" href="./thoughts.html">Back to Thoughts</a>
    </div>
  `;
}
