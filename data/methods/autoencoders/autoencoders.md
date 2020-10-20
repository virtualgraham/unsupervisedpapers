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
      "title": "Wikipedia",
      "type": "wikipedia",
      "url": "https://en.wikipedia.org/wiki/Autoencoder"
    },
    {
      "title": "Papers with Code",
      "type": "paperswithcode",
      "url": "https://paperswithcode.com/method/autoencoder"
    },
    {
      "title": "Towards Data Science",
      "type": "website",
      "url": "https://towardsdatascience.com/auto-encoder-what-is-it-and-what-is-it-used-for-part-1-3e5c6f017726"
    },
    {
      "title": "Stanford UFLDL",
      "type": "website",
      "url": "http://ufldl.stanford.edu/tutorial/unsupervised/Autoencoders/"
    }
  ],
  "card": "autoencoders-card.jpg"
}
---
An **autoencoder** neural network is an unsupervised learning algorithm that applies backpropagation, setting the target values to be equal to the inputs. I.e., it uses $\textstyle y^{(i)} = x^{(i)}$. Suppose we have only a set of unlabeled training examples $\textstyle \{x^{(1)}, x^{(2)}, x^{(3)}, \ldots\}$, where $\textstyle x^{(i)} \in \Re^{n}$  

The autoencoder tries to learn a function $\textstyle h_{W,b}(x) \approx x$. In other words, it is trying to learn an approximation to the identity function, so as to output $\textstyle \hat{x}$ that is similar to $\textstyle x$. The identity function seems a particularly trivial function to be trying to learn; but by placing constraints on the network, such as by limiting the number of hidden units, we can discover interesting structure about the data.  

Source: [UFLDL Tutorial](http://ufldl.stanford.edu/tutorial/unsupervised/Autoencoders/)  
Image source: [Sethi et al., 2018](https://arxiv.org/pdf/1803.07386.pdf)
