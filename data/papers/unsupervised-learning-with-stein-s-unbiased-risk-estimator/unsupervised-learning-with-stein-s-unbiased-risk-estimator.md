---
{
  "title": "Unsupervised Learning with Stein's Unbiased Risk Estimator",
  "date": "2018-05-26",
  "authors": [
    "Christopher A. Metzler",
    "A. Mousavi",
    "Reinhard Heckel",
    "Richard Baraniuk"
  ],
  "abstract": "Learning from unlabeled and noisy data is one of the grand challenges of machine learning. As such, it has seen a flurry of research with new ideas proposed continuously. In this work, we revisit a classical idea: Stein's Unbiased Risk Estimator (SURE). We show that, in the context of image recovery, SURE and its generalizations can be used to train convolutional neural networks (CNNs) for a range of image denoising and recovery problems without any ground truth data. \nSpecifically, our goal is to reconstruct an image $x$ from a noisy linear transformation (measurement) of the image. We consider two scenarios: one where no additional data is available and one where we have measurements of other images that are drawn from the same noisy distribution as $x$, but have no access to the clean images. Such is the case, for instance, in the context of medical imaging, microscopy, and astronomy, where noise-less ground truth data is rarely available. \nWe show that in this situation, SURE can be used to estimate the mean-squared-error loss associated with an estimate of $x$. Using this estimate of the loss, we train networks to perform denoising and compressed sensing recovery. In addition, we also use the SURE framework to partially explain and improve upon an intriguing results presented by Ulyanov et al. in \"Deep Image Prior\": that a network initialized with random weights and fit to a single noisy image can effectively denoise that image. \nPublic implementations of the networks and methods described in this paper can be found at this https URL.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://arxiv.org/pdf/1805.10531.pdf"
    },
    {
      "resource": "arXiv.org",
      "icon": "arxiv",
      "url": "https://arxiv.org/abs/1805.10531"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/f48376d7d58e784e9d459bda361d221a2b383641"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "unsupervised-learning-with-stein-s-unbiased-risk-estimator-thumb.jpg",
  "card": "unsupervised-learning-with-stein-s-unbiased-risk-estimator-card.jpg",
  "s2_paper_id": "f48376d7d58e784e9d459bda361d221a2b383641"
}
---

