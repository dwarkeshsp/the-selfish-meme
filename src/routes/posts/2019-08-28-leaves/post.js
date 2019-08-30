export default {
  title: `Leaves`,
  tags: ["Prose"],
  spoiler:
    " The mechanics of this universe leave us epistemologically lonely, foundationally confused, and tyrannically controlled. Worse yet, we lack the cognitive tools to imagine another. This all makes even asking the question - What are we to do? - redundant and ironic.",
  getContent: () => import("./document.md")
};
