---
{
  "title": "From a Set of Shapes to Object Discovery",
  "date": 2010-09-05,
  "authors": ["Nadia Payet", "Sinisa Todorovic"],
  "abstract": "This paper presents an approach to object discovery in a given unlabeled image set, based on mining repetitive spatial configurations of image contours. Contours that similarly deform from one image to another are viewed as collaborating, or, otherwise, conflicting. This is captured by a graph over all pairs of matching contours, whose maximum a posteriori multicoloring assignment is taken to represent the shapes of discovered objects. Multicoloring is conducted by our new Coordinate Ascent Swendsen-Wang cut (CASW). CASW uses the Metropolis-Hastings (MH) reversible jumps to probabilistically sample graph edges, and color nodes. CASW extends SW cut by introducing a regularization in the posterior of multicoloring assignments that prevents the MH jumps to arrive at trivial solutions. Also, CASW seeks to learn parameters of the posterior via maximizing a lower bound of the MH acceptance rate. This speeds up multicoloring iterations, and facilitates MH jumps from local minima. On benchmark datasets, we outperform all existing approaches to unsupervised object discovery.",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.174.2250&rep=rep1&type=pdf"
    },
    {
      "title": "Springer Link",
      "type": "website",
      "url": "https://link.springer.com/chapter/10.1007/978-3-642-15555-0_5"
    },
    {
      "title": "Google Scholar",
      "type": "googlescholar",
      "url": "https://scholar.google.com/scholar?cluster=3026167580734529503"
    }
  ],
  "supervision": ["unsupervised"],
  "tasks": ["object-discovery", "semantic-segmentation"],
  "methods": ["minimum-cover-curve-detection", "dynamic-time-warping", "spacial-relationship-graph"],
  "thumbnail": "from-a-set-of-shapes-to-object-discovery.jpg"
}
---
