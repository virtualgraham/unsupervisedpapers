---
{
  "title": "Memory Aware Synapses: Learning what (not) to forget",
  "date": "2017-11-27",
  "authors": [
    "Rahaf Aljundi",
    "F. Babiloni",
    "Mohamed Elhoseiny",
    "M. Rohrbach",
    "T. Tuytelaars"
  ],
  "abstract": "Humans can learn in a continuous manner. Old rarely utilized knowledge can be overwritten by new incoming information while important, frequently used knowledge is prevented from being erased. In artificial learning systems, lifelong learning so far has focused mainly on accumulating knowledge over tasks and overcoming catastrophic forgetting. In this paper, we argue that, given the limited model capacity and the unlimited new information to be learned, knowledge has to be preserved or erased selectively. Inspired by neuroplasticity, we propose an online method to compute the importance of the parameters of a neural network, based on the data that the network is actively applied to, in an unsupervised manner. After learning a task, whenever a sample is fed to the network, we accumulate an importance measure for each parameter of the network, based on how sensitive the predicted output is to a change in this parameter. When learning a new task, changes to important parameters are penalized. We show that a local version of our method is a direct application of Hebb's rule in identifying the important connections between neurons. We test our method on a sequence of object recognition tasks and on the challenging problem of learning an embedding in a continuous manner. We show state of the art performance and the ability to adapt the importance of the parameters towards what the network needs (not) to forget, which may be different for different test conditions.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://arxiv.org/pdf/1711.09601.pdf"
    },
    {
      "resource": "arXiv.org",
      "icon": "arxiv",
      "url": "https://arxiv.org/abs/1711.09601"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/713b0d9005944f80af00addc81b162ca74ea4b14"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "memory-aware-synapses-learning-what-not-to-forget-thumb.jpg",
  "card": "memory-aware-synapses-learning-what-not-to-forget-card.jpg",
  "s2_paper_id": "713b0d9005944f80af00addc81b162ca74ea4b14"
}
---

