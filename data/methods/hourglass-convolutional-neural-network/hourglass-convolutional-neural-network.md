---
{
  "area": "computer-vision",
  "title": "Hourglass Convolutional Neural Network",
  "year": null,
  "categories": [
    "deep-neural-network"
  ],
  "components": [],
  "introduced_by": null,
  "links": [
    {
      "title": "Using Hourglass Networks To Understand Human Poses",
      "resource": "Towards Data Science",
      "description": "",
      "icon": "website",
      "url": "https://towardsdatascience.com/using-hourglass-networks-to-understand-human-poses-1e40e349fa15"
    },
    {
      "title": "Hourglass Module",
      "resource": "Papers with Code",
      "icon": "paperswithcode",
      "url": "https://paperswithcode.com/method/hourglass-module"
    },
    {
      "title": "Simple Introduction about Hourglass-like Model",
      "resource": "Medium",
      "icon": "website",
      "url": "https://medium.com/@sunnerli/simple-introduction-about-hourglass-like-model-11ee7c30138"
    }
  ],
  "thumbnail": "hourglass-convolutional-neural-network-thumb.jpg",
  "card": "hourglass-convolutional-neural-network-card.jpg",
  "also_known_as": [
    "Hourglass Module"
  ]
}
---
Like many convolutional approaches that produce pixel-wise outputs, the hourglass network pools down to a very low resolution, then upsamples and combines features across multiple resolutions

The design of the hourglass is motivated by the need to capture information at every scale. While local evidence is essential for identifying features like faces and hands, a final pose estimate requires a coherent understanding of the full body. The person’s orientation, the arrangement of their limbs, and the relationships of adjacent joints are among the many cues that are best recognized at different scales in the image. The hourglass is a simple, minimal design that has the capacity to capture all of these features and bring them together to output pixel-wise predictions.

The network must have some mechanism to effectively process and consolidate features across scales. The Hourglass uses a single pipeline with skip layers to preserve spatial information at each resolution. The network reaches its lowest resolution at 4x4 pixels allowing smaller spatial filters to be applied that compare features across the entire space of the image.

The hourglass is set up as follows: Convolutional and max pooling layers are used to process features down to a very low resolution. At each max pooling step, the network branches off and applies more convolutions at the original pre-pooled resolution. After reaching the lowest resolution, the network begins the top-down sequence of upsampling and combination of features across scales. To bring together information across two adjacent resolutions, we do nearest neighbor upsampling of the lower resolution followed by an elementwise addition of the two sets of features. The topology of the hourglass is symmetric, so for every layer present on the way down there is a corresponding layer going up.

After reaching the output resolution of the network, two consecutive rounds of 1x1 convolutions are applied to produce the final network predictions. The output of the network is a set of heatmaps where for a given heatmap the network predicts the probability of a joint’s presence at each and every pixel.

Source: [Newell et al., 2016](https://arxiv.org/pdf/1603.06937v2.pdf)  
Image source: [Newell et al., 2016](https://arxiv.org/pdf/1603.06937v2.pdf)  
