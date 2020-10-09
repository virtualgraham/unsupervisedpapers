---
{
  "title": "Unsupervised Object Discovery and Localization in the Wild: Part-Based Matching With Bottom-Up Region Proposals",
  "date": "2015-01-25",
  "authors": [
    "Minsu Cho", "Suha Kwak", "Cordelia Schmid", "Jean Ponce"
  ],
  "abstract": "This paper addresses unsupervised discovery and localization of dominant objects from a noisy image collection with multiple object classes. The setting of this problem is fully unsupervised, without even image-level annotations or any assumption of a single dominant class. This is far more general than typical colocalization, cosegmentation, or weakly-supervised localization tasks. We tackle the discovery and localization problem using a part-based region matching approach: We use off-the-shelf region proposals to form a set of candidate bounding boxes for objects and object parts. These regions are efficiently matched across images using a probabilistic Hough transform that evaluates the confidence for each candidate correspondence considering both appearance and spatial consistency. Dominant objects are discovered and localized by comparing the scores of candidate regions and selecting those that stand out over other regions containing them. Extensive experimental evaluations on standard benchmarks demonstrate that the proposed approach significantly outperforms the current state of the art in colocalization, and achieves robust object discovery in challenging mixed-class datasets.",
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
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/988c8578178fa263c2524d85292072c6a13a6121"
    }
  ],
  "supervision": ["unsupervised"],
  "tasks": [
      "object-discovery", "object-localization"
  ],
  "methods": [
      "part-based-region-matching" ,"histogram-of-oriented-gradients", "randomized-prims-algorithm", "hough-transform", "gist-descriptor" 
  ],
  "thumbnail": "unsupervised-object-discovery-and-localization-in-the-wild-thumb.jpg",
  "card": "unsupervised-object-discovery-and-localization-in-the-wild.jpg",
  "s2_paper_id": "988c8578178fa263c2524d85292072c6a13a6121"
}
---
