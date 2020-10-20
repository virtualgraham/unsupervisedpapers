---
{
  "area": "computer-vision",
  "title": "Contrast-based Saliency",
  "year": null,
  "categories": [
    "saliency-detection"
  ],
  "components": [],
  "thumbnail": "contrast-based-saliency-thumb.jpg",
  "introduced_by": null,
  "links": [],
  "card": "contrast-based-saliency-card.jpg"
}
---
Because the contrast feature reflects the human-visual system that automatically concentrates on uniqueness and rarity, it has been widely used for the detection of the salient region.  
The **contrast-based saliency** models consist of the following two types: global- and local-contrast-based models. The main mechanism of the global-contrast models computes the object’s saliency through the computation of the color contrast between each of the pixels and the mean value of an entire image. Although the global-contrast models are effective to detect salient regions of simple pattern images, these models have a limitation in a poor global contrast and a complex pattern image. The local-contrast-based models have been proposed to overcome the drawbacks of the global-contrast models. These models compute a salient region by considering the local neighborhoods of the pixels. Although these models are useful to an object’s saliency, they suffer from local noises when computing complex pattern images.  

Source: [Oh et al., 2018](https://www.spiedigitallibrary.org/journals/journal-of-electronic-imaging/volume-27/issue-05/051204/Visual-saliency-region-detection-by-combination-of-soft--and/10.1117/1.JEI.27.5.051204.full?SSO=1)  
Image source: [Oh et al., 2018](https://www.spiedigitallibrary.org/journals/journal-of-electronic-imaging/volume-27/issue-05/051204/Visual-saliency-region-detection-by-combination-of-soft--and/10.1117/1.JEI.27.5.051204.full?SSO=1)  
