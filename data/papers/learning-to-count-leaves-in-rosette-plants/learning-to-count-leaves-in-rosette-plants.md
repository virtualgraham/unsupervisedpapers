---
{
  "title": "Learning to Count Leaves in Rosette Plants",
  "date": "2015-09-01",
  "authors": [
    "M. Giuffrida",
    "M. Minervini",
    "S. Tsaftaris"
  ],
  "abstract": "Counting the number of leaves in plants is important for plant phenotyping, since it can be used to assess plant growth stages. We propose a learning-based approach for counting leaves in rosette (model) plants. We relate image-based descriptors learned in an unsupervised fashion to leaf counts using a supervised regression model. To take advantage of the circular and coplanar arrangement of leaves and also to introduce scale and rotation invariance, we learn features in a log-polar representation. Image patches extracted in this log-polar domain are provided to K-means, which builds a codebook in a unsupervised manner. Feature codes are obtained by projecting patches on the codebook using the triangle encoding, introducing both sparsity and specifically designed representation. A global, per-plant image descriptor is obtained by pooling local features in specific regions of the image. Finally, we provide the global descriptors to a support vector regression framework to estimate the number of leaves in a plant. We evaluate our method on datasets of the \\textit{Leaf Counting Challenge} (LCC), containing images of Arabidopsis and tobacco plants. Experimental results show that on average we reduce absolute counting error by 40% w.r.t. the winner of the 2014 edition of the challenge -a counting via segmentation method. When compared to state-of-the-art density-based approaches to counting, on Arabidopsis image data ~75% less counting errors are observed. Our findings suggest that it is possible to treat leaf counting as a regression problem, requiring as input only the total leaf count per training image.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://pdfs.semanticscholar.org/fcc7/41a6f7a82988e8dd7ce6ee266911d20fd0b7.pdf"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/fcc741a6f7a82988e8dd7ce6ee266911d20fd0b7"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "learning-to-count-leaves-in-rosette-plants-thumb.jpg",
  "card": "learning-to-count-leaves-in-rosette-plants-card.jpg",
  "s2_paper_id": "fcc741a6f7a82988e8dd7ce6ee266911d20fd0b7"
}
---

