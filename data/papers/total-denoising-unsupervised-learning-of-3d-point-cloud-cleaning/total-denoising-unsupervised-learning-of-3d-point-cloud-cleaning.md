---
{
  "title": "Total Denoising: Unsupervised Learning of 3D Point Cloud Cleaning",
  "date": "2019-04-16",
  "authors": [
    "P. Hermosilla",
    "T. Ritschel",
    "T. Ropinski"
  ],
  "abstract": "We show that denoising of 3D point clouds can be learned unsupervised, directly from noisy 3D point cloud data only. This is achieved by extending recent ideas from learning of unsupervised image denoisers to unstructured 3D point clouds. Unsupervised image denoisers operate under the assumption that a noisy pixel observation is a random realization of a distribution around a clean pixel value, which allows appropriate learning on this distribution to eventually converge to the correct value. Regrettably, this assumption is not valid for unstructured points: 3D point clouds are subject to total noise, i.e. deviations in all coordinates, with no reliable pixel grid. Thus, an observation can be the realization of an entire manifold of clean 3D points, which makes the quality of a naïve extension of unsupervised image denoisers to 3D point clouds unfortunately only little better than mean filtering. To overcome this, and to enable effective and unsupervised 3D point cloud denoising, we introduce a spatial prior term, that steers converges to the unique closest out of the many possible modes on the manifold. Our results demonstrate unsupervised denoising performance similar to that of supervised learning with clean data when given enough training examples - whereby we do not need any pairs of noisy and clean training data.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://arxiv.org/pdf/1904.07615.pdf"
    },
    {
      "resource": "arXiv.org",
      "icon": "arxiv",
      "url": "https://arxiv.org/abs/1904.07615"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/98a156f95018572737127cc81e0339d9cf64c24f"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "total-denoising-unsupervised-learning-of-3d-point-cloud-cleaning-thumb.jpg",
  "card": "total-denoising-unsupervised-learning-of-3d-point-cloud-cleaning-card.jpg",
  "s2_paper_id": "98a156f95018572737127cc81e0339d9cf64c24f"
}
---

