---
{
  "title": "A Benchmark Dataset and Saliency-Guided Stacked Autoencoders for Video-Based Salient Object Detection",
  "date": "2016-11-01",
  "authors": [
    "J. Li",
    "Changqun Xia",
    "X. Chen"
  ],
  "abstract": "Image-based salient object detection (SOD) has been extensively studied in past decades. However, video-based SOD is much less explored due to the lack of large-scale video datasets within which salient objects are unambiguously defined and annotated. Toward this end, this paper proposes a video-based SOD dataset that consists of 200 videos. In constructing the dataset, we manually annotate all objects and regions over 7650 uniformly sampled keyframes and collect the eye-tracking data of 23 subjects who free-view all videos. From the user data, we find that salient objects in a video can be defined as objects that consistently pop-out throughout the video, and objects with such attributes can be unambiguously annotated by combining manually annotated object/region masks with eye-tracking data of multiple subjects. To the best of our knowledge, it is currently the largest dataset for video-based salient object detection. Based on this dataset, this paper proposes an unsupervised baseline approach for video-based SOD by using saliency-guided stacked autoencoders. In the proposed approach, multiple spatiotemporal saliency cues are first extracted at the pixel, superpixel, and object levels. With these saliency cues, stacked autoencoders are constructed in an unsupervised manner that automatically infers a saliency score for each pixel by progressively encoding the high-dimensional saliency cues gathered from the pixel and its spatiotemporal neighbors. In experiments, the proposed unsupervised approach is compared with 31 state-of-the-art models on the proposed dataset and outperforms 30 of them, including 19 image-based classic (unsupervised or non-deep learning) models, six image-based deep learning models, and five video-based unsupervised models. Moreover, benchmarking results show that the proposed dataset is very challenging and has the potential to boost the development of video-based SOD.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://arxiv.org/pdf/1611.00135.pdf"
    },
    {
      "resource": "arXiv.org",
      "icon": "arxiv",
      "url": "https://arxiv.org/abs/1611.00135"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/55604c73022a40953ed0ff67c8b0e543ae6e9451"
    }
  ],
  "supervision": [
    "unsupervised"
  ],
  "tasks": [
    "object-detection",
    "salient-object-detection",
    "video-object-detection",
    "saliency-detection"
  ],
  "methods": [
    "stacked-autoencoders"
  ],
  "thumbnail": "a-benchmark-dataset-and-saliency-guided-stacked-autoencoders-for-video-based-salient-object-detection-thumb.jpg",
  "card": "a-benchmark-dataset-and-saliency-guided-stacked-autoencoders-for-video-based-salient-object-detection-card.jpg",
  "s2_paper_id": "55604c73022a40953ed0ff67c8b0e543ae6e9451"
}
---

