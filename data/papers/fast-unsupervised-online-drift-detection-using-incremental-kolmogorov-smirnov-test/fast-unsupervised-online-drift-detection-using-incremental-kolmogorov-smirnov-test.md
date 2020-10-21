---
{
  "title": "Fast Unsupervised Online Drift Detection Using Incremental Kolmogorov-Smirnov Test",
  "date": "2016-08-13",
  "authors": [
    "D. Reis",
    "P. Flach",
    "S. Matwin",
    "Gustavo E. A. P. A. Batista"
  ],
  "abstract": "Data stream research has grown rapidly over the last decade. Two major features distinguish data stream from batch learning: stream data are generated on the fly, possibly in a fast and variable rate; and the underlying data distribution can be non-stationary, leading to a phenomenon known as concept drift. Therefore, most of the research on data stream classification focuses on proposing efficient models that can adapt to concept drifts and maintain a stable performance over time. However, specifically for the classification task, the majority of such methods rely on the instantaneous availability of true labels for all already classified instances. This is a strong assumption that is rarely fulfilled in practical applications. Hence there is a clear need for efficient methods that can detect concept drifts in an unsupervised way. One possibility is the well-known Kolmogorov-Smirnov test, a statistical hypothesis test that checks whether two samples differ. This work has two main contributions. The first one is the Incremental Kolmogorov-Smirnov algorithm that allows performing the Kolmogorov-Smirnov hypothesis test instantly using two samples that change over time, where the change is an insertion and/or removal of an observation. Our algorithm employs a randomized tree and is able to perform the insertion and removal operations in O(log N) with high probability and calculate the Kolmogorov-Smirnov test in O(1), where N is the number of sample observations. This is a significant speed-up compared to the O(N log N) cost of the non-incremental implementation. The second contribution is the use of the Incremental Kolmogorov-Smirnov test to detect concept drifts without true labels. Classification algorithms adapted to use the test rely on a limited portion of those labels just to update the classification model after a concept drift is detected.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "http://dl.acm.org/citation.cfm?id=2939836"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/be6fcf6647488822ceae57ccd3b5c6b06f5f3fe4"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "fast-unsupervised-online-drift-detection-using-incremental-kolmogorov-smirnov-test-thumb.jpg",
  "card": "fast-unsupervised-online-drift-detection-using-incremental-kolmogorov-smirnov-test-card.jpg",
  "s2_paper_id": "be6fcf6647488822ceae57ccd3b5c6b06f5f3fe4"
}
---

