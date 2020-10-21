---
{
  "title": "Delete, Retrieve, Generate: A Simple Approach to Sentiment and Style Transfer",
  "date": "2018-04-17",
  "authors": [
    "Juncen Li",
    "Robin Jia",
    "H. He",
    "Percy Liang"
  ],
  "abstract": "We consider the task of text attribute transfer: transforming a sentence to alter a specific attribute (e.g., sentiment) while preserving its attribute-independent content (e.g., changing \"screen is just the right size\" to \"screen is too small\"). Our training data includes only sentences labeled with their attribute (e.g., positive or negative), but not pairs of sentences that differ only in their attributes, so we must learn to disentangle attributes from attribute-independent content in an unsupervised way. Previous work using adversarial methods has struggled to produce high-quality outputs. In this paper, we propose simpler methods motivated by the observation that text attributes are often marked by distinctive phrases (e.g., \"too small\"). Our strongest method extracts content words by deleting phrases associated with the sentence's original attribute value, retrieves new phrases associated with the target attribute, and uses a neural model to fluently combine these into a final output. On human evaluation, our best method generates grammatical and appropriate responses on 22% more inputs than the best previous system, averaged over three attribute transfer datasets: altering sentiment of reviews on Yelp, altering sentiment of reviews on Amazon, and altering image captions to be more romantic or humorous.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://arxiv.org/pdf/1804.06437.pdf"
    },
    {
      "resource": "arXiv.org",
      "icon": "arxiv",
      "url": "https://arxiv.org/abs/1804.06437"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/1975ae6d8693eedfb07d5348798351fe51ab242b"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "delete-retrieve-generate-a-simple-approach-to-sentiment-and-style-transfer-thumb.jpg",
  "card": "delete-retrieve-generate-a-simple-approach-to-sentiment-and-style-transfer-card.jpg",
  "s2_paper_id": "1975ae6d8693eedfb07d5348798351fe51ab242b"
}
---

