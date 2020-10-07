---
{
  "title": "VoxelMorph: A Learning Framework for Deformable Medical Image Registration",
  "date": "2018-09-14",
  "authors": [
    "G. Balakrishnan",
    "Amy Zhao",
    "M. Sabuncu",
    "J. Guttag",
    "A. Dalca"
  ],
  "abstract": "We present VoxelMorph, a fast learning-based framework for deformable, pairwise medical image registration. Traditional registration methods optimize an objective function for each pair of images, which can be time-consuming for large datasets or rich deformation models. In contrast to this approach and building on recent learning-based methods, we formulate registration as a function that maps an input image pair to a deformation field that aligns these images. We parameterize the function via a convolutional neural network and optimize the parameters of the neural network on a set of images. Given a new pair of scans, VoxelMorph rapidly computes a deformation field by directly evaluating the function. In this paper, we explore two different training strategies. In the first (unsupervised) setting, we train the model to maximize standard image matching objective functions that are based on the image intensities. In the second setting, we leverage auxiliary segmentations available in the training data. We demonstrate that the unsupervised model’s accuracy is comparable to the state-of-the-art methods while operating orders of magnitude faster. We also show that VoxelMorph trained with auxiliary data improves registration accuracy at test time and evaluate the effect of training set size on registration. Our method promises to speed up medical image analysis and processing pipelines while facilitating novel directions in learning-based registration and its applications. Our code is freely available at https://github.com/voxelmorph/voxelmorph.",
  "links": [
    {
      "title": "PDF",
      "type": "pdf",
      "url": "https://arxiv.org/pdf/1809.05231.pdf"
    },
    {
      "title": "arXiv.org",
      "type": "arxiv",
      "url": "https://arxiv.org/abs/1809.05231"
    },
    {
      "title": "Semantic Scholar",
      "type": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/6a88c8abd298b5e9ea7485f41a6a1b1e43b16d5f"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "voxel-morph-a-learning-framework-for-deformable-medical-image-registration-thumb.jpg",
  "card": "voxel-morph-a-learning-framework-for-deformable-medical-image-registration-card.jpg",
  "s2_paper_id": "6a88c8abd298b5e9ea7485f41a6a1b1e43b16d5f"
}
---

