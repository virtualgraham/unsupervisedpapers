---
{
  "title": "Unsupervised Object Class Discovery via Saliency-Guided Multiple Class Learning",
  "date": 2014-08-29,
  "authors": ["Jun-Yan Zhu", "Jiajun Wu", "Yichen Wei", "Eric Chang", "Zhuowen Tu"],
  "abstract": "In this paper, we tackle the problem of common object (multiple classes) discovery from a set of input images, where we assume the presence of one object class in each image. This problem is, loosely speaking, unsupervised since we do not know a priori about the object type, location, and scale in each image. We observe that the general task of object class discovery in a fully unsupervised manner is intrinsically ambiguous; here we adopt saliency detection to propose candidate image windows/patches to turn an unsupervised learning problem into a weakly-supervised learning problem. In the paper, we propose an algorithm for simultaneously localizing objects and discovering object classes via bottom-up (saliency-guided) multiple class learning (bMCL). Our contributions are three-fold: (1) we adopt saliency detection to convert unsupervised learning into multiple instance learning, formulated as bottom-up multiple class learning (bMCL); (2) we propose an integrated framework that simultaneously performs object localization, object class discovery, and object detector training; (3) we demonstrate that our framework yields significant improvements over existing methods for multi-class object discovery and possess evident advantages over competing methods in computer vision. In addition, although saliency detection has recently attracted much attention, its practical usage for high-level vision tasks has yet to be justified. Our method validates the usefulness of saliency detection to output “noisy input” for a top-down method to extract common patterns.",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "https://www.cs.cmu.edu/~junyanz/projects/bMCL/cvpr12_bmcl.pdf"
    },
    {
      "title": "IEEE",
      "type": "website",
      "url": "https://ieeexplore.ieee.org/document/6888473"
    },
    {
      "title": "Google Scholar",
      "type": "googlescholar",
      "url": "https://scholar.google.com/scholar?cluster=10156006120042250527"
    },
  ],
  "supervision": ["unsupervised"],
  "tasks": ["object-discovery", "object-localization"],
  "methods": ["window-based-saliency"],
  "thumbnail": "unsupervised-object-class-discovery-via-saliency-guided-multiple-class-learning.jpg"
}
---
