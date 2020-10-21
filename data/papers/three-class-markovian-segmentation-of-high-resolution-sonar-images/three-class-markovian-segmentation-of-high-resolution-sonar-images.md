---
{
  "title": "Three-Class Markovian Segmentation of High-Resolution Sonar Images",
  "date": "1999-12-01",
  "authors": [
    "M. Mignotte",
    "C. Collet",
    "Patrick Pérez",
    "P. Bouthemy"
  ],
  "abstract": "This paper presents an original method for analyzing, in an unsupervised way, images supplied by high resolution sonar. We aim at segmenting the sonar image into three kinds of regions: echo areas (due to the reflection of the acoustic wave on the object), shadow areas (corresponding to a lack of acoustic reverberation behind an object lying on the sea-bed), and sea-bottom reverberation areas. This unsupervised method estimates the parameters of noise distributions, modeled by a Weibull probability density function (PDF), and the label field parameters, modeled by a Markov random field (MRF). For the estimation step, we adopt a maximum likelihood technique for the noise model parameters and a least-squares method to estimate the MRF prior model. Then, in order to obtain an accurate segmentation map, we have designed a two-step process that finds the shadow and the echo regions separately, using the previously estimated parameters. First, we introduce a scale-causal and spatial model called SCM (scale causal multigrid), based on a multigrid energy minimization strategy, to find the shadow class. Second, we propose a MRF monoscale model using a priori information (at different level of knowledge) based on physical properties of each region, which allows us to distinguish echo areas from sea-bottom reverberation. This technique has been successfully applied to real sonar images and is compatible with automatic processing of massive amounts of data.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "https://pdfs.semanticscholar.org/d774/2382550e5ab70ab807a078a867d9abb24570.pdf"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/6266c899fd5cd99648c7cc799cb5723cccd72bd7"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "three-class-markovian-segmentation-of-high-resolution-sonar-images-thumb.jpg",
  "card": "three-class-markovian-segmentation-of-high-resolution-sonar-images-card.jpg",
  "s2_paper_id": "6266c899fd5cd99648c7cc799cb5723cccd72bd7"
}
---

