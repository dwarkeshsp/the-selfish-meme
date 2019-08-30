export default {
  title: `Ignorance: Book Review`,
  tags: ["Book Review"],
  spoiler:
    "Ignorance teems with parochial errors and unsound thinking. It directly contradicts modern philosophy of science on the nature and reach of explanations, and it creates unnecessary apologies and limitations for the scientific method.",
  getContent: () => import("./document.md")
};
