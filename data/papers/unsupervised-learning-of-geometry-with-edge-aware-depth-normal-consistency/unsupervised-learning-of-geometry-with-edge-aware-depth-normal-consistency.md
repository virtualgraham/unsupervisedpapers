---
{
  "title": "Unsupervised Learning of Geometry with Edge-aware Depth-Normal Consistency",
  "date": "2017-11-10",
  "authors": [
    "Zhenheng Yang",
    "P. Wang",
    "W. Xu",
    "Liang Zhao",
    "R. Nevatia"
  ],
  "abstract": "Learning to reconstruct depths in a single image by watching unlabeled videos via deep convolutional network (DCN) is attracting significant attention in recent years. In this paper, we introduce a surface normal representation for unsupervised depth estimation framework. Our estimated depths are constrained to be compatible with predicted normals, yielding more robust geometry results. Specifically, we formulate an edge-aware depth-normal consistency term, and solve it by constructing a depth-to-normal layer and a normal-to-depth layer inside of the DCN. The depth-to-normal layer takes estimated depths as input, and computes normal directions using cross production based on neighboring pixels. Then given the estimated normals, the normal-to-depth layer outputs a regularized depth map through local planar smoothness. Both layers are computed with awareness of edges inside the image to help address the issue of depth/normal discontinuity and preserve sharp edges. Finally, to train the network, we apply the photometric error and gradient smoothness for both depth and normal predictions. We conducted experiments on both outdoor (KITTI) and indoor (NYUv2) datasets, and show that our algorithm vastly outperforms state of the art, which demonstrates the benefits from our approach.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://arxiv.org/pdf/1711.03665.pdf"
    },
    {
      "resource": "arXiv.org",
      "icon": "arxiv",
      "url": "https://arxiv.org/abs/1711.03665"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/79f8f655a87d5b00e5bf6c629e3b311addc79feb"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "unsupervised-learning-of-geometry-with-edge-aware-depth-normal-consistency-thumb.jpg",
  "card": "unsupervised-learning-of-geometry-with-edge-aware-depth-normal-consistency-card.jpg",
  "s2_paper_id": "79f8f655a87d5b00e5bf6c629e3b311addc79feb"
}
---

