---
{
  "title": "Generative Adversarial Active Learning for Unsupervised Outlier Detection",
  "date": "2018-09-28",
  "authors": [
    "Yezheng Liu",
    "Zhe Li",
    "Chong Zhou",
    "Yuanchun Jiang",
    "Jianshan Sun",
    "M. Wang",
    "X. He"
  ],
  "abstract": "Outlier detection is an important topic in machine learning and has been used in a wide range of applications. In this paper, we approach outlier detection as a binary-classification issue by sampling potential outliers from a uniform reference distribution. However, due to the sparsity of data in high-dimensional space, a limited number of potential outliers may fail to provide sufficient information to assist the classifier in describing a boundary that can separate outliers from normal data effectively. To address this, we propose a novel Single-Objective Generative Adversarial Active Learning (SO-GAAL) method for outlier detection, which can directly generate informative potential outliers based on the mini-max game between a generator and a discriminator. Moreover, to prevent the generator from falling into the mode collapsing problem, the stop node of training should be determined when SO-GAAL is able to provide sufficient information. But without any prior information, it is extremely difficult for SO-GAAL. Therefore, we expand the network structure of SO-GAAL from a single generator to multiple generators with different objectives (MO-GAAL), which can generate a reasonable reference distribution for the whole dataset. We empirically compare the proposed approach with several state-of-the-art outlier detection methods on both synthetic and real-world datasets. The results show that MO-GAAL outperforms its competitors in the majority of cases, especially for datasets with various cluster types or high irrelevant variable ratio. The experiment codes are available at: https://github.com/leibinghe/GAAL-based-outlier-detection.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://arxiv.org/pdf/1809.10816.pdf"
    },
    {
      "resource": "arXiv.org",
      "icon": "arxiv",
      "url": "https://arxiv.org/abs/1809.10816"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/17eeaa7bfbadbcd92d5bacdda2e2f5760454eed9"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "generative-adversarial-active-learning-for-unsupervised-outlier-detection-thumb.jpg",
  "card": "generative-adversarial-active-learning-for-unsupervised-outlier-detection-card.jpg",
  "s2_paper_id": "17eeaa7bfbadbcd92d5bacdda2e2f5760454eed9"
}
---

