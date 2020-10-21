---
{
  "title": "Soft Rasterizer: Differentiable Rendering for Unsupervised Single-View Mesh Reconstruction",
  "date": "2019-01-17",
  "authors": [
    "Shichen Liu",
    "Weikai Chen",
    "Tianye Li",
    "H. Li"
  ],
  "abstract": "Rendering is the process of generating 2D images from 3D assets, simulated in a virtual environment, typically with a graphics pipeline. By inverting such renderer, one can think of a learning approach to predict a 3D shape from an input image. However, standard rendering pipelines involve a fundamental discretization step called rasterization, which prevents the rendering process to be differentiable, hence suitable for learning. We present the first non-parametric and truly differentiable rasterizer based on silhouettes. Our method enables unsupervised learning for high-quality 3D mesh reconstruction from a single image. We call our framework `soft rasterizer' as it provides an accurate soft approximation of the standard rasterizer. The key idea is to fuse the probabilistic contributions of all mesh triangles with respect to the rendered pixels. When combined with a mesh generator in a deep neural network, our soft rasterizer is able to generate an approximated silhouette of the generated polygon mesh in the forward pass. The rendering loss is back-propagated to supervise the mesh generation without the need of 3D training data. Experimental results demonstrate that our approach significantly outperforms the state-of-the-art unsupervised techniques, both quantitatively and qualitatively. We also show that our soft rasterizer can achieve comparable results to the cutting-edge supervised learning method and in various cases even better ones, especially for real-world data.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://arxiv.org/pdf/1901.05567.pdf"
    },
    {
      "resource": "arXiv.org",
      "icon": "arxiv",
      "url": "https://arxiv.org/abs/1901.05567"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/77adcfb70208e79c35080665a4385fe444c0acc2"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "soft-rasterizer-differentiable-rendering-for-unsupervised-single-view-mesh-reconstruction-thumb.jpg",
  "card": "soft-rasterizer-differentiable-rendering-for-unsupervised-single-view-mesh-reconstruction-card.jpg",
  "s2_paper_id": "77adcfb70208e79c35080665a4385fe444c0acc2"
}
---

