---
{
  "title": "Towards Real-Time Unsupervised Monocular Depth Estimation on CPU",
  "date": "2018-06-29",
  "authors": [
    "M. Poggi",
    "Filippo Aleotti",
    "F. Tosi",
    "S. Mattoccia"
  ],
  "abstract": "Unsupervised depth estimation from a single image is a very attractive technique with several implications in robotic, autonomous navigation, augmented reality and so on. This topic represents a very challenging task and the advent of deep learning enabled to tackle this problem with excellent results. However, these architectures are extremely deep and complex. Thus, real-time performance can be achieved only by leveraging power-hungry GPUs that do not allow to infer depth maps in application fields characterized by low-power constraints. To tackle this issue, in this paper we propose a novel architecture capable to quickly infer an accurate depth map on a CPU, even of an embedded system, using a pyramid of features extracted from a single input image. Similarly to state-of-the-art, we train our network in an unsupervised manner casting depth estimation as an image reconstruction problem. Extensive experimental results on the KITTI dataset show that compared to the top performing approach our network has similar accuracy but a much lower complexity (about 6% of parameters) enabling to infer a depth map for a KITTI image in about 1.7 s on the Raspberry Pi 3 and at more than 8 Hz on a standard CPU. Moreover, by trading accuracy for efficiency, our network allows to infer maps at about 2 Hz and 40 Hz respectively, still being more accurate than most state-of-the-art slower methods. To the best of our knowledge, it is the first method enabling such performance on CPUs paving the way for effective deployment of unsupervised monocular depth estimation even on embedded systems.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://arxiv.org/pdf/1806.11430.pdf"
    },
    {
      "resource": "arXiv.org",
      "icon": "arxiv",
      "url": "https://arxiv.org/abs/1806.11430"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/23b4e6cf7ccba4af3f5cec00472d778d68905354"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "towards-real-time-unsupervised-monocular-depth-estimation-on-cpu-thumb.jpg",
  "card": "towards-real-time-unsupervised-monocular-depth-estimation-on-cpu-card.jpg",
  "s2_paper_id": "23b4e6cf7ccba4af3f5cec00472d778d68905354"
}
---

