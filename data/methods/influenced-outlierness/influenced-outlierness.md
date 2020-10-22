---
{
  "area": "anomaly-detection",
  "title": "Influenced Outlierness",
  "year": null,
  "categories": [
    "outlier-detection"
  ],
  "components": [],
  "introduced_by": null,
  "links": [
    {
      "title": "Ranking Outliers Using Symmetric Neighborhood Relationship",
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/Ranking-Outliers-Using-Symmetric-Neighborhood-Jin-Tung/6a2b5f45130337fe44b86bd611371ab0bb40f4bb"
    }
  ],
  "thumbnail": "influenced-outlierness-thumb.jpg",
  "card": "influenced-outlierness-card.jpg",
  "also_known_as": [
    "INFLO"
  ]
}
---
INFLO computes the influenced outlierness score for observations, being the comparison of density in neighborhood of observation subject to outlier scoring and density in the reverse neighborhood. A kd-tree is used for kNN computation, using the kNN() function from the 'dbscan' package. The INFLO function is useful for outlier detection in clustering and other multidimensional domains

Source: [jhmadsen / DDoutlier](https://github.com/jhmadsen/DDoutlier/blob/master/man/INFLO.Rd)  
Image source: [Ranking Outliers Using Symmetric Neighborhood Relationship](https://www.semanticscholar.org/paper/Ranking-Outliers-Using-Symmetric-Neighborhood-Jin-Tung/6a2b5f45130337fe44b86bd611371ab0bb40f4bb) [[PDF](https://www.comp.nus.edu.sg/~atung/publication/pakdd06_outlier.pdf)]  
