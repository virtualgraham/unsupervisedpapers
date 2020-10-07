---
{
  "title": "SqueezeSegV2: Improved Model Structure and Unsupervised Domain Adaptation for Road-Object Segmentation from a LiDAR Point Cloud",
  "date": "2018-09-22",
  "authors": [
    "B. Wu",
    "X. Zhou",
    "S. Zhao",
    "Xiangyu Yue",
    "K. Keutzer"
  ],
  "abstract": "Earlier work demonstrates the promise of deep-learning-based approaches for point cloud segmentation; however, these approaches need to be improved to be practically useful. To this end, we introduce a new model SqueezeSegV2. With an improved model structure, SqueezeSetV2 is more robust against dropout noises in LiDAR point cloud and therefore achieves significant accuracy improvement. Training models for point cloud segmentation requires large amounts of labeled data, which is expensive to obtain. To sidestep the cost of data collection and annotation, simulators such as GTA-V can be used to create unlimited amounts of labeled, synthetic data. However, due to domain shift, models trained on synthetic data often do not generalize well to the real world. Existing domain-adaptation methods mainly focus on images and most of them cannot be directly applied to point clouds. We address this problem with a domain-adaptation training pipeline consisting of three major components: 1) learned intensity rendering, 2) geodesic correlation alignment, and 3) progressive domain calibration. When trained on real data, our new model exhibits segmentation accuracy improvements of 6.0-8.6% over the original SqueezeSeg. When training our new model on synthetic data using the proposed domain adaptation pipeline, we nearly double test accuracy on real-world data, from 29.0% to 57.4%. Our source code and synthetic dataset are open sourced11https://github.com/xuanyuzhou98/SqueezeSegV2",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "https://arxiv.org/pdf/1809.08495.pdf"
    },
    {
      "title": "arXiv.org",
      "type": "arxiv",
      "url": "https://arxiv.org/abs/1809.08495"
    },
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/c524a8fe1ae29844627c163dd4efeb0cebc032c1"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "squeeze-seg-v2-improved-model-structure-and-unsupervised-domain-adaptation-for-road-object-segmentation-from-a-li-dar-point-cloud-thumb.jpg",
  "card": "squeeze-seg-v2-improved-model-structure-and-unsupervised-domain-adaptation-for-road-object-segmentation-from-a-li-dar-point-cloud-card.jpg",
  "s2_paper_id": "c524a8fe1ae29844627c163dd4efeb0cebc032c1"
}
---

