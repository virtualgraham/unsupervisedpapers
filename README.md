# Unsupervised Papers

UnsupervisedPapers.com is an open-source directory of papers on unsupervised machine learning and related topics with links to resources such as code, websites and videos. 

# Contributing

Submissions of new entries as well as updates and corrections to existing entries are welcome. Contributions are made through GitHub pull requests. All the data for the directory are contained in the `/data` folder hierarchy in markdown and image files. You can simply fork this repository, add or revise the markdown files in the `/data` directory, then submit a pull request.

## Data Organization

Markdown Frontmatter Schema 
```
##########
# papers #
##########

# paper_id is the file name, should be title or abbreviated title in kebab case

---
{
	"title": "Title of Paper",
	"date": "2020-09-10",
	"authors": ["First Last", "First Last],
	"abstract": "Full paper abstract goes here ...",
	"thumbnail": "thumbnail.png",
	"links": [
		{
			"title": "PDF"
			"type": "pdf|website|wikipeida|youtube|github|paperswithcode"
			"url": "http://url"
		}
	],
	"supervision": ["unsupervised", "self-supervised"]
	"tasks": [
		"task_id", 
		"task_id"
	],
	"methods": [
		"method_id",
		"method_id"
	]
}
---

Content contains discussion


#########
# tasks #
#########

# task_id is the file name, should be title in kebab case

---
{
	"area": "area-id",
	"title": "Task Title",    
	"parent_task": "parent-task-id",
	"thumbnail": "thumbnail.png",
  "links": [
		{
			"title": "PDF"
			"type": "pdf|website|wikipeida|youtube|github|paperswithcode"
			"url": "http://url"
		}
  ]
}
---

Content contains description and 
Image Source: [Source Name](Source URL)


##############
# categories #
##############

# category_id is the file name, should be title in kebab case

---
{
	"area": "area_id",
	"title": "Category Title",  
	"thumbnail": "thumbnail.png",
	"links": [
		{
			"title": "PDF"
			"type": "pdf|website|wikipeida|youtube|github|paperswithcode"
			"url": "http://url"
		}
  ]
}
---

Content contains description and 
Image Source: [Source Name](Source URL)


###########
# methods #
###########

# method_id is the file name, should be title in kebab case

---
{
	"area": "area_id",
	"title": "Method Title",  
	"year" 2020,
	"categories": ["category-id"],
	"components": ["component-id"],
	"thumbnail": "thumbnail.png",
	"introduced_by": "paper-id",
	"links": [
		{
			"title": "PDF"
			"type": "pdf|website|wikipeida|youtube|github|paperswithcode"
			"url": "http://url"
		}
  ]
}
---

Content contains description and 
Image Source: [Source Name](Source URL)

```




## Sitemap

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


