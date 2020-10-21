---
{
  "title": "Supervision-by-Registration: An Unsupervised Approach to Improve the Precision of Facial Landmark Detectors",
  "date": "2018-06-18",
  "authors": [
    "Xuanyi Dong",
    "Shoou-I Yu",
    "Xinshuo Weng",
    "Shih-En Wei",
    "Yi Yang",
    "Yaser Sheikh"
  ],
  "abstract": "In this paper, we present supervision-by-registration, an unsupervised approach to improve the precision of facial landmark detectors on both images and video. Our key observation is that the detections of the same landmark in adjacent frames should be coherent with registration, i.e., optical flow. Interestingly, coherency of optical flow is a source of supervision that does not require manual labeling, and can be leveraged during detector training. For example, we can enforce in the training loss function that a detected landmark at framet-1 followed by optical flow tracking from framet-1 to framet should coincide with the location of the detection at framet. Essentially, supervision-by-registration augments the training loss function with a registration loss, thus training the detector to have output that is not only close to the annotations in labeled images, but also consistent with registration on large amounts of unlabeled videos. End-to-end training with the registration loss is made possible by a differentiable Lucas-Kanade operation, which computes optical flow registration in the forward pass, and back-propagates gradients that encourage temporal coherency in the detector. The output of our method is a more precise image-based facial landmark detector, which can be applied to single images or video. With supervision-by-registration, we demonstrate (1) improvements in facial landmark detection on both images (300W, ALFW) and video (300VW, Youtube-Celebrities), and (2) significant reduction of jittering in video detections.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://arxiv.org/pdf/1807.00966.pdf"
    },
    {
      "resource": "arXiv.org",
      "icon": "arxiv",
      "url": "https://arxiv.org/abs/1807.00966"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/3534635d265932ed6c3e991cade973774e5e51ea"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "supervision-by-registration-an-unsupervised-approach-to-improve-the-precision-of-facial-landmark-detectors-thumb.jpg",
  "card": "supervision-by-registration-an-unsupervised-approach-to-improve-the-precision-of-facial-landmark-detectors-card.jpg",
  "s2_paper_id": "3534635d265932ed6c3e991cade973774e5e51ea"
}
---

