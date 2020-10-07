---
{
  "title": "Unsupervised CNN for Single View Depth Estimation: Geometry to the Rescue",
  "date": "2016-03-16",
  "authors": [
    "R. Garg",
    "B. V. Kumar",
    "G. Carneiro",
    "I. Reid"
  ],
  "abstract": "A significant weakness of most current deep Convolutional Neural Networks is the need to train them using vast amounts of manually labelled data. In this work we propose a unsupervised framework to learn a deep convolutional neural network for single view depth prediction, without requiring a pre-training stage or annotated ground-truth depths. We achieve this by training the network in a manner analogous to an autoencoder. At training time we consider a pair of images, source and target, with small, known camera motion between the two such as a stereo pair. We train the convolutional encoder for the task of predicting the depth map for the source image. To do so, we explicitly generate an inverse warp of the target image using the predicted depth and known inter-view displacement, to reconstruct the source image; the photometric error in the reconstruction is the reconstruction loss for the encoder. The acquisition of this training data is considerably simpler than for equivalent systems, requiring no manual annotation, nor calibration of depth sensor to camera. We show that our network trained on less than half of the KITTI dataset gives comparable performance to that of the state-of-the-art supervised methods for single view depth estimation.",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "https://arxiv.org/pdf/1603.04992.pdf"
    },
    {
      "title": "arXiv.org",
      "type": "arxiv",
      "url": "https://arxiv.org/abs/1603.04992"
    },
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/4d3beb32fa0efdd10280bad003ef37e5f62f6cbd"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "unsupervised-cnn-for-single-view-depth-estimation-geometry-to-the-rescue-thumb.jpg",
  "card": "unsupervised-cnn-for-single-view-depth-estimation-geometry-to-the-rescue-card.jpg",
  "s2_paper_id": "4d3beb32fa0efdd10280bad003ef37e5f62f6cbd"
}
---

