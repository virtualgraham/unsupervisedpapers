---
{
  "title": "Towards Principled Unsupervised Learning",
  "date": "2015-11-19",
  "authors": [
    "Ilya Sutskever",
    "R. Józefowicz",
    "K. Gregor",
    "Danilo Jimenez Rezende",
    "T. Lillicrap",
    "Oriol Vinyals"
  ],
  "abstract": "General unsupervised learning is a long-standing conceptual problem in machine learning. Supervised learning is successful because it can be solved by the minimization of the training error cost function. Unsupervised learning is not as successful, because the unsupervised objective may be unrelated to the supervised task of interest. For an example, density modelling and reconstruction have often been used for unsupervised learning, but they did not produced the sought-after performance gains, because they have no knowledge of the supervised tasks. \nIn this paper, we present an unsupervised cost function which we name the Output Distribution Matching (ODM) cost, which measures a divergence between the distribution of predictions and distributions of labels. The ODM cost is appealing because it is consistent with the supervised cost in the following sense: a perfect supervised classifier is also perfect according to the ODM cost. Therefore, by aggressively optimizing the ODM cost, we are almost guaranteed to improve our supervised performance whenever the space of possible predictions is exponentially large. \nWe demonstrate that the ODM cost works well on number of small and semi-artificial datasets using no (or almost no) labelled training cases. Finally, we show that the ODM cost can be used for one-shot domain adaptation, which allows the model to classify inputs that differ from the input distribution in significant ways without the need for prior exposure to the new domain.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://arxiv.org/pdf/1511.06440.pdf"
    },
    {
      "resource": "arXiv.org",
      "icon": "arxiv",
      "url": "https://arxiv.org/abs/1511.06440"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/08969cbeb4ac3fe0b20754cbcf221f8031fc682f"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "towards-principled-unsupervised-learning-thumb.jpg",
  "card": "towards-principled-unsupervised-learning-card.jpg",
  "s2_paper_id": "08969cbeb4ac3fe0b20754cbcf221f8031fc682f"
}
---

