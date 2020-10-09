---
{
  "title": "Efficient Video Object Co-localization with Co-saliency Activated Tracklets",
  "date": "2018-02-13",
  "authors": ["Koteswar Rao Jerripothula", "Jianfei Cai", "Junsong Yuan"],
  "abstract": "Video object co-localization is the task of jointly localizing common visual objects across videos. Due to the large variations both across the videos and within each video, it is quite challenging to identify and track the common objects jointly. Unlike the previous joint frameworks that use a large number of bounding box proposals to attack the problem, we propose to leverage co-saliency activated tracklets to efficiently address the problem. To highlight the common object regions, we first explore inter-video commonness, intra-video commonness, and motion saliency to generate the co-saliency maps for a small number of selected key frames at regular intervals. Object proposals of high objectness and co-saliency scores in those frames are tracked across each interval to build tracklets. Finally, the best tube for a video is obtained through selecting the optimal tracklet from each interval with the help of confidence and smoothness constraints. Experimental results on the benchmark YouTube-objects dataset show that the proposed method outperforms the state-of-the-art methods in terms of accuracy and speed under both weakly supervised and unsupervised settings. Moreover, by noticing the existing benchmark dataset lacks of sufficient annotations for object localization (only one annotated frame per video), we further annotate more than 15k frames of the YouTube videos and develop a new benchmark dataset for video co-localization.",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "https://rose.ntu.edu.sg/Publications/Documents/Saliency%20Detection/Efficient%20Video%20Object%20Co-localization%20with%20Co-saliency%20Activated%20Tracklets.pdf"
    },
    {
      "title": "IEEE",
      "type": "website",
      "url": "https://ieeexplore.ieee.org/document/6909586"
    },
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/86dffe4940280c14a8cddf43bcdda83b9ce91b9c"
    }
  ],
  "supervision": ["weakly-supervised", "unsupervised"],
  "tasks": ["object-colocalization"],
  "methods": ["gist-descriptor", "scale-invariant-feature-transform", "grab-cut"],
  "thumbnail": "efficient-video-object-co-localization-with-co-saliency-activated-tracklets-thumb.jpg",
  "card": "efficient-video-object-co-localization-with-co-saliency-activated-tracklets-card.jpg",
  "s2_paper_id": "86dffe4940280c14a8cddf43bcdda83b9ce91b9c"
}
---
