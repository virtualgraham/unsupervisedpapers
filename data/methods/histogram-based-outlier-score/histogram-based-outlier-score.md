---
{
  "area": "anomaly-detection",
  "title": "Histogram-based Outlier Score",
  "year": null,
  "categories": [
    "outlier-detection"
  ],
  "components": [],
  "introduced_by": null,
  "links": [
    {
      "title": "Histogram-based Outlier Score (HBOS): A fast Unsupervised Anomaly Detection Algorithm",
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/Histogram-based-Outlier-Score-(HBOS)%3A-A-fast-Goldstein-Dengel/405bde43709582b0026c0fd6f0afe2c3c57f792e"
    },
    {
      "title": " Kanatoko / HBOS-python",
      "resource": "GitHub",
      "icon": "github",
      "url": "https://github.com/Kanatoko/HBOS-python"
    }
  ],
  "thumbnail": null,
  "card": null,
  "also_known_as": [
    "HBOS"
  ]
}
---
**Histogram-based outlier score** models univariate feature densities using histograms with a fixed or a dynamic bin width. Afterwards, all histograms are used to compute an anomaly score for each data instance. Compared to other algorithms, HBOS works in linear time $O(n)$ in case of fixed bin width or in $O(n·log(n))$ using dynamic bin widths.  

Source: [Goldstein et al., 2012](https://www.goldiges.de/publications/HBOS-KI-2012.pdf)  
