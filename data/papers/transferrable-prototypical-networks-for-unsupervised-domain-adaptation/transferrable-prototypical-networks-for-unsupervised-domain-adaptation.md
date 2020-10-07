---
{
  "title": "Transferrable Prototypical Networks for Unsupervised Domain Adaptation",
  "date": "2019-04-25",
  "authors": [
    "Yingwei Pan",
    "Ting Yao",
    "Yehao Li",
    "Yu Wang",
    "C. Ngo",
    "T. Mei"
  ],
  "abstract": "In this paper, we introduce a new idea for unsupervised domain adaptation via a remold of Prototypical Networks, which learn an embedding space and perform classification via a remold of the distances to the prototype of each class. Specifically, we present Transferrable Prototypical Networks (TPN) for adaptation such that the prototypes for each class in source and target domains are close in the embedding space and the score distributions predicted by prototypes separately on source and target data are similar. Technically, TPN initially matches each target example to the nearest prototype in the source domain and assigns an example a ``pseudo\" label. The prototype of each class could then be computed on source-only, target-only and source-target data, respectively. The optimization of TPN is end-to-end trained by jointly minimizing the distance across the prototypes on three types of data and KL-divergence of score distributions output by each pair of the prototypes. Extensive experiments are conducted on the transfers across MNIST, USPS and SVHN datasets, and superior results are reported when comparing to state-of-the-art approaches. More remarkably, we obtain an accuracy of 80.4% of single model on VisDA 2017 dataset.",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "https://arxiv.org/pdf/1904.11227.pdf"
    },
    {
      "title": "arXiv.org",
      "type": "arxiv",
      "url": "https://arxiv.org/abs/1904.11227"
    },
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/72d9c9e196e509344cb1f5d13c73f68e21718814"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "transferrable-prototypical-networks-for-unsupervised-domain-adaptation-thumb.jpg",
  "card": "transferrable-prototypical-networks-for-unsupervised-domain-adaptation-card.jpg",
  "s2_paper_id": "72d9c9e196e509344cb1f5d13c73f68e21718814"
}
---

