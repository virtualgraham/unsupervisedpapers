---
{
  "area": "computer-vision",
  "title": "GrabCut",
  "year": null,
  "categories": [
    "image-segmentation"
  ],
  "components": [],
  "thumbnail": "grab-cut-thumb.jpg",
  "introduced_by": null,
  "links": [
    {
      "title": "Interactive Foreground Extraction using GrabCut Algorithm ",
      "resource": "OpenCV",
      "icon": "wikipedia",
      "url": "https://docs.opencv.org/master/d8/d83/tutorial_py_grabcut.html"
    },
    {
      "title": "GrabCut",
      "resource": "Wikipedia",
      "icon": "wikipedia",
      "url": "https://en.wikipedia.org/wiki/GrabCut"
    }
  ],
  "card": "grab-cut-card.jpg"
}
---
**GrabCut** is an image segmentation method based on graph cuts.

Starting with a user-specified bounding box around the object to be segmented, the algorithm estimates the color distribution of the target object and that of the background using a Gaussian mixture model. This is used to construct a Markov random field over the pixel labels, with an energy function that prefers connected regions having the same label, and running a graph cut based optimization to infer their values. As this estimate is likely to be more accurate than the original, taken from the bounding box, this two-step procedure is repeated until convergence.  

Source: [Wikipedia](https://en.wikipedia.org/wiki/GrabCut)  
Image source: [GrabCut](https://docs.opencv.org/master/d8/d83/tutorial_py_grabcut.html)
