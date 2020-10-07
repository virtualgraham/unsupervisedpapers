---
{
  "title": "Unsupervised Event Coreference Resolution",
  "date": "2014-06-01",
  "authors": [
    "C. Bejan",
    "Sanda M. Harabagiu"
  ],
  "abstract": "The task of event coreference resolution plays a critical role in many natural language processing applications such as information extraction, question answering, and topic detection and tracking. In this article, we describe a new class of unsupervised, nonparametric Bayesian models with the purpose of probabilistically inferring coreference clusters of event mentions from a collection of unlabeled documents. In order to infer these clusters, we automatically extract various lexical, syntactic, and semantic features for each event mention from the document collection. Extracting a rich set of features for each event mention allows us to cast event coreference resolution as the task of grouping together the mentions that share the same features (they have the same participating entities, share the same location, happen at the same time, etc.).Some of the most important challenges posed by the resolution of event coreference in an unsupervised way stem from (a) the choice of representing event mentions through a rich set of features and (b) the ability of modeling events described both within the same document and across multiple documents. Our first unsupervised model that addresses these challenges is a generalization of the hierarchical Dirichlet process. This new extension presents the hierarchical Dirichlet process's ability to capture the uncertainty regarding the number of clustering components and, additionally, takes into account any finite number of features associated with each event mention. Furthermore, to overcome some of the limitations of this extension, we devised a new hybrid model, which combines an infinite latent class model with a discrete time series model. The main advantage of this hybrid model stands in its capability to automatically infer the number of features associated with each event mention from data and, at the same time, to perform an automatic selection of the most informative features for the task of event coreference. The evaluation performed for solving both within- and cross-document event coreference shows significant improvements of these models when compared against two baselines for this task.",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "https://doi.org/10.1162/COLI_a_00174"
    },
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/f1a02d840f732f85942de4892c79ccc80d5123a5"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "unsupervised-event-coreference-resolution-thumb.jpg",
  "card": "unsupervised-event-coreference-resolution-card.jpg",
  "s2_paper_id": "f1a02d840f732f85942de4892c79ccc80d5123a5"
}
---

