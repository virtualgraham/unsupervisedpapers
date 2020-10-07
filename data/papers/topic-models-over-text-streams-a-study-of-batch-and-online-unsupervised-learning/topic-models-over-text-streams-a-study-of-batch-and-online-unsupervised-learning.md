---
{
  "title": "Topic Models over Text Streams: A Study of Batch and Online Unsupervised Learning",
  "authors": [
    "A. Banerjee",
    "S. Basu"
  ],
  "abstract": "Automated unsupervised learning of topic-based clusters is used in various text data mining applications, e.g., document organization in content management, information retrieval and filtering in news aggregation services. Typically batch models are used for this purpose, which perform clustering on the document collection in aggregate. In this paper, we first analyze three batch topic models that have been recently proposed in the machine learning and data mining community – Latent Dirichlet Allocation (LDA), Dirichlet Compound Multinomial (DCM) mixtures and von-Mises Fisher (vMF) mixture models. Our discussion uses a common framework based on the particular assumptions made regarding the conditional distributions corresponding to each component and the topic priors. Our experiments on large real-world document collections demonstrate that though LDA is a good model for finding word-level topics, vMF finds better document-level topic clusters more efficiently, which is often important in text mining applications. In cases where offline clustering on complete document collections is infeasible due to resource constraints, online unsupervised clustering methods that process incoming data incrementally are necessary. To this end, we propose online variants of vMF, EDCM and LDA. Experiments on real-world streaming text illustrate the speed and performance benefits of online vMF. Finally, we propose a practical heuristic for hybrid topic modeling, which learns online topic models on streaming text data and intermittently runs batch topic models on aggregated documents offline. Such a hybrid model is useful for applications (e.g., dynamic topic-based aggregation of consumer-generated content in social networking sites) that need a good tradeoff between the performance of batch offline algorithms and efficiency of incremental online algorithms.",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "http://www-users.cs.umn.edu/~banerjee/papers/07/sdm-topics-long.pdf"
    },
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/70a8bcf0bd5cdc79c42b20083340de3f4c674aef"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "topic-models-over-text-streams-a-study-of-batch-and-online-unsupervised-learning-thumb.jpg",
  "card": "topic-models-over-text-streams-a-study-of-batch-and-online-unsupervised-learning-card.jpg",
  "s2_paper_id": "70a8bcf0bd5cdc79c42b20083340de3f4c674aef"
}
---

