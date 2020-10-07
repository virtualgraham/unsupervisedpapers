---
{
  "title": "Jointly Learning Sentence Embeddings and Syntax with Unsupervised Tree-LSTMs",
  "date": "2017-05-25",
  "authors": [
    "Jean Maillard",
    "Stephen Clark",
    "Dani Yogatama"
  ],
  "abstract": "We introduce a neural network that represents sentences by composing their words according to induced binary parse trees. We use Tree-LSTM as our composition function, applied along a tree structure found by a fully differentiable natural language chart parser. Our model simultaneously optimises both the composition function and the parser, thus eliminating the need for externally-provided parse trees which are normally required for Tree-LSTM. It can therefore be seen as a tree-based RNN that is unsupervised with respect to the parse trees. As it is fully differentiable, our model is easily trained with an off-the-shelf gradient descent method and backpropagation. We demonstrate that it achieves better performance compared to various supervised Tree-LSTM architectures on a textual entailment task and a reverse dictionary task. Finally, we show how performance can be improved with an attention mechanism which fully exploits the parse chart, by attending over all possible subspans of the sentence.",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "https://arxiv.org/pdf/1705.09189.pdf"
    },
    {
      "title": "arXiv.org",
      "type": "arxiv",
      "url": "https://arxiv.org/abs/1705.09189"
    },
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/3096b9e5b17dedbee9554fbd1d6e20f7a095e48a"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "jointly-learning-sentence-embeddings-and-syntax-with-unsupervised-tree-lstms-thumb.jpg",
  "card": "jointly-learning-sentence-embeddings-and-syntax-with-unsupervised-tree-lstms-card.jpg",
  "s2_paper_id": "3096b9e5b17dedbee9554fbd1d6e20f7a095e48a"
}
---

