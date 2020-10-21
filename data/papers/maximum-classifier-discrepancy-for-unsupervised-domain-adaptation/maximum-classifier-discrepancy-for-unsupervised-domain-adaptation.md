---
{
  "title": "Maximum Classifier Discrepancy for Unsupervised Domain Adaptation",
  "date": "2017-12-07",
  "authors": [
    "K. Saito",
    "K. Watanabe",
    "Y. Ushiku",
    "T. Harada"
  ],
  "abstract": "In this work, we present a method for unsupervised domain adaptation. Many adversarial learning methods train domain classifier networks to distinguish the features as either a source or target and train a feature generator network to mimic the discriminator. Two problems exist with these methods. First, the domain classifier only tries to distinguish the features as a source or target and thus does not consider task-specific decision boundaries between classes. Therefore, a trained generator can generate ambiguous features near class boundaries. Second, these methods aim to completely match the feature distributions between different domains, which is difficult because of each domain's characteristics. To solve these problems, we introduce a new approach that attempts to align distributions of source and target by utilizing the task-specific decision boundaries. We propose to maximize the discrepancy between two classifiers' outputs to detect target samples that are far from the support of the source. A feature generator learns to generate target features near the support to minimize the discrepancy. Our method outperforms other methods on several datasets of image classification and semantic segmentation. The codes are available at https://github.com/mil-tokyo/MCD_DA",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://arxiv.org/pdf/1712.02560.pdf"
    },
    {
      "resource": "arXiv.org",
      "icon": "arxiv",
      "url": "https://arxiv.org/abs/1712.02560"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/0d725e4fea8bbaf332d6a8d424ebecbd547a3851"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "maximum-classifier-discrepancy-for-unsupervised-domain-adaptation-thumb.jpg",
  "card": "maximum-classifier-discrepancy-for-unsupervised-domain-adaptation-card.jpg",
  "s2_paper_id": "0d725e4fea8bbaf332d6a8d424ebecbd547a3851"
}
---

