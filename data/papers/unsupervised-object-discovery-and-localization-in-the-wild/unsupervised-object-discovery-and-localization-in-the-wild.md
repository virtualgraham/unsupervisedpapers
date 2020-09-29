---
{
  "title": "Unsupervised Object Discovery and Localization in the Wild: Part-Based Matching With Bottom-Up Region Proposals",
  "date": "01-25-2015",
  "authors": [
    "Minsu Cho", "Suha Kwak", "Cordelia Schmid", "Jean Ponce"
  ],
  "abstract": "This paper addresses unsupervised discovery and localization of dominant objects from a noisy image collection with multiple object classes. The setting of this problem is fully unsupervised, without even image-level annotations or any assumption of a single dominant class. This is far more general than typical colocalization, cosegmentation, or weakly-supervised localization tasks. We tackle the discovery and localization problem using a part-based region matching approach: We use off-the-shelf region proposals to form a set of candidate bounding boxes for objects and object parts. These regions are efficiently matched across images using a probabilistic Hough transform that evaluates the confidence for each candidate correspondence considering both appearance and spatial consistency. Dominant objects are discovered and localized by comparing the scores of candidate regions and selecting those that stand out over other regions containing them. Extensive experimental evaluations on standard benchmarks demonstrate that the proposed approach significantly outperforms the current state of the art in colocalization, and achieves robust object discovery in challenging mixed-class datasets.",
  "bibtex": "@InProceedings{cho2015,
    author = {Minsu Cho and Suha Kwak and Cordelia Schmid and Jean Ponce},
    title = {Unsupervised Object Discovery and Localization in the Wild: Part-based Matching with Bottom-up Region Proposals},
    booktitle = {Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition},
    year = {2015}
  }",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "https://arxiv.org/pdf/1501.06170"
    },
    {
      "title": "arXiv.org",
      "type": "arxiv",
      "url": "https://arxiv.org/abs/1501.06170"
    },
    {
      "title": "CVPR 2015",
      "type": "website",
      "url": "https://openaccess.thecvf.com/content_cvpr_2015/html/Cho_Unsupervised_Object_Discovery_2015_CVPR_paper.html"
    },
    {
      "title": "Project Webpage with Matlab Code",
      "type": "Website",
      "url": "https://www.di.ens.fr/willow/research/objectdiscovery/"
    },
  ],
  "tasks": [
      "object-discovery", "object-localization" 
  ],
  "methods": [
      "part-based-region-matching"
  ],
  "thumbnail": "unsupervised-object-discovery-and-localization-in-the-wild.jpg"
}
---