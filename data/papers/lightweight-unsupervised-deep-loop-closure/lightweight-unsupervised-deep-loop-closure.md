---
{
  "title": "Lightweight Unsupervised Deep Loop Closure",
  "date": "2018-05-20",
  "authors": [
    "Nate Merrill",
    "Guoquan Huang"
  ],
  "abstract": "Robust efficient loop closure detection is essential for large-scale real-time SLAM. In this paper, we propose a novel unsupervised deep neural network architecture of a feature embedding for visual loop closure that is both reliable and compact. Our model is built upon the autoencoder architecture, tailored specifically to the problem at hand. To train our network, we inflict random noise on our input data as the denoising autoencoder does, but, instead of applying random dropout, we warp images with randomized projective transformations to emulate natural viewpoint changes due to robot motion. Moreover, we utilize the geometric information and illumination invariance provided by histogram of oriented gradients (HOG), forcing the encoder to reconstruct a HOG descriptor instead of the original image. As a result, our trained model extracts features robust to extreme variations in appearance directly from raw images, without the need for labeled training data or environment-specific training. We perform extensive experiments on various challenging datasets, showing that the proposed deep loop-closure model consistently outperforms the state-of-the-art methods in terms of effectiveness and efficiency. Our model is fast and reliable enough to close loops in real time with no dimensionality reduction, and capable of replacing generic off-the-shelf networks in state-of-the-art ConvNet-based loop closure systems.",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "https://arxiv.org/pdf/1805.07703.pdf"
    },
    {
      "title": "arXiv.org",
      "type": "arxiv",
      "url": "https://arxiv.org/abs/1805.07703"
    },
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/7d050da7fd7e93f394956d26e98f3d438b3f6a25"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "lightweight-unsupervised-deep-loop-closure-thumb.jpg",
  "card": "lightweight-unsupervised-deep-loop-closure-card.jpg",
  "s2_paper_id": "7d050da7fd7e93f394956d26e98f3d438b3f6a25"
}
---

