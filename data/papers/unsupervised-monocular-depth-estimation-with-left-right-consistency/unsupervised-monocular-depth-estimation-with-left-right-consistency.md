---
{
  "title": "Unsupervised Monocular Depth Estimation with Left-Right Consistency",
  "date": "2016-09-13",
  "authors": [
    "C. Godard",
    "Oisin Mac Aodha",
    "G. J. Brostow"
  ],
  "abstract": "Learning based methods have shown very promising results for the task of depth estimation in single images. However, most existing approaches treat depth prediction as a supervised regression problem and as a result, require vast quantities of corresponding ground truth depth data for training. Just recording quality depth data in a range of environments is a challenging problem. In this paper, we innovate beyond existing approaches, replacing the use of explicit depth data during training with easier-to-obtain binocular stereo footage. We propose a novel training objective that enables our convolutional neural network to learn to perform single image depth estimation, despite the absence of ground truth depth data. Ex-ploiting epipolar geometry constraints, we generate disparity images by training our network with an image reconstruction loss. We show that solving for image reconstruction alone results in poor quality depth images. To overcome this problem, we propose a novel training loss that enforces consistency between the disparities produced relative to both the left and right images, leading to improved performance and robustness compared to existing approaches. Our method produces state of the art results for monocular depth estimation on the KITTI driving dataset, even outperforming supervised methods that have been trained with ground truth depth.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://arxiv.org/pdf/1609.03677.pdf"
    },
    {
      "resource": "arXiv.org",
      "icon": "arxiv",
      "url": "https://arxiv.org/abs/1609.03677"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/4463dc4a32b948f0230f3b782cbfecaf1c9e5b1d"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "unsupervised-monocular-depth-estimation-with-left-right-consistency-thumb.jpg",
  "card": "unsupervised-monocular-depth-estimation-with-left-right-consistency-card.jpg",
  "s2_paper_id": "4463dc4a32b948f0230f3b782cbfecaf1c9e5b1d"
}
---

