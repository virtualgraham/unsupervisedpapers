---
{
  "title": "Enhancing Supervised Terrain Classification with Predictive Unsupervised Learning",
  "date": "2006-08-16",
  "authors": [
    "M. Happold",
    "Mark Ollis",
    "N. Johnson"
  ],
  "abstract": "This paper describes a method for classifying the traversability of terrain by combining unsupervised learning of color models that predict scene geometry with supervised learning of the relationship between geometric features and traversability. A neural network is trained offline on hand-labeled geometric features computed from stereo data. An online process learns the association between color and geometry, enabling the robot to assess the traversability of regions for which there is little range information by estimating the geometry from the color of the scene and passing this to the neural network. This online process is continuous and extremely rapid, which allows for quick adaptations to different lighting conditions and terrain changes. The sensitivity of the traversability judgment is further adjusted online by feedback from the robot’s bumper. Terrain assessments from the color classifier are merged with pure geometric classifications in an occupancy grid by computing the intersection of the ray associated with a pixel with a ground plane computed from the stereo range data. We present results from DARPA-conducted tests that demonstrate its effectiveness in a variety of outdoor environments.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://pdfs.semanticscholar.org/ab37/c9e17588f500c7c7b659d06f60daaa1b8b6f.pdf"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/b3fd601fec6452120ee8d275e1b7ec5eae65b23c"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "enhancing-supervised-terrain-classification-with-predictive-unsupervised-learning-thumb.jpg",
  "card": "enhancing-supervised-terrain-classification-with-predictive-unsupervised-learning-card.jpg",
  "s2_paper_id": "b3fd601fec6452120ee8d275e1b7ec5eae65b23c"
}
---

