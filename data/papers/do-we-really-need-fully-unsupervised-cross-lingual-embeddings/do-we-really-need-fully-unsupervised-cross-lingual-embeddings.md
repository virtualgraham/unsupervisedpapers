---
{
  "title": "Do We Really Need Fully Unsupervised Cross-Lingual Embeddings?",
  "date": "2019-09-04",
  "authors": [
    "Ivan Vulic",
    "Goran Glavas",
    "Roi Reichart",
    "A. Korhonen"
  ],
  "abstract": "Recent efforts in cross-lingual word embedding (CLWE) learning have predominantly focused on fully unsupervised approaches that project monolingual embeddings into a shared cross-lingual space without any cross-lingual signal. The lack of any supervision makes such approaches conceptually attractive. Yet, their only core difference from (weakly) supervised projection-based CLWE methods is in the way they obtain a seed dictionary used to initialize an iterative self-learning procedure. The fully unsupervised methods have arguably become more robust, and their primary use case is CLWE induction for pairs of resource-poor and distant languages. In this paper, we question the ability of even the most robust unsupervised CLWE approaches to induce meaningful CLWEs in these more challenging settings. A series of bilingual lexicon induction (BLI) experiments with 15 diverse languages (210 language pairs) show that fully unsupervised CLWE methods still fail for a large number of language pairs (e.g., they yield zero BLI performance for 87/210 pairs). Even when they succeed, they never surpass the performance of weakly supervised methods (seeded with 500-1,000 translation pairs) using the same self-learning procedure in any BLI setup, and the gaps are often substantial. These findings call for revisiting the main motivations behind fully unsupervised CLWE methods.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://arxiv.org/pdf/1909.01638.pdf"
    },
    {
      "resource": "arXiv.org",
      "icon": "arxiv",
      "url": "https://arxiv.org/abs/1909.01638"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/f19e9cf20d96135b2cb67a36a13c80e280669656"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "do-we-really-need-fully-unsupervised-cross-lingual-embeddings-thumb.jpg",
  "card": "do-we-really-need-fully-unsupervised-cross-lingual-embeddings-card.jpg",
  "s2_paper_id": "f19e9cf20d96135b2cb67a36a13c80e280669656"
}
---

