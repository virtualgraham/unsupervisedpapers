---
{
  "title": "Unsupervised User Stance Detection on Twitter",
  "date": "2019-04-03",
  "authors": [
    "Kareem Darwish",
    "P. Stefanov",
    "M. Aupetit",
    "Preslav Nakov"
  ],
  "abstract": "We present a highly effective unsupervised framework for detecting the stance of prolific Twitter users with respect to controversial topics. In particular, we use dimensionality reduction to project users onto a low-dimensional space, followed by clustering, which allows us to find core users that are representative of the different stances. Our framework has three major advantages over pre-existing methods, which are based on supervised or semi-supervised classification. First, we do not require any prior labeling of users: instead, we create clusters, which are much easier to label manually afterwards, e.g., in a matter of seconds or minutes instead of hours. Second, there is no need for domain- or topic-level knowledge either to specify the relevant stances (labels) or to conduct the actual labeling. Third, our framework is robust in the face of data skewness, e.g., when some users or some stances have greater representation in the data. We experiment with different combinations of user similarity features, dataset sizes, dimensionality reduction methods, and clustering algorithms to ascertain the most effective and most computationally efficient combinations across three different datasets (in English and Turkish). We further verified our results on additional tweet sets covering six different controversial topics. Our best combination in terms of effectiveness and efficiency uses retweeted accounts as features, UMAP for dimensionality reduction, and Mean Shift for clustering, and yields a small number of high-quality user clusters, typically just 2--3, with more than 98% purity. The resultant user clusters can be used to train downstream classification. Moreover, our framework is robust to variations in the hyper-parameter values and also with respect to random initialization.",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "https://arxiv.org/pdf/1904.02000.pdf"
    },
    {
      "title": "arXiv.org",
      "type": "arxiv",
      "url": "https://arxiv.org/abs/1904.02000"
    },
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/45127e6458715b1350aa3138714c3f24b2b38432"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "unsupervised-user-stance-detection-on-twitter-thumb.jpg",
  "card": "unsupervised-user-stance-detection-on-twitter-card.jpg",
  "s2_paper_id": "45127e6458715b1350aa3138714c3f24b2b38432"
}
---

