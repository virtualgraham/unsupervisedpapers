---
{
  "title": "On the reliable detection of concept drift from streaming unlabeled data",
  "date": "2017-03-31",
  "authors": [
    "Tegjyot Singh Sethi",
    "M. Kantardzic"
  ],
  "abstract": "New classifier-independent, dynamic, unsupervised approach for detecting concept drift.Reduced number of false alarms and increased relevance of drift detection.Results comparable to supervised approaches, which require fully labeled streams.Our approach generalizes the notion of margin density, as a signal to detect drifts.Experiments on cybersecurity datasets, show efficacy for detecting adversarial drifts. Classifiers deployed in the real world operate in a dynamic environment, where the data distribution can change over time. These changes, referred to as concept drift, can cause the predictive performance of the classifier to drop over time, thereby making it obsolete. To be of any real use, these classifiers need to detect drifts and be able to adapt to them, over time. Detecting drifts has traditionally been approached as a supervised task, with labeled data constantly being used for validating the learned model. Although effective in detecting drifts, these techniques are impractical, as labeling is a difficult, costly and time consuming activity. On the other hand, unsupervised change detection techniques are unreliable, as they produce a large number of false alarms. The inefficacy of the unsupervised techniques stems from the exclusion of the characteristics of the learned classifier, from the detection process. In this paper, we propose the Margin Density Drift Detection (MD3) algorithm, which tracks the number of samples in the uncertainty region of a classifier, as a metric to detect drift. The MD3 algorithm is a distribution independent, application independent, model independent, unsupervised and incremental algorithm for reliably detecting drifts from data streams. Experimental evaluation on 6 drift induced datasets and 4 additional datasets from the cybersecurity domain demonstrates that the MD3 approach can reliably detect drifts, with significantly fewer false alarms compared to unsupervised feature based drift detectors. At the same time, it produces performance comparable to that of a fully labeled drift detector. The reduced false alarms enables the signaling of drifts only when they are most likely to affect classification performance. As such, the MD3 approach leads to a detection scheme which is credible, label efficient and general in its applicability.",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "https://arxiv.org/pdf/1704.00023.pdf"
    },
    {
      "title": "arXiv.org",
      "type": "arxiv",
      "url": "https://arxiv.org/abs/1704.00023"
    },
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/9e12ba57e62c6e2bdd8fea3405237a1ded44f5f6"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "on-the-reliable-detection-of-concept-drift-from-streaming-unlabeled-data-thumb.jpg",
  "card": "on-the-reliable-detection-of-concept-drift-from-streaming-unlabeled-data-card.jpg",
  "s2_paper_id": "9e12ba57e62c6e2bdd8fea3405237a1ded44f5f6"
}
---

