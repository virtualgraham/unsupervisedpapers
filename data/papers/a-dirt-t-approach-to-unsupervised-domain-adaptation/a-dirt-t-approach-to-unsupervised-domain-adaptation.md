---
{
  "title": "A DIRT-T Approach to Unsupervised Domain Adaptation",
  "date": "2018-02-15",
  "authors": [
    "Rui Shu",
    "Hung H. Bui",
    "H. Narui",
    "S. Ermon"
  ],
  "abstract": "Domain adaptation refers to the problem of leveraging labeled data in a source domain to learn an accurate model in a target domain where labels are scarce or unavailable. A recent approach for finding a common representation of the two domains is via domain adversarial training (Ganin & Lempitsky, 2015), which attempts to induce a feature extractor that matches the source and target feature distributions in some feature space. However, domain adversarial training faces two critical limitations: 1) if the feature extraction function has high-capacity, then feature distribution matching is a weak constraint, 2) in non-conservative domain adaptation (where no single classifier can perform well in both the source and target domains), training the model to do well on the source domain hurts performance on the target domain. In this paper, we address these issues through the lens of the cluster assumption, i.e., decision boundaries should not cross high-density data regions. We propose two novel and related models: 1) the Virtual Adversarial Domain Adaptation (VADA) model, which combines domain adversarial training with a penalty term that punishes the violation the cluster assumption; 2) the Decision-boundary Iterative Refinement Training with a Teacher (DIRT-T) model, which takes the VADA model as initialization and employs natural gradient steps to further minimize the cluster assumption violation. Extensive empirical results demonstrate that the combination of these two models significantly improve the state-of-the-art performance on the digit, traffic sign, and Wi-Fi recognition domain adaptation benchmarks.",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "https://arxiv.org/pdf/1802.08735.pdf"
    },
    {
      "title": "arXiv.org",
      "type": "arxiv",
      "url": "https://arxiv.org/abs/1802.08735"
    },
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/008c901b3fd9e46ee8d3bddb616121e2887b7e67"
    }
  ],
  "supervision": [
    "unsupervised",
    "semi-supervised"
  ],
  "tasks": [
    "domain-adaptation"
  ],
  "methods": [
    "virtual-adversarial-training"
  ],
  "thumbnail": "a-dirt-t-approach-to-unsupervised-domain-adaptation-thumb.jpg",
  "card": "a-dirt-t-approach-to-unsupervised-domain-adaptation-card.jpg",
  "s2_paper_id": "008c901b3fd9e46ee8d3bddb616121e2887b7e67"
}
---

