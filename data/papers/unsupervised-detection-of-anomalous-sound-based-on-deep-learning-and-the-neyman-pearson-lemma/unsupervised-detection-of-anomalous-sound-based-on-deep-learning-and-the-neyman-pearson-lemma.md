---
{
  "title": "Unsupervised Detection of Anomalous Sound Based on Deep Learning and the Neyman–Pearson Lemma",
  "date": "2018-10-22",
  "authors": [
    "Yuma Koizumi",
    "S. Saito",
    "H. Uematsu",
    "Y. Kawachi",
    "N. Harada"
  ],
  "abstract": "This paper proposes a novel optimization principle and its implementation for unsupervised anomaly detection in sound (ADS) using an autoencoder (AE). The goal of the unsupervised-ADS is to detect unknown anomalous sounds without training data of anomalous sounds. The use of an AE as a normal model is a state-of-the-art technique for the unsupervised-ADS. To decrease the false positive rate (FPR), the AE is trained to minimize the reconstruction error of normal sounds, and the anomaly score is calculated as the reconstruction error of the observed sound. Unfortunately, since this training procedure does not take into account the anomaly score for anomalous sounds, the true positive rate (TPR) does not necessarily increase. In this study, we define an objective function based on the Neyman–Pearson lemma by considering the ADS as a statistical hypothesis test. The proposed objective function trains the AE to maximize the TPR under an arbitrary low FPR condition. To calculate the TPR in the objective function, we consider that the set of anomalous sounds is the complementary set of normal sounds and simulate anomalous sounds by using a rejection sampling algorithm. Through experiments using synthetic data, we found that the proposed method improved the performance measures of the ADS under low FPR conditions. In addition, we confirmed that the proposed method could detect anomalous sounds in real environments.",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "https://arxiv.org/pdf/1810.09133.pdf"
    },
    {
      "title": "arXiv.org",
      "type": "arxiv",
      "url": "https://arxiv.org/abs/1810.09133"
    },
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/bee2aeac46f73e14105a3205502de9879692d3fe"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "unsupervised-detection-of-anomalous-sound-based-on-deep-learning-and-the-neyman-pearson-lemma-thumb.jpg",
  "card": "unsupervised-detection-of-anomalous-sound-based-on-deep-learning-and-the-neyman-pearson-lemma-card.jpg",
  "s2_paper_id": "bee2aeac46f73e14105a3205502de9879692d3fe"
}
---

