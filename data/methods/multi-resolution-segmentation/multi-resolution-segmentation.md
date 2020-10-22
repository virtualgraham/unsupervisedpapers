---
{
  "area": "computer-vision",
  "title": "Multi-resolution Segmentation",
  "year": "2000",
  "categories": [
    "image-segmentation"
  ],
  "components": [],
  "introduced_by": null,
  "links": [
    {
      "title": "Multiresolution Segmentation : an optimization approach for high quality multi-scale image segmentation",
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/Multiresolution-Segmentation-%3A-an-optimization-for-Baatz-Sch%C3%A4pe/364cc1ff514a2e11d21a101dc072575e5487d17e"
    }
  ],
  "thumbnail": "multi-resolution-segmentation-thumb.jpg",
  "card": "multi-resolution-segmentation-card.jpg"
}
---
The procedure for the multi-scale image segmentation can be described as a region merging technique. It starts with each pixel forming one image object or region. At each step a pair of image objects is merged into one larger object. The merging decision is based on local homogeneity criteria, describing the similarity of adjacent image objects. The homogeneity criterion is not only a ‘fit’ or ‘fit not’ criterion. A “merging cost” is assigned to each possible merge. These costs represent the degree of fitting. For a possible merge the degree of fitting is evaluated and the merge is fulfilled, if it is smaller than a given ‘least degree of fitting’. The procedure stops when there are no more possible merges. A small ‘least degree of fitting’ permits fewer merges than a larger one. Therefore the size of the resulting image objects will grow with the ‘least degree of fitting’ value. Due to this property, the parameter will be termed in the following as the scale parameter. A merge with a better degree of fitting (i.e. smaller value) than the scale parameter is said to “fulfill the homogeneity criterion”. The two main components of multi-resolution segmentation are: 
- Decision Heuristics to determine the image objects that will merge at each step 
- Definition of a homogeneity

Source, Image Source: [Multiresolution Segmentation : an optimization approach for high quality multi-scale image segmentation](https://www.semanticscholar.org/paper/Multiresolution-Segmentation-%3A-an-optimization-for-Baatz-Sch%C3%A4pe/364cc1ff514a2e11d21a101dc072575e5487d17e)
