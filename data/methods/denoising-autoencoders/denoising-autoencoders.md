---
{
  "area": "general",
  "title": "Denoising Autoencoders",
  "year": null,
  "categories": [
    "autoencoders"
  ],
  "components": [],
  "introduced_by": null,
  "links": [
    {
      "title": "Towards Data Science",
      "type": "website",
      "url": "https://towardsdatascience.com/denoising-autoencoders-explained-dbb82467fc2"
    },
    {
      "title": "PyImageSearch",
      "type": "website",
      "url": "https://www.pyimagesearch.com/2020/02/24/denoising-autoencoders-with-keras-tensorflow-and-deep-learning/"
    }
  ],
  "thumbnail": "denoising-autoencoders-thumb.jpg",
  "card": "denoising-autoencoders-card.jpg"
}
---
Denoising autoencoders are a stochastic version of standard autoencoders that reduces the risk of learning the identity function. Autoencoders are a class of neural networks used for feature selection and extraction, also called dimensionality reduction. In general, the more hidden layers in an autoencoder, the more refined this dimensional reduction can be. However, if an autoencoder has more hidden layers than inputs there is a risk the algorithm only learns the identity function during training, the point where the output simply equals the input, and then becomes useless.  

Denoising autoencoders attempt to get around this risk of identity-function affiliation by introducing noise, i.e. randomly corrupting input so that the autoencoder must then “denoise” or reconstruct the original input.  

Source: [DeepAI](https://deepai.org/machine-learning-glossary-and-terms/denoising-autoencoder)  
Image source: [Towards Data Science](https://towardsdatascience.com/reconstruct-corrupted-data-using-denoising-autoencoder-python-code-aeaff4b0958e)
