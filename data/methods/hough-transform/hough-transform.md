---
{
  "area": "computer-vision",
  "title": "Hough Transform",
  "year": null,
  "categories": [
    "feature-extraction"
  ],
  "components": [],
  "thumbnail": "hough-transform-thumb.jpg",
  "introduced_by": null,
  "links": [
    {
      "title": "Hough transform",
      "resource": "Wikipedia",
      "icon": "wikipedia",
      "url": "https://en.wikipedia.org/wiki/Hough_transform"
    },
    {
      "title": "Hough Transform",
      "resource": "The University of Edinburgh School of Informatics",
      "icon": "website",
      "url": "http://homepages.inf.ed.ac.uk/rbf/HIPR2/hough.htm"
    },
    {
      "title": "Straight line Hough transform",
      "resource": "scikit-image",
      "icon": "website",
      "url": "https://scikit-image.org/docs/0.13.x/auto_examples/edges/plot_line_hough_transform.html"
    },
    {
      "title": "Lines Detection with Hough Transform",
      "resource": "Towards Data Science",
      "description": "",
      "icon": "website",
      "url": "https://towardsdatascience.com/lines-detection-with-hough-transform-84020b3b1549"
    }
  ],
  "card": "hough-transform-card.jpg"
}
---
The Hough transform is a technique which can be used to isolate features of a particular shape within an image. Because it requires that the desired features be specified in some parametric form, the classical Hough transform is most commonly used for the detection of regular curves such as lines, circles, ellipses, etc. A generalized Hough transform can be employed in applications where a simple analytic description of a feature(s) is not possible. Due to the computational complexity of the generalized Hough algorithm, we restrict the main focus of this discussion to the classical Hough transform. Despite its domain restrictions, the classical Hough transform (hereafter referred to without the classical prefix) retains many applications, as most manufactured parts (and many anatomical parts investigated in medical imagery) contain feature boundaries which can be described by regular curves. The main advantage of the Hough transform technique is that it is tolerant of gaps in feature boundary descriptions and is relatively unaffected by image noise.  

Source: [Fisher et al., 2004](http://homepages.inf.ed.ac.uk/rbf/HIPR2/hough.htm)  
Image source: [scikit-learn](https://scikit-image.org/docs/0.13.x/auto_examples/edges/plot_line_hough_transform.html)  
