---
{
  "title": "Unsupervised feature learning with C-SVDDNet",
  "date": "2014-12-23",
  "authors": [
    "D. Wang",
    "Xiaoyang Tan"
  ],
  "abstract": "In this paper, we investigate the problem of learning feature representation from unlabeled data using a single-layer K-means network. A K-means network maps the input data into a feature representation by finding the nearest centroid for each input point, which has attracted researchers' great attention recently due to its simplicity, effectiveness, and scalability. However, one drawback of this feature mapping is that it tends to be unreliable when the training data contains noise. To address this issue, we propose a SVDD based feature learning algorithm that describes the density and distribution of each cluster from K-means with an SVDD ball for more robust feature representation. For this purpose, we present a new SVDD algorithm called C-SVDD that centers the SVDD ball towards the mode of local density of each cluster, and we show that the objective of C-SVDD can be solved very efficiently as a linear programming problem. Additionally, traditional unsupervised feature learning methods usually take an average or sum of local representations to obtain global representation which ignore spatial relationship among them. To use spatial information we propose a global representation with a variant of SIFT descriptor. The architecture is also extended with multiple receptive field scales and multiple pooling sizes. Extensive experiments on several popular object recognition benchmarks, such as STL-10, MINST, Holiday and Copydays shows that the proposed C-SVDDNet method yields comparable or better performance than that of the previous state of the art methods.",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "http://arxiv.org/pdf/1412.7259"
    },
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/ac3d41fb5da7d84c1a5b08d01e55b09f96f048a6"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "unsupervised-feature-learning-with-c-svddnet-thumb.jpg",
  "card": "unsupervised-feature-learning-with-c-svddnet-card.jpg",
  "s2_paper_id": "ac3d41fb5da7d84c1a5b08d01e55b09f96f048a6"
}
---

