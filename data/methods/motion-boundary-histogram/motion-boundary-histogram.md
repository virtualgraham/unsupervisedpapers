---
{
  "area": "computer-vision",
  "title": "Motion-boundary histogram",
  "year": "2006",
  "categories": [
    "feature-detectors"
  ],
  "components": [],
  "introduced_by": null,
  "links": [
    {
      "title": "Human Detection Using Oriented Histograms of Flow and Appearance",
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/Human-Detection-Using-Oriented-Histograms-of-Flow-Dalal-Triggs/44f3ac3277c2eb6e5599739eb875888c46e21d4c"
    }
  ],
  "thumbnail": "motion-boundary-histogram-thumb.jpg",
  "card": "motion-boundary-histogram-card.jpg",
  "also_known_as": [
    "MBH"
  ]
}
---
For motion boundary coding it is natural to try to capture the local orientations of mo-tion edges by emulating the static-image HOG descriptors. The simplest approachis to treat the two flow components $Ix,Iy$ as independent ‘images’, take their localgradients separately, find the corresponding gradient magnitudes and orientations, anduse these as weighted votes into local orientation histograms in the same way as for thestandard gray scale HOG. We call this family of schemes Motion Boundary Histograms(MBH). A separate histogram can be built for each flow component, or thetwo channels can be combined, e.g. by the winner-takes-all voting method used to han-dle color channels in. 

Source, Image Source: [Human Detection Using Oriented Histograms of Flow and Appearance](https://www.semanticscholar.org/paper/Human-Detection-Using-Oriented-Histograms-of-Flow-Dalal-Triggs/44f3ac3277c2eb6e5599739eb875888c46e21d4c) [[PDF](https://hal.inria.fr/inria-00548587/file/DTS06.pdf)]
