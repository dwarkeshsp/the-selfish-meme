export default {
  title: `Progress: A Poem`,
  tags: ["Prose"],
  spoiler: "The library was arranged chronologically...",
  getContent: () => import("./document.md")
};
