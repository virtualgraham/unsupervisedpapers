---
{
  "title": "Almost Unsupervised Text to Speech and Automatic Speech Recognition",
  "date": "2019-05-13",
  "authors": [
    "Yi Ren",
    "X. Tan",
    "T. Qin",
    "Sheng Zhao",
    "Zhou Zhao",
    "T. Liu"
  ],
  "abstract": "Text to speech (TTS) and automatic speech recognition (ASR) are two dual tasks in speech processing and both achieve impressive performance thanks to the recent advance in deep learning and large amount of aligned speech and text data. However, the lack of aligned data poses a major practical problem for TTS and ASR on low-resource languages. In this paper, by leveraging the dual nature of the two tasks, we propose an almost unsupervised learning method that only leverages few hundreds of paired data and extra unpaired data for TTS and ASR. Our method consists of the following components: (1) a denoising auto-encoder, which reconstructs speech and text sequences respectively to develop the capability of language modeling both in speech and text domain; (2) dual transformation, where the TTS model transforms the text $y$ into speech $\\hat{x}$, and the ASR model leverages the transformed pair $(\\hat{x},y)$ for training, and vice versa, to boost the accuracy of the two tasks; (3) bidirectional sequence modeling, which addresses error propagation especially in the long speech and text sequence when training with few paired data; (4) a unified model structure, which combines all the above components for TTS and ASR based on Transformer model. Our method achieves 99.84% in terms of word level intelligible rate and 2.68 MOS for TTS, and 11.7% PER for ASR on LJSpeech dataset, by leveraging only 200 paired speech and text data (about 20 minutes audio), together with extra unpaired speech and text data.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://arxiv.org/pdf/1905.06791.pdf"
    },
    {
      "resource": "arXiv.org",
      "icon": "arxiv",
      "url": "https://arxiv.org/abs/1905.06791"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/a65aaa6bfa182baf06fe2504f0b7098b9ed95618"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "almost-unsupervised-text-to-speech-and-automatic-speech-recognition-thumb.jpg",
  "card": "almost-unsupervised-text-to-speech-and-automatic-speech-recognition-card.jpg",
  "s2_paper_id": "a65aaa6bfa182baf06fe2504f0b7098b9ed95618"
}
---

