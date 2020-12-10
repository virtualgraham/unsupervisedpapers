---
{
  "title": "Space-Time Correspondence as a Contrastive Random Walk",
  "date": "2020-06-25",
  "authors": [
    "Allan A. Jabri",
    "Andrew Owens",
    "Alexei A. Efros"
  ],
  "abstract": "This paper proposes a simple self-supervised approach for learning representations for visual correspondence from raw video. We cast correspondence as link prediction in a space-time graph constructed from a video. In this graph, the nodes are patches sampled from each frame, and nodes adjacent in time can share a directed edge. We learn a node embedding in which pairwise similarity defines transition probabilities of a random walk. Prediction of long-range correspondence is efficiently computed as a walk along this graph. The embedding learns to guide the walk by placing high probability along paths of correspondence. Targets are formed without supervision, by cycle-consistency: we train the embedding to maximize the likelihood of returning to the initial node when walking along a graph constructed from a `palindrome' of frames. We demonstrate that the approach allows for learning representations from large unlabeled video. Despite its simplicity, the method outperforms the self-supervised state-of-the-art on a variety of label propagation tasks involving objects, semantic parts, and pose. Moreover, we show that self-supervised adaptation at test-time and edge dropout improve transfer for object-level correspondence.",
  "links": [
    {
      "title": "",
      "resource": "PDF",
      "description": "",
      "icon": "pdf",
      "url": "https://arxiv.org/pdf/2006.14613.pdf"
    },
    {
      "title": "",
      "resource": "arXiv.org",
      "description": "",
      "icon": "arxiv",
      "url": "https://arxiv.org/abs/2006.14613"
    },
    {
      "title": "",
      "resource": "Semantic Scholar",
      "description": "",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/Space-Time-Correspondence-as-a-Contrastive-Random-Jabri-Owens/c78b00f2abbf7523a860e717f767b0bb8f860143#references"
    },
    {
      "title": " ajabri / videowalk",
      "resource": "GitHub",
      "description": "",
      "icon": "github",
      "url": "https://github.com/ajabri/videowalk"
    },
    {
      "title": "",
      "resource": "Project Website",
      "description": "",
      "icon": "website",
      "url": "https://ajabri.github.io/videowalk/"
    },
    {
      "title": "Space-Time Correspondence as a Contrastive Random Walk [Oral Presentation]",
      "resource": "YouTube",
      "description": "Oral Presentation for NeurIPS 2020",
      "icon": "youtube",
      "url": "https://www.youtube.com/watch?v=UaOcjxrPaho&feature=youtu.be"
    }
  ],
  "supervision": [
    "unsupervised",
    "self-supervised"
  ],
  "tasks": [],
  "methods": [],
  "thumbnail": "space-time-correspondence-as-a-contrastive-random-walk-thumb.jpg",
  "card": "space-time-correspondence-as-a-contrastive-random-walk-card.jpg",
  "s2_paper_id": "c78b00f2abbf7523a860e717f767b0bb8f860143"
}
---

