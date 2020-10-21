---
{
  "area": "general",
  "title": "Generative Adversarial Network",
  "year": null,
  "categories": [
    "generative-models"
  ],
  "components": [],
  "introduced_by": null,
  "links": [
    {
      "resource": "Wikipedia",
      "icon": "wikipedia",
      "url": "https://en.wikipedia.org/wiki/Generative_adversarial_network"
    },
    {
      "resource": "Machine Learning Mastery",
      "icon": "website",
      "url": "https://machinelearningmastery.com/what-are-generative-adversarial-networks-gans/"
    },
    {
      "resource": "Towards Data Science",
      "icon": "website",
      "url": "https://towardsdatascience.com/understanding-generative-adversarial-networks-gans-cd6e4651a29"
    }
  ],
  "thumbnail": "generative-adversarial-network-thumb.jpg",
  "card": "generative-adversarial-network-card.jpg",
  "also_known_as": [
    "GAN"
  ]
}
---
Generative Adversarial Networks, or GANs for short, are an approach to generative modeling using deep learning methods, such as convolutional neural networks.  

GANs are a clever way of training a generative model by framing the problem as a supervised learning problem with two sub-models: the generator model that we train to generate new examples, and the discriminator model that tries to classify examples as either real (from the domain) or fake (generated). The two models are trained together in a zero-sum game, adversarial, until the discriminator model is fooled about half the time, meaning the generator model is generating plausible examples.  

Source: [Machine Learning Mastery](https://machinelearningmastery.com/what-are-generative-adversarial-networks-gans/)  
Image source: [Schlegl et al., 2017](https://arxiv.org/pdf/1703.05921.pdf)  
