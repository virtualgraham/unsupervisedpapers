---
{
  "title": "Ordered Neurons: Integrating Tree Structures into Recurrent Neural Networks",
  "date": "2018-10-22",
  "authors": [
    "Y. Shen",
    "Shawn Tan",
    "Alessandro Sordoni",
    "A. Courville"
  ],
  "abstract": "Natural language is hierarchically structured: smaller units (e.g., phrases) are nested within larger units (e.g., clauses). When a larger constituent ends, all of the smaller constituents that are nested within it must also be closed. While the standard LSTM architecture allows different neurons to track information at different time scales, it does not have an explicit bias towards modeling a hierarchy of constituents. This paper proposes to add such an inductive bias by ordering the neurons; a vector of master input and forget gates ensures that when a given neuron is updated, all the neurons that follow it in the ordering are also updated. Our novel recurrent architecture, ordered neurons LSTM (ON-LSTM), achieves good performance on four different tasks: language modeling, unsupervised parsing, targeted syntactic evaluation, and logical inference.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://arxiv.org/pdf/1810.09536.pdf"
    },
    {
      "resource": "arXiv.org",
      "icon": "arxiv",
      "url": "https://arxiv.org/abs/1810.09536"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/15d6f3d815d0ff176fafb14a3f46e5723ebac723"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "ordered-neurons-integrating-tree-structures-into-recurrent-neural-networks-thumb.jpg",
  "card": "ordered-neurons-integrating-tree-structures-into-recurrent-neural-networks-card.jpg",
  "s2_paper_id": "15d6f3d815d0ff176fafb14a3f46e5723ebac723"
}
---

