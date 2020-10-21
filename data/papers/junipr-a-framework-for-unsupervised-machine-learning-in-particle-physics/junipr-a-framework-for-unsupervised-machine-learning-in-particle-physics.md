---
{
  "title": "JUNIPR: a framework for unsupervised machine learning in particle physics",
  "date": "2018-04-25",
  "authors": [
    "A. Andreassen",
    "Ilya Feige",
    "C. Frye",
    "M. D. Schwartz"
  ],
  "abstract": "In applications of machine learning to particle physics, a persistent challenge is how to go beyond discrimination to learn about the underlying physics. To this end, a powerful tool would be a framework for unsupervised learning, where the machine learns the intricate high-dimensional contours of the data upon which it is trained, without reference to pre-established labels. In order to approach such a complex task, an unsupervised network must be structured intelligently, based on a qualitative understanding of the data. In this paper, we scaffold the neural network’s architecture around a leading-order model of the physics underlying the data. In addition to making unsupervised learning tractable, this design actually alleviates existing tensions between performance and interpretability. We call the framework Junipr: “Jets from UNsupervised Interpretable PRobabilistic models”. In this approach, the set of particle momenta composing a jet are clustered into a binary tree that the neural network examines sequentially. Training is unsupervised and unrestricted: the network could decide that the data bears little correspondence to the chosen tree structure. However, when there is a correspondence, the network’s output along the tree has a direct physical interpretation. Junipr models can perform discrimination tasks, through the statistically optimal likelihood-ratio test, and they permit visualizations of discrimination power at each branching in a jet’s tree. Additionally, Junipr models provide a probability distribution from which events can be drawn, providing a data-driven Monte Carlo generator. As a third application, Junipr models can reweight events from one (e.g. simulated) data set to agree with distributions from another (e.g. experimental) data set.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://arxiv.org/pdf/1804.09720.pdf"
    },
    {
      "resource": "arXiv.org",
      "icon": "arxiv",
      "url": "https://arxiv.org/abs/1804.09720"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/d298f3e23aa2bafe4daade554b6300dc1a1d548e"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "junipr-a-framework-for-unsupervised-machine-learning-in-particle-physics-thumb.jpg",
  "card": "junipr-a-framework-for-unsupervised-machine-learning-in-particle-physics-card.jpg",
  "s2_paper_id": "d298f3e23aa2bafe4daade554b6300dc1a1d548e"
}
---

