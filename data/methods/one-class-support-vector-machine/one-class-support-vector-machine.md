---
{
  "area": "general",
  "title": "One Class Support Vector Machine",
  "year": null,
  "categories": [
    "outlier-detection"
  ],
  "components": [],
  "introduced_by": null,
  "links": [
    {
      "title": "Introduction to One-class Support Vector Machines",
      "resource": "Roemer’s blog",
      "description": "",
      "icon": "website",
      "url": "http://rvlasveld.github.io/blog/2013/07/12/introduction-to-one-class-support-vector-machines/"
    },
    {
      "title": "Outlier Detection with One-Class SVMs",
      "resource": "Towards Data Science",
      "description": "",
      "icon": "website",
      "url": "https://towardsdatascience.com/outlier-detection-with-one-class-svms-5403a1a1878c"
    },
    {
      "title": "One-class SVM with non-linear kernel",
      "resource": "scikit-learn",
      "description": "",
      "icon": "website",
      "url": "https://scikit-learn.org/stable/auto_examples/svm/plot_oneclass.html"
    }
  ],
  "thumbnail": "one-class-support-vector-machine-thumb.jpg",
  "card": "one-class-support-vector-machine-card.jpg"
}
---
One-Class Support Vector Machines (OC-SVMs) are a natural extension of Support  Vector  Machines  (SVMs).  In order to identify suspicious observations, an OC-SVM estimates a distribution that encompasses most of the observations, and then labels as “suspicious” those that lie far from it with respect to a suitable metric.  An OC-SVM solution is built estimating a probability distribution function which makes most of the observed data more likely than the rest, and a decision rule that separates these observation by the largest possible margin.  The computational complexity of the learning phase is intensive because the training of an OC-SVM involves a quadratic programming problem, but once the decision function is determined, it can be used to predict the class label of new test data effortlessly.

Source: [Classification and Verification of Handwritten Signatures with Time Causal Information Theory Quantifiers](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0166868) [[Supporting Information file that contains additional material about Support Vector Machines and One-Class Support Vector Machines.](https://doi.org/10.1371/journal.pone.0166868.s002)]  
Image source: [Semisupervised One-Class Support Vector Machines for Classification of Remote Sensing Data](https://www.semanticscholar.org/paper/Semisupervised-One-Class-Support-Vector-Machines-of-Mu%C3%B1oz-Mar%C3%AD-Bovolo/8c7e9d9bc9009fd5ca7028af6e37f3851af1ad6b) [[PDF](rslab.disi.unitn.it/papers/R86-TGRS-Jordi.pdf)]  
