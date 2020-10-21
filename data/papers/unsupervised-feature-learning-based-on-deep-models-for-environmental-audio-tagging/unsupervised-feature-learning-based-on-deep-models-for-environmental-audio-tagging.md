---
{
  "title": "Unsupervised Feature Learning Based on Deep Models for Environmental Audio Tagging",
  "date": "2017-06-01",
  "authors": [
    "Y. Xu",
    "Qiang Huang",
    "W. Wang",
    "Peter Foster",
    "Siddharth Sigtia",
    "P. Jackson",
    "Mark D. Plumbley"
  ],
  "abstract": "Environmental audio tagging aims to predict only the presence or absence of certain acoustic events in the interested acoustic scene. In this paper, we make contributions to audio tagging in two parts, respectively, acoustic modeling and feature learning. We propose to use a shrinking deep neural network (DNN) framework incorporating unsupervised feature learning to handle the multilabel classification task. For the acoustic modeling, a large set of contextual frames of the chunk are fed into the DNN to perform a multilabel classification for the expected tags, considering that only chunk (or utterance) level rather than frame-level labels are available. Dropout and background noise aware training are also adopted to improve the generalization capability of the DNNs. For the unsupervised feature learning, we propose to use a symmetric or asymmetric deep denoising auto-encoder (syDAE or asyDAE) to generate new data-driven features from the logarithmic Mel-filter banks features. The new features, which are smoothed against background noise and more compact with contextual information, can further improve the performance of the DNN baseline. Compared with the standard Gaussian mixture model baseline of the DCASE 2016 audio tagging challenge, our proposed method obtains a significant equal error rate (EER) reduction from 0.21 to 0.13 on the development set. The proposed asyDAE system can get a relative 6.7% EER reduction compared with the strong DNN baseline on the development set. Finally, the results also show that our approach obtains the state-of-the-art performance with 0.15 EER on the evaluation set of the DCASE 2016 audio tagging task while EER of the first prize of this challenge is 0.17.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "http://dl.acm.org/citation.cfm?id=3149067"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/e91261f4f6787240f45a36ed707729c6137f4ec3"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "unsupervised-feature-learning-based-on-deep-models-for-environmental-audio-tagging-thumb.jpg",
  "card": "unsupervised-feature-learning-based-on-deep-models-for-environmental-audio-tagging-card.jpg",
  "s2_paper_id": "e91261f4f6787240f45a36ed707729c6137f4ec3"
}
---

