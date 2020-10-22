---
{
  "area": "computer-vision",
  "title": "Autoencoders",
  "year": null,
  "categories": [
    "autoencoders"
  ],
  "components": [],
  "thumbnail": "autoencoders-thumb.jpg",
  "introduced_by": null,
  "links": [
    {
      "title": "Autoencoder",
      "resource": "Wikipedia",
      "icon": "wikipedia",
      "url": "https://en.wikipedia.org/wiki/Autoencoder"
    },
    {
      "title": "Autoencoder",
      "resource": "Papers with Code",
      "icon": "paperswithcode",
      "url": "https://paperswithcode.com/method/autoencoder"
    },
    {
      "title": "Auto-Encoder: What Is It? And What Is It Used For?",
      "resource": "Towards Data Science",
      "icon": "website",
      "url": "https://towardsdatascience.com/auto-encoder-what-is-it-and-what-is-it-used-for-part-1-3e5c6f017726"
    },
    {
      "title": "Autoencoders Tutorial",
      "resource": "Stanford UFLDL",
      "icon": "website",
      "url": "http://ufldl.stanford.edu/tutorial/unsupervised/Autoencoders/"
    }
  ],
  "card": "autoencoders-card.jpg"
}
---
An **autoencoder** neural network is an unsupervised learning algorithm that applies backpropagation, setting the target values to be equal to the inputs. I.e., it uses $\textstyle y^{(i)} = x^{(i)}$. Suppose we have only a set of unlabeled training examples $\textstyle \{x^{(1)}, x^{(2)}, x^{(3)}, \ldots\}$, where $\textstyle x^{(i)} \in \Re^{n}$  

The autoencoder tries to learn a function $\textstyle h_{W,b}(x) \approx x$. In other words, it is trying to learn an approximation to the identity function, so as to output $\textstyle \hat{x}$ that is similar to $\textstyle x$. The identity function seems a particularly trivial function to be trying to learn; but by placing constraints on the network, such as by limiting the number of hidden units, we can discover interesting structure about the data.  

Source: [UFLDL Tutorial](http://ufldl.stanford.edu/tutorial/unsupervised/Autoencoders/)  
Image source: [Residual Codean Autoencoder for Facial Attribute Analysis](https://www.semanticscholar.org/paper/Residual-Codean-Autoencoder-for-Facial-Attribute-Sethi-Singh/0f62e96e7f5ff992dd56d5e80628777ec3a9a347) [[PDF](https://arxiv.org/pdf/1803.07386.pdf)]  
