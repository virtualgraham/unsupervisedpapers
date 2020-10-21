---
{
  "title": "Unsupervised Learning of Visual Representations by Solving Jigsaw Puzzles",
  "date": "2016-03-30",
  "authors": [
    "M. Noroozi",
    "P. Favaro"
  ],
  "abstract": "We propose a novel unsupervised learning approach to build features suitable for object detection and classification. The features are pre-trained on a large dataset without human annotation and later transferred via fine-tuning on a different, smaller and labeled dataset. The pre-training consists of solving jigsaw puzzles of natural images. To facilitate the transfer of features to other tasks, we introduce the context-free network (CFN), a siamese-ennead convolutional neural network. The features correspond to the columns of the CFN and they process image tiles independently (i.e., free of context). The later layers of the CFN then use the features to identify their geometric arrangement. Our experimental evaluations show that the learned features capture semantically relevant content. We pre-train the CFN on the training set of the ILSVRC2012 dataset and transfer the features on the combined training and validation set of Pascal VOC 2007 for object detection (via fast RCNN) and classification. These features outperform all current unsupervised features with \\(51.8\\,\\%\\) for detection and \\(68.6\\,\\%\\) for classification, and reduce the gap with supervised learning (\\(56.5\\,\\%\\) and \\(78.2\\,\\%\\) respectively).",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://arxiv.org/pdf/1603.09246.pdf"
    },
    {
      "resource": "arXiv.org",
      "icon": "arxiv",
      "url": "https://arxiv.org/abs/1603.09246"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/2ec8f7e0257a07d3914322b36072d1bbcd58a1e0"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "unsupervised-learning-of-visual-representations-by-solving-jigsaw-puzzles-thumb.jpg",
  "card": "unsupervised-learning-of-visual-representations-by-solving-jigsaw-puzzles-card.jpg",
  "s2_paper_id": "2ec8f7e0257a07d3914322b36072d1bbcd58a1e0"
}
---

