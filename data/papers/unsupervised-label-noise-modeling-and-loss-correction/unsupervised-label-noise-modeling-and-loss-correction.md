---
{
  "title": "Unsupervised label noise modeling and loss correction",
  "date": "2019-04-25",
  "authors": [
    "Eric Arazo Sanchez",
    "Diego Ortego",
    "P. Albert",
    "N. O'Connor",
    "Kevin McGuinness"
  ],
  "abstract": "Despite being robust to small amounts of label noise, convolutional neural networks trained with stochastic gradient methods have been shown to easily fit random labels. When there are a mixture of correct and mislabelled targets, networks \ntend to fit the former before the latter. This suggests using a suitable two-component mixture model as an unsupervised generative model of sample loss values during training to allow online estimation of the probability that a sample is mislabelled. Specifically, we propose a beta mixture to estimate this probability and correct the loss by relying on the network prediction (the so-called bootstrapping loss). We further adapt mixup augmentation to drive our approach a step further. Experiments on CIFAR-10/100 and TinyImageNet demonstrate a robustness to label noise that substantially outperforms recent state-of-the-art. Source code is available at https://git.io/fjsvE and Appendix at https://arxiv.org/abs/1904.11238.",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "https://arxiv.org/pdf/1904.11238.pdf"
    },
    {
      "title": "arXiv.org",
      "type": "arxiv",
      "url": "https://arxiv.org/abs/1904.11238"
    },
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/eeecea3097cf5629eb72a06e5caaf24d774adce7"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "unsupervised-label-noise-modeling-and-loss-correction-thumb.jpg",
  "card": "unsupervised-label-noise-modeling-and-loss-correction-card.jpg",
  "s2_paper_id": "eeecea3097cf5629eb72a06e5caaf24d774adce7"
}
---

