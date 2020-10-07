---
{
  "title": "Correlation Alignment for Unsupervised Domain Adaptation",
  "date": "2016-12-06",
  "authors": [
    "Baochen Sun",
    "J. Feng",
    "K. Saenko"
  ],
  "abstract": "In this chapter, we present CORrelation ALignment (CORAL), a simple yet effective method for unsupervised domain adaptation. CORAL minimizes domain shift by aligning the second-order statistics of source and target distributions, without requiring any target labels. In contrast to subspace manifold methods, it aligns the original feature distributions of the source and target domains, rather than the bases of lower-dimensional subspaces. It is also much simpler than other distribution matching methods. CORAL performs remarkably well in extensive evaluations on standard benchmark datasets. We first describe a solution that applies a linear transformation to source features to align them with target features before classifier training. For linear classifiers, we propose to equivalently apply CORAL to the classifier weights, leading to added efficiency when the number of classifiers is small but the number and dimensionality of target examples are very high. The resulting CORAL Linear Discriminant Analysis (CORAL-LDA) outperforms LDA by a large margin on standard domain adaptation benchmarks. Finally, we extend CORAL to learn a nonlinear transformation that aligns correlations of layer activations in deep neural networks (DNNs). The resulting Deep CORAL approach works seamlessly with DNNs and achieves state-of-the-art performance on standard benchmark datasets. Our code is available at: https://github.com/VisionLearningGroup/CORAL.",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "https://arxiv.org/pdf/1612.01939.pdf"
    },
    {
      "title": "arXiv.org",
      "type": "arxiv",
      "url": "https://arxiv.org/abs/1612.01939"
    },
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/d4a196e67e9e47a9797670b7e4ae59f2330baca0"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "correlation-alignment-for-unsupervised-domain-adaptation-thumb.jpg",
  "card": "correlation-alignment-for-unsupervised-domain-adaptation-card.jpg",
  "s2_paper_id": "d4a196e67e9e47a9797670b7e4ae59f2330baca0"
}
---

