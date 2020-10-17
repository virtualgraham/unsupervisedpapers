---
{
  "title": "Unsupervised Joint Object Discovery and Segmentation in Internet Images",
  "date": "2013-06-23",
  "authors": ["Michael Rubinstein", "Armand Joulin", "Johannes Kopf", "Ce Liu"],
  "abstract": "We present a new unsupervised algorithm to discover and segment out common objects from large and diverse image collections. In contrast to previous co-segmentation methods, our algorithm performs well even in the presence of significant amounts of noise images (images not containing a common object), as typical for datasets collected from Internet search. The key insight to our algorithm is that common object patterns should be salient within each image, while being sparse with respect to smooth transformations across other images. We propose to use dense correspondences between images to capture the sparsity and visual variability of the common object over the entire database, which enables us to ignore noise objects that may be salient within their own images but do not commonly occur in others. We performed extensive numerical evaluation on established co-segmentation datasets, as well as several new datasets generated using Internet search. Our approach is able to effectively segment out the common object for diverse object categories, while naturally identifying images where the common object is not present.",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "https://people.csail.mit.edu/mrub/papers/ObjectDiscovery-cvpr13.pdf"
    },
    {
      "title": "Project Website with Code",
      "type": "website",
      "url": "http://people.csail.mit.edu/mrub/ObjectDiscovery/"
    },
    {
      "title": "IEEE",
      "type": "website",
      "url": "https://ieeexplore.ieee.org/document/6619097"
    },
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/e99be23407b4965ab0e34ed2998cb6fafec7822a"
    }
  ],
  "supervision": ["unsupervised"],
  "tasks": ["object-co-segmentation"],
  "methods": ["contrast-based-saliency", "scale-invariant-feature-transform", "sift-flow", "gist-descriptor", "color-histogram", "grab-cut"],
  "thumbnail": "unsupervised-joint-object-discovery-and-segmentation-in-internet-images-thumb.jpg",
  "card": "unsupervised-joint-object-discovery-and-segmentation-in-internet-images-card.jpg",
  "s2_paper_id": "e99be23407b4965ab0e34ed2998cb6fafec7822a"
}
---
