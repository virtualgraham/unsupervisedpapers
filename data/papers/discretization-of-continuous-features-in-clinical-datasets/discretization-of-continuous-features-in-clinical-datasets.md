---
{
  "title": "Discretization of continuous features in clinical datasets",
  "date": "2013-05-01",
  "authors": [
    "D. Maslove",
    "T. Podchiyska",
    "H. J. Lowe"
  ],
  "abstract": "BACKGROUND\nThe increasing availability of clinical data from electronic medical records (EMRs) has created opportunities for secondary uses of health information. When used in machine learning classification, many data features must first be transformed by discretization.\n\n\nOBJECTIVE\nTo evaluate six discretization strategies, both supervised and unsupervised, using EMR data.\n\n\nMATERIALS AND METHODS\nWe classified laboratory data (arterial blood gas (ABG) measurements) and physiologic data (cardiac output (CO) measurements) derived from adult patients in the intensive care unit using decision trees and naïve Bayes classifiers. Continuous features were partitioned using two supervised, and four unsupervised discretization strategies. The resulting classification accuracy was compared with that obtained with the original, continuous data.\n\n\nRESULTS\nSupervised methods were more accurate and consistent than unsupervised, but tended to produce larger decision trees. Among the unsupervised methods, equal frequency and k-means performed well overall, while equal width was significantly less accurate.\n\n\nDISCUSSION\nThis is, we believe, the first dedicated evaluation of discretization strategies using EMR data. It is unlikely that any one discretization method applies universally to EMR data. Performance was influenced by the choice of class labels and, in the case of unsupervised methods, the number of intervals. In selecting the number of intervals there is generally a trade-off between greater accuracy and greater consistency.\n\n\nCONCLUSIONS\nIn general, supervised methods yield higher accuracy, but are constrained to a single specific application. Unsupervised methods do not require class labels and can produce discretized data that can be used for multiple purposes.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://www.ncbi.nlm.nih.gov/pubmed/23059731"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/0fe3af7ede3ae553b5e35856e5f169ef4a4b1498"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "discretization-of-continuous-features-in-clinical-datasets-thumb.jpg",
  "card": "discretization-of-continuous-features-in-clinical-datasets-card.jpg",
  "s2_paper_id": "0fe3af7ede3ae553b5e35856e5f169ef4a4b1498"
}
---

