---
{
  "title": "Novel Unsupervised Feature Filtering of Biological Data",
  "date": "2006-07-10",
  "authors": [
    "Roy Varshavsky",
    "A. Gottlieb",
    "M. Linial",
    "D. Horn"
  ],
  "abstract": "MOTIVATION\nMany methods have been developed for selecting small informative feature subsets in large noisy data. However, unsupervised methods are scarce. Examples are using the variance of data collected for each feature, or the projection of the feature on the first principal component. We propose a novel unsupervised criterion, based on SVD-entropy, selecting a feature according to its contribution to the entropy (CE) calculated on a leave-one-out basis. This can be implemented in four ways: simple ranking according to CE values (SR); forward selection by accumulating features according to which set produces highest entropy (FS1); forward selection by accumulating features through the choice of the best CE out of the remaining ones (FS2); backward elimination (BE) of features with the lowest CE.\n\n\nRESULTS\nWe apply our methods to different benchmarks. In each case we evaluate the success of clustering the data in the selected feature spaces, by measuring Jaccard scores with respect to known classifications. We demonstrate that feature filtering according to CE outperforms the variance method and gene-shaving. There are cases where the analysis, based on a small set of selected features, outperforms the best score reported when all information was used. Our method calls for an optimal size of the relevant feature set. This turns out to be just a few percents of the number of genes in the two Leukemia datasets that we have analyzed. Moreover, the most favored selected genes turn out to have significant GO enrichment in relevant cellular processes.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://pdfs.semanticscholar.org/e4e2/244403ca643c52c41e6bb2afc10bcf7e28c2.pdf"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/f3eb4d00e11eb0f1b5016e4cc9501c3f5a6d53e8"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "novel-unsupervised-feature-filtering-of-biological-data-thumb.jpg",
  "card": "novel-unsupervised-feature-filtering-of-biological-data-card.jpg",
  "s2_paper_id": "f3eb4d00e11eb0f1b5016e4cc9501c3f5a6d53e8"
}
---

