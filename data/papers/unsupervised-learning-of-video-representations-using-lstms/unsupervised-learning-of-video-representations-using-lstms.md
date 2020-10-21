---
{
  "title": "Unsupervised Learning of Video Representations using LSTMs",
  "date": "2015-02-16",
  "authors": [
    "N. Srivastava",
    "Elman Mansimov",
    "R. Salakhutdinov"
  ],
  "abstract": "We use Long Short Term Memory (LSTM) networks to learn representations of video sequences. Our model uses an encoder LSTM to map an input sequence into a fixed length representation. This representation is decoded using single or multiple decoder LSTMs to perform different tasks, such as reconstructing the input sequence, or predicting the future sequence. We experiment with two kinds of input sequences - patches of image pixels and high-level representations (\"percepts\") of video frames extracted using a pretrained convolutional net. We explore different design choices such as whether the decoder LSTMs should condition on the generated output. We analyze the outputs of the model qualitatively to see how well the model can extrapolate the learned video representation into the future and into the past. We further evaluate the representations by finetuning them for a supervised learning problem - human action recognition on the UCF-101 and HMDB-51 datasets. We show that the representations help improve classification accuracy, especially when there are only few training examples. Even models pretrained on unrelated datasets (300 hours of YouTube videos) can help action recognition performance.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://arxiv.org/pdf/1502.04681.pdf"
    },
    {
      "resource": "arXiv.org",
      "icon": "arxiv",
      "url": "https://arxiv.org/abs/1502.04681"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/829510ad6f975c939d589eeb01a3cf6fc6c8ce4d"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "unsupervised-learning-of-video-representations-using-lstms-thumb.jpg",
  "card": "unsupervised-learning-of-video-representations-using-lstms-card.jpg",
  "s2_paper_id": "829510ad6f975c939d589eeb01a3cf6fc6c8ce4d"
}
---

