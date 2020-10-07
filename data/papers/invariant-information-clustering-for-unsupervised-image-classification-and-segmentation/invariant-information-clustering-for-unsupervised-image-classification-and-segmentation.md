---
{
  "title": "Invariant Information Clustering for Unsupervised Image Classification and Segmentation",
  "date": "2018-07-17",
  "authors": [
    "X. Ji",
    "A. Vedaldi",
    "João F. Henriques"
  ],
  "abstract": "We present a novel clustering objective that learns a neural network classifier from scratch, given only unlabelled data samples. The model discovers clusters that accurately match semantic classes, achieving state-of-the-art results in eight unsupervised clustering benchmarks spanning image classification and segmentation. These include STL10, an unsupervised variant of ImageNet, and CIFAR10, where we significantly beat the accuracy of our closest competitors by 6.6 and 9.5 absolute percentage points respectively. The method is not specialised to computer vision and operates on any paired dataset samples; in our experiments we use random transforms to obtain a pair from each image. The trained network directly outputs semantic labels, rather than high dimensional representations that need external processing to be usable for semantic clustering. The objective is simply to maximise mutual information between the class assignments of each pair. It is easy to implement and rigorously grounded in information theory, meaning we effortlessly avoid degenerate solutions that other clustering methods are susceptible to. In addition to the fully unsupervised mode, we also test two semi-supervised settings. The first achieves 88.8% accuracy on STL10 classification, setting a new global state-of-the-art over all existing methods (whether supervised, semi-supervised or unsupervised). The second shows robustness to 90% reductions in label coverage, of relevance to applications that wish to make use of small amounts of labels. github.com/xu-ji/IIC",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "https://arxiv.org/pdf/1807.06653.pdf"
    },
    {
      "title": "arXiv.org",
      "type": "arxiv",
      "url": "https://arxiv.org/abs/1807.06653"
    },
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/0c9ae806059196007938f24d0327a4237ed6adf5"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "invariant-information-clustering-for-unsupervised-image-classification-and-segmentation-thumb.jpg",
  "card": "invariant-information-clustering-for-unsupervised-image-classification-and-segmentation-card.jpg",
  "s2_paper_id": "0c9ae806059196007938f24d0327a4237ed6adf5"
}
---

