export default {
  title: `Progress: A Poem`,
  tags: ["Poem"],
  spoiler: "The library was arranged chronologically...",
  getContent: () => import("./document.md")
};
