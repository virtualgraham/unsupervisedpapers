# Unsupervised Papers Website

Uses the [s3_website](https://github.com/laurilehmijoki/s3_website) deployment tool

geopattern

http://unsupervisedpapers.com.s3-website-us-west-2.amazonaws.com

TODO
```
performance
	- build speed at approx 1000 papers per min, 2000 pages per min
	- page queries can be removed because all that data was already queried in createPages
```

Useful Commands

```
s3_website push
```


Sitemap
```
/
	+ list of recent papers
	
/paper/{paper-id} # Paper
	+ paper details
	+ links
	+ list of tasks
	+ list of methods

/tasks # TaskAreas
	+ list of areas each with top few tasks
	
/task/{task-id} # Task
	+ task details
	+ list of recent papers
	+ list of sub tasks
	
/tasks/area/{area-id}/{task-id} #SubTasks
	+ list of sub tasks

/tasks/area/{area-id} # TaskArea
	+ list of tasks for area

/methods # CategoryAreas
	+ list of areas each with top few categories	

/method/{method-id} # Method
	+ method details
	+ list of ::latests:: papers
	+ list of tasks
	+ list of components
	+ list of categories

/methods/category/{category-id} # Category
	+ category details
	+ list of methods

/methods/area/{area-id} # CategoryArea
	+ list of categories each with top few methods
	

/blog
	- list of tags
	- list of posts (all posts in a virtual list?)

/blog/{post-slug}
	- post details including title and tags
	- post content

/blob/tags/{tag}
	- list of posts that have this tag

/about
	- a few paragraphs about the site



```

Schema
```
# papers 
(id is the file name, should be title or abbreviated title in kebab case)

---
{
  "title": "Blogging Like a Hacker",
  "date": "2020-09-10",
  "authors": ["Joe Smith"],
  "abstract": "Attempts to train a comprehensive ...",
  "thumbnail": "foobar.png", **
  "links": [
  	{
  		"title": "PDF"
  		"type": "PDF|Abstract|Website|Wikipeida|Youtube|Repository"
  		"url": "http://url"
  	}
  ],
  "tasks": [
  	"instance_segmentation", 
  	"kennetheagem"
  ],
  "methods": [
  	"1x1-convolution"
  ]
}
---

Content contains editor notes, possibly with diagrams, embedded youtube videos




# tasks
(id is the file name, should be title in kebab case)

---
{
  "area": "Computer Vision",  **
  "title": "Real-Time Semantic Segmentation",    
  "parent-task": "another-task",  **
  "thumbnail": "foobar.png",
}
---

Content contains description




# categories
(id is the file name, should be title in kebab case)

---
{
  "area": "Computer Vision",  **
  "title": "Image Models",  
  "thumbnail": "foobar.png",
}
---

Content contains description




# methods
(id is the file name, should be title in kebab case)

---
{
  "title": "Blogging",  
  "year" 1980,
  "area": "area",
  "introduced-by": "paper-name",
  "categories": ["category-one"],
  "components": ["another-method"], **
  "thumbnail": "foobar.png",
}
---


Content contains description
```


