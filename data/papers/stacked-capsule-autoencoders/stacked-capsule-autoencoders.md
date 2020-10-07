---
{
  "title": "Stacked Capsule Autoencoders",
  "date": "2019-06-17",
  "authors": [
    "Adam R. Kosiorek",
    "Sara Sabour",
    "Y. Teh",
    "Geoffrey E. Hinton"
  ],
  "abstract": "An object can be seen as a geometrically organized set of interrelated parts. A system that makes explicit use of these geometric relationships to recognize objects should be naturally robust to changes in viewpoint, because the intrinsic geometric relationships are viewpoint-invariant. We describe an unsupervised version of capsule networks, in which a neural encoder, which looks at all of the parts, is used to infer the presence and poses of object capsules. The encoder is trained by backpropagating through a decoder, which predicts the pose of each already discovered part using a mixture of pose predictions. The parts are discovered directly from an image, in a similar manner, by using a neural encoder, which infers parts and their affine transformations. The corresponding decoder models each image pixel as a mixture of predictions made by affine-transformed parts. We learn object- and their part-capsules on unlabeled data, and then cluster the vectors of presences of object capsules. When told the names of these clusters, we achieve state-of-the-art results for unsupervised classification on SVHN (55%) and near state-of-the-art on MNIST (98.5%).",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "https://arxiv.org/pdf/1906.06818.pdf"
    },
    {
      "title": "arXiv.org",
      "type": "arxiv",
      "url": "https://arxiv.org/abs/1906.06818"
    },
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/46c53faeaf2f52215adb165559c5ce056a71146b"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "stacked-capsule-autoencoders-thumb.jpg",
  "card": "stacked-capsule-autoencoders-card.jpg",
  "s2_paper_id": "46c53faeaf2f52215adb165559c5ce056a71146b"
}
---
