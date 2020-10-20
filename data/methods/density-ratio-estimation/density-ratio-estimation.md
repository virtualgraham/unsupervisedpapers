---
{
  "area": "general",
  "title": "Density Ratio Estimation",
  "year": null,
  "categories": [
    "density-estimation"
  ],
  "components": [],
  "introduced_by": null,
  "links": [
    {
      "title": "Tokyo Institute of Technology",
      "type": "pdf",
      "url": "http://yosinski.com/mlss12/media/slides/MLSS-2012-Sugiyama-Density-Ratio-Estimation-in-Machine-Learning.pdf"
    }
  ],
  "thumbnail": null,
  "card": null,
  "also_known_as": []
}
---
Unsupervised learning via density-ratio estimation is a powerful paradigm in machine learning that continues to be a source of major progress in the field. It consists of estimating the ratio p/q from their samples without separately estimating the numerator and denominator. A common way to achieve this is to train a neural network classifier to distinguish between the two sets of samples, since for many loss functions the ratio p/q can be extracted from the optimal classifier.This discriminative approach has been leveraged in diverse areas such as covariate shift adaptation, energy-based modeling, generative adversarial networks, bias correction for generative models, likelihood-free inference, mutual-information estimation, representation learning, Bayesian experimental design and off-policy reward estimation in reinforcement learning. Across this diverse set of applications, density-ratio based methods have consistently yielded state-of-the-art results.

Source: [Rhodes et al., 2020](https://arxiv.org/pdf/2006.12204.pdf)
