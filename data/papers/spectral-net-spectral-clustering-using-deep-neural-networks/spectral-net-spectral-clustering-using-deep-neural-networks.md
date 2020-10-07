---
{
  "title": "SpectralNet: Spectral Clustering using Deep Neural Networks",
  "date": "2018-01-04",
  "authors": [
    "Uri Shaham",
    "K. Stanton",
    "Haochao Li",
    "B. Nadler",
    "R. Basri",
    "Y. Kluger"
  ],
  "abstract": "Spectral clustering is a leading and popular technique in unsupervised data analysis. Two of its major limitations are scalability and generalization of the spectral embedding (i.e., out-of-sample-extension). In this paper we introduce a deep learning approach to spectral clustering that overcomes the above shortcomings. Our network, which we call SpectralNet, learns a map that embeds input data points into the eigenspace of their associated graph Laplacian matrix and subsequently clusters them. We train SpectralNet using a procedure that involves constrained stochastic optimization. Stochastic optimization allows it to scale to large datasets, while the constraints, which are implemented using a special-purpose output layer, allow us to keep the network output orthogonal. Moreover, the map learned by SpectralNet naturally generalizes the spectral embedding to unseen data points. To further improve the quality of the clustering, we replace the standard pairwise Gaussian affinities with affinities leaned from unlabeled data using a Siamese network. Additional improvement can be achieved by applying the network to code representations produced, e.g., by standard autoencoders. Our end-to-end learning procedure is fully unsupervised. In addition, we apply VC dimension theory to derive a lower bound on the size of SpectralNet. State-of-the-art clustering results are reported on the Reuters dataset. Our implementation is publicly available at this https URL .",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "https://arxiv.org/pdf/1801.01587.pdf"
    },
    {
      "title": "arXiv.org",
      "type": "arxiv",
      "url": "https://arxiv.org/abs/1801.01587"
    },
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/40cec58d760940f62975e0d5e99632e28df0b5d0"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "spectral-net-spectral-clustering-using-deep-neural-networks-thumb.jpg",
  "card": "spectral-net-spectral-clustering-using-deep-neural-networks-card.jpg",
  "s2_paper_id": "40cec58d760940f62975e0d5e99632e28df0b5d0"
}
---

