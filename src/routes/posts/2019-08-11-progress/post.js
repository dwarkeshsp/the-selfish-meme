export default {
  title: `Progress`,
  tags: ["Poems"],
  spoiler: "The library was arranged chronologically...",
  getContent: () => import("./document.md")
};
