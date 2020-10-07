---
{
  "title": "Building high-level features using large scale unsupervised learning",
  "date": "2011-12-29",
  "authors": [
    "Quoc V. Le",
    "Marc'Aurelio Ranzato",
    "Rajat Monga",
    "M. Devin",
    "G. S. Corrado",
    "Kai Chen",
    "J. Dean",
    "A. Ng"
  ],
  "abstract": "We consider the problem of building high-level, class-specific feature detectors from only unlabeled data. For example, is it possible to learn a face detector using only unlabeled images? To answer this, we train a deep sparse autoencoder on a large dataset of images (the model has 1 billion connections, the dataset has 10 million 200×200 pixel images downloaded from the Internet). We train this network using model parallelism and asynchronous SGD on a cluster with 1,000 machines (16,000 cores) for three days. Contrary to what appears to be a widely-held intuition, our experimental results reveal that it is possible to train a face detector without having to label images as containing a face or not. Control experiments show that this feature detector is robust not only to translation but also to scaling and out-of-plane rotation. We also find that the same network is sensitive to other high-level concepts such as cat faces and human bodies. Starting from these learned features, we trained our network to recognize 22,000 object categories from ImageNet and achieve a leap of 70% relative improvement over the previous state-of-the-art.",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "https://arxiv.org/pdf/1112.6209.pdf"
    },
    {
      "title": "arXiv.org",
      "type": "arxiv",
      "url": "https://arxiv.org/abs/1112.6209"
    },
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/72e93aa6767ee683de7f001fa72f1314e40a8f35"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "building-high-level-features-using-large-scale-unsupervised-learning-thumb.jpg",
  "card": "building-high-level-features-using-large-scale-unsupervised-learning-card.jpg",
  "s2_paper_id": "72e93aa6767ee683de7f001fa72f1314e40a8f35"
}
---

