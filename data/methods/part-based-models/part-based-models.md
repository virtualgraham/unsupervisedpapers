---
{
  "area": "computer-vision",
  "title": "Part-based models",
  "also_known_as": [],
  "year": null,
  "categories": [
    "parts-based-models"
  ],
  "components": [],
  "introduced_by": null,
  "links": [
    {
      "title": "Part-based models",
      "resource": "Wikipedia",
      "description": "",
      "icon": "wikipedia",
      "url": "https://en.wikipedia.org/wiki/Part-based_models"
    },
    {
      "title": "Part-based models",
      "resource": "NYU Computer Science",
      "description": "",
      "icon": "pdf",
      "url": "https://cs.nyu.edu/~fergus/teaching/vision_2012/11_parts_models.pdf"
    },
    {
      "title": "Part-Based Category Models",
      "resource": "The University of Texas at Austin Department of Computer Science",
      "description": "",
      "icon": "pdf",
      "url": "https://www.cs.utexas.edu/~grauman/courses/fall2009/papers/partbased.pdf"
    }
  ],
  "thumbnail": "part-based-models-thumb.jpg",
  "card": "part-based-models-card.jpg"
}
---
Many part-based models have been proposed in the literature. The idea to represent objects as an assembly of parts and flexible spatial relations reaches back to Fischler & Elschlager’s work in 1973. While this early work started from a set of hand-defined part templates, most recent approaches try to also learn the part appearance from training data. This implies that the learning algorithm itself should be able to select which local object regions to represent and it should be able to group similar local appearances into a common part representation. An optimal solution to the selection problem would imply a search over a huge search space. The development of local invariant features however provides an efficient alternative which has proven to work well in practice. 

Once the parts have been defined, the next question is how to represent their spatial relationship. This choice reflects the mutual independence assumptions we want to make about relative part locations, and it directly affects the number of parameters needed to fully specify the resulting model, as well as the complexity of performing inference using this model.

Source: [Part-Based Category Models](https://www.cs.utexas.edu/~grauman/courses/fall2009/papers/partbased.pdf)  
Image Source: [The Representation and Matching of Pictorial Structures](https://www.semanticscholar.org/paper/The-Representation-and-Matching-of-Pictorial-Fischler-Elschlager/719da2a0ddd38e78151e1cb2db31703ea8b2e490) [[PDF](www.cs.utexas.edu/~grauman/courses/spring2007/395T/papers/fischler_1973.pdf)]  
