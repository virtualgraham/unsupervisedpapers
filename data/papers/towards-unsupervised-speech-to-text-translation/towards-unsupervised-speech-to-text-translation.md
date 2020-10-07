---
{
  "title": "Towards Unsupervised Speech-to-text Translation",
  "date": "2018-11-04",
  "authors": [
    "Yu-An Chung",
    "Wei-Hung Weng",
    "S. Tong",
    "James R. Glass"
  ],
  "abstract": "We present a framework for building speech-to-text translation (ST) systems using only monolingual speech and text corpora, in other words, speech utterances from a source language and independent text from a target language. As opposed to traditional cascaded systems and end-to-end architectures, our system does not require any labeled data (i.e., transcribed source audio or parallel source and target text corpora) during training, making it especially applicable to language pairs with very few or even zero bilingual resources. The framework initializes the ST system with a cross-modal bilingual dictionary inferred from the monolingual corpora, that maps every source speech segment corresponding to a spoken word to its target text translation. For unseen source speech utterances, the system first performs word-by-word translation on each speech segment in the utterance. The translation is improved by leveraging a language model and a sequence denoising autoencoder to provide prior knowledge about the target language. Experimental results show that our unsupervised system achieves comparable BLEU scores to supervised end-to-end models despite the lack of supervision. We also provide an ablation analysis to examine the utility of each component in our system.",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "https://arxiv.org/pdf/1811.01307.pdf"
    },
    {
      "title": "arXiv.org",
      "type": "arxiv",
      "url": "https://arxiv.org/abs/1811.01307"
    },
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/0012f93019012276fc1dfc7e5b043c0bf7428beb"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "towards-unsupervised-speech-to-text-translation-thumb.jpg",
  "card": "towards-unsupervised-speech-to-text-translation-card.jpg",
  "s2_paper_id": "0012f93019012276fc1dfc7e5b043c0bf7428beb"
}
---

