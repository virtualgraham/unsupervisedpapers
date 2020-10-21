---
{
  "title": "Unsupervised Person Re-identification",
  "date": "2017-05-30",
  "authors": [
    "Hehe Fan",
    "L. Zheng",
    "Yezhou Yang"
  ],
  "abstract": "The superiority of deeply learned pedestrian representations has been reported in very recent literature of person re-identification (re-ID). In this article, we consider the more pragmatic issue of learning a deep feature with no or only a few labels. We propose a progressive unsupervised learning (PUL) method to transfer pretrained deep representations to unseen domains. Our method is easy to implement and can be viewed as an effective baseline for unsupervised re-ID feature learning. Specifically, PUL iterates between (1) pedestrian clustering and (2) fine-tuning of the convolutional neural network (CNN) to improve the initialization model trained on the irrelevant labeled dataset. Since the clustering results can be very noisy, we add a selection operation between the clustering and fine-tuning. At the beginning, when the model is weak, CNN is fine-tuned on a small amount of reliable examples that locate near to cluster centroids in the feature space. As the model becomes stronger, in subsequent iterations, more images are being adaptively selected as CNN training samples. Progressively, pedestrian clustering and the CNN model are improved simultaneously until algorithm convergence. This process is naturally formulated as self-paced learning. We then point out promising directions that may lead to further improvement. Extensive experiments on three large-scale re-ID datasets demonstrate that PUL outputs discriminative features that improve the re-ID accuracy. Our code has been released at https://github.com/hehefan/Unsupervised-Person-Re-identification-Clustering-and-Fine-tuning.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://arxiv.org/pdf/1705.10444.pdf"
    },
    {
      "resource": "arXiv.org",
      "icon": "arxiv",
      "url": "https://arxiv.org/abs/1705.10444"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/31da1da2d4e7254dd8f2a4578d887c57e0678438"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "unsupervised-person-re-identification-thumb.jpg",
  "card": "unsupervised-person-re-identification-card.jpg",
  "s2_paper_id": "31da1da2d4e7254dd8f2a4578d887c57e0678438"
}
---

