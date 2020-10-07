---
{
  "title": "Unsupervised Singing Voice Conversion",
  "date": "2019-04-13",
  "authors": [
    "Eliya Nachmani",
    "Lior Wolf"
  ],
  "abstract": "We present a deep learning method for singing voice conversion. The proposed network is not conditioned on the text or on the notes, and it directly converts the audio of one singer to the voice of another. Training is performed without any form of supervision: no lyrics or any kind of phonetic features, no notes, and no matching samples between singers. The proposed network employs a single CNN encoder for all singers, a single WaveNet decoder, and a classifier that enforces the latent representation to be singer-agnostic. Each singer is represented by one embedding vector, which the decoder is conditioned on. In order to deal with relatively small datasets, we propose a new data augmentation scheme, as well as new training losses and protocols that are based on backtranslation. Our evaluation presents evidence that the conversion produces natural signing voices that are highly recognizable as the target singer.",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "https://arxiv.org/pdf/1904.06590.pdf"
    },
    {
      "title": "arXiv.org",
      "type": "arxiv",
      "url": "https://arxiv.org/abs/1904.06590"
    },
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/d0eb03edd253fb99230ce4490c38962543a2f4d2"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "unsupervised-singing-voice-conversion-thumb.jpg",
  "card": "unsupervised-singing-voice-conversion-card.jpg",
  "s2_paper_id": "d0eb03edd253fb99230ce4490c38962543a2f4d2"
}
---

