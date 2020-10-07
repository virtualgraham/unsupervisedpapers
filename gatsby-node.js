const path = require("path");
const moment = require("moment");
const siteConfig = require("./site-config");

function encodeKebobCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()
}

//////////////////
// Directory
//////////////////

async function createDirectoryPages(graphql, actions) {
  const { createPage } = actions;

  const directoryCategoryPage = path.resolve("src/templates/directory/category.js"); // /methods/category/{category-id}
  const directoryCategoryAreaPage = path.resolve("src/templates/directory/category-area.js"); // /methods/area/{area-id}
  const directoryTaskPage = path.resolve("src/templates/directory/task.js");
  const directoryTaskAreaPage = path.resolve("src/templates/directory/task-area.js");
  const directoryMethodPage = path.resolve("src/templates/directory/method.js");
  const directoryPaperPage = path.resolve("src/templates/directory/paper.js");
  const directoryMethodsPage = path.resolve("src/templates/directory/methods.js"); // /methods
  const directoryTasksPage = path.resolve("src/templates/directory/tasks.js");
  const directorySubTasksPage = path.resolve("src/templates/directory/sub-tasks.js");

  //////////////////
  // Papers
  //////////////////

  const papers_query_start_timestamp = Date.now();

  const allPapersResult = await graphql(
    `{
      allMarkdownRemark(filter: {fields: {type: {eq: "paper"}}}) {
        nodes {
          frontmatter {
            title
            date
            authors
            abstract
            thumbnail {
              publicURL
            }
            links {
              title
              type
              url
            }
            supervision
            tasks
            methods
          }
          fields {
            name
            slug
          }
        }
      }
    }`
  );

  const papers = new Map()
  
  allPapersResult.data.allMarkdownRemark.nodes.forEach((paper) => {
    paper.tasks = []
    paper.methods = []
    papers.set(paper.fields.name, paper)
  });

  console.log('papers_query', Date.now() - papers_query_start_timestamp)

  ///////////////
  // Methods
  ///////////////

  const methods_query_start_timestamp = Date.now();

  const allMethodsResult = await graphql(
    `{
      allMarkdownRemark(filter: {fields: {type: {eq: "method"}}}) {
        nodes {
          frontmatter {
            area
            title
            year
            categories
            components
            introduced_by
            thumbnail {
              publicURL
            }
          }
          fields {
            name
            slug
          }
        }
      }
    }`
  );

  const methods = new Map()

  allMethodsResult.data.allMarkdownRemark.nodes.forEach((method) => {
    method.papers = []
    method.components = []
    method.categories = []
    methods.set(method.fields.name, method)
  });

  console.log('methods_query', Date.now() - methods_query_start_timestamp)

  ///////////////
  // Categories
  ///////////////

  const categories_query_start_timestamp = Date.now();

  const allCategoriesResult = await graphql(
    `{
      allMarkdownRemark(filter: {fields: {type: {eq: "category"}}}) {
        nodes {
          frontmatter {
            area
            title
            thumbnail {
              publicURL
            }
          }
          fields {
            name
            slug
          }
        }
      }
    }`
  );

  const categories = new Map()

  allCategoriesResult.data.allMarkdownRemark.nodes.forEach((category) => {
    category.methods = []
    categories.set(category.fields.name, category)
  });

  console.log('categories_query', Date.now() - categories_query_start_timestamp)

  ///////////////
  // Tasks
  ///////////////
  
  const tasks_query_start_timestamp = Date.now();

  const allTasksResult = await graphql(
    `{
      allMarkdownRemark(filter: {fields: {type: {eq: "task"}}}) {
        nodes {
          frontmatter {
            area
            title
            thumbnail {
              publicURL
            }
            parent_task
          }
          fields {
            name
            slug
          }
        }
      }
    }`
  );

  const tasks = new Map()

  allTasksResult.data.allMarkdownRemark.nodes.forEach((task) => {
    task.papers = []
    task.sub_tasks = []
    tasks.set(task.fields.name, task)
  });

  console.log('tasks_query', Date.now() - tasks_query_start_timestamp)

  ///////////////
  // Validate
  ///////////////

  papers.forEach(paper => {
    paper.frontmatter.tasks.forEach(task_name => {
      console.assert(tasks.has(task_name), "ID ERROR: list of tasks in paper \"" + paper.fields.name + "\" has invalid task id \"" + task_name + "\"")
    })
    paper.frontmatter.methods.forEach(method_name => {
      console.assert(methods.has(method_name), "ID ERROR: list of methods has invalid method id \"" + method_name + "\" in paper \"" + paper.fields.name + "\"")
    })
  })

  methods.forEach(method => {
    console.assert(method.frontmatter.introduced_by === null || papers.has(method.frontmatter.introduced_by), "ID ERROR: introduced_by in method \"" + method.fields.name + "\" is an invalid id \"" + method.frontmatter.introduced_by + "\"")

    method.frontmatter.categories.forEach(category_name => {
      console.assert(categories.has(category_name), "ID ERROR: list of categories in method \"" + method.fields.name + "\" has invalid category id \"" + category_name + "\"")
    })
    method.frontmatter.components.forEach(method_name => {
      console.assert(methods.has(method_name), "ID ERROR: list of components in method \"" + method.fields.name + "\" has invalid method id \"" + method_name + "\"")
    })
  })

  tasks.forEach(task => {
    console.assert(task.frontmatter.parent_task === null || tasks.has(task.frontmatter.parent_task), "ID ERROR: parent_task in task \"" + task.fields.name + "\" is an invalid id \"" + task.frontmatter.parent_task + "\"")
  })

  ///////////////
  // Area Categories
  ///////////////

  const areas_query_start_timestamp = Date.now();

  const areaCategoriesResults = await graphql(
    `{
      allMarkdownRemark(filter: {fields: {type: {eq: "category"}}}) {
        group(field: frontmatter___area) {
          edges {
            node {
              fields {
                name
              }
            }
          }
          fieldValue
        }
      }
    }`
  );

  const areaCategories = new Map()

  areaCategoriesResults.data.allMarkdownRemark.group.forEach((area) => {
    areaCategories.set(area.fieldValue, area.edges.map(category => categories.get(category.node.fields.name)))
  })

  console.log('areas_query', Date.now() - areas_query_start_timestamp)

  ///////////////
  // Area Tasks
  ///////////////

  const area_tasks_query_start_timestamp = Date.now();

  const areaTasksResults = await graphql(
    `{
      allMarkdownRemark(filter: {fields: {type: {eq: "task"}}}) {
        group(field: frontmatter___area) {
          edges {
            node {
              fields {
                name
              }
            }
          }
          fieldValue
        }
      }
    }`
  );

  const areaTasks = new Map()

  areaTasksResults.data.allMarkdownRemark.group.forEach((area) => {
    areaTasks.set(area.fieldValue, area.edges.map(task => tasks.get(task.node.fields.name)))
  })
    
  console.log('area_tasks', Date.now() - area_tasks_query_start_timestamp)

  ///////////////
  // Category Methods
  ///////////////

  const category_methods_query_start_timestamp = Date.now();

  const categoryMethodsResults = await graphql(
    `{
      allMarkdownRemark(filter: {fields: {type: {eq: "method"}}}) {
        group(field: frontmatter___categories) {
          edges {
            node {
              fields {
                name
              }
            }
          }
          fieldValue
        }
      }
    }`
  );

  categoryMethodsResults.data.allMarkdownRemark.group.forEach((category) => {
    categories.get(category.fieldValue).methods = category.edges.map(method => methods.get(method.node.fields.name))
  })

  console.log('category_methods', Date.now() - category_methods_query_start_timestamp)

  ///////////////
  // Task Papers
  ///////////////

  const task_papers_query_start_timestamp = Date.now();

  const taskPapersResults = await graphql(
    `{
      allMarkdownRemark(filter: {fields: {type: {eq: "paper"}}}) {
        group(field: frontmatter___tasks) {
          edges {
            node {
              fields {
                name
              }
            }
          }
          fieldValue
        }
      }
    }`
  );

  taskPapersResults.data.allMarkdownRemark.group.forEach((task) => {
    tasks.get(task.fieldValue).papers = task.edges.map(paper => papers.get(paper.node.fields.name))
  })

  console.log('task_papers', Date.now() - task_papers_query_start_timestamp)

  ///////////////
  // Method Papers
  ///////////////

  const method_papers_query_start_timestamp = Date.now();

  const methodPapersResults = await graphql(
    `{
      allMarkdownRemark(filter: {fields: {type: {eq: "paper"}}}) {
        group(field: frontmatter___methods) {
          edges {
            node {
              fields {
                name
              }
            }
          }
          fieldValue
        }
      }
    }`
  );

  methodPapersResults.data.allMarkdownRemark.group.forEach((method) => {
    methods.get(method.fieldValue).papers = method.edges.map(paper => papers.get(paper.node.fields.name))
  })

  console.log('method_papers', Date.now() - method_papers_query_start_timestamp)

  ///////////////
  // Sub-Tasks
  ///////////////

  const sub_tasks_query_start_timestamp = Date.now();

  const subTasksResults = await graphql(
    `{
      allMarkdownRemark(filter: {fields: {type: {eq: "task"}}}) {
        group(field: frontmatter___parent_task) {
          edges {
            node {
              fields {
                name
              }
            }
          }
          fieldValue
        }
      }
    }`
  );

  subTasksResults.data.allMarkdownRemark.group.forEach((parent_task) => {
    tasks.get(parent_task.fieldValue).sub_tasks = parent_task.edges.map(sub_task => tasks.get(sub_task.node.fields.name))
  })

  console.log('sub_tasks', Date.now() - sub_tasks_query_start_timestamp)

  ///////////////
  // Method Categories
  ///////////////

  methods.forEach((method) => {
    method.categories = method.frontmatter.categories.map(category_name => categories.get(category_name))
  })


  ///////////////
  // Method Components
  ///////////////
  methods.forEach((method) => {
    method.components = method.frontmatter.components.map(method_name => methods.get(method_name))
  })


  ///////////////
  // Paper Tasks
  ///////////////
  papers.forEach((paper) => {
    paper.tasks = paper.frontmatter.tasks.map(task_name => tasks.get(task_name))
  })


  ///////////////
  // Paper Methods
  ///////////////
  papers.forEach((paper) => {
    paper.methods = paper.frontmatter.methods.map(method_name => methods.get(method_name))
  })


  ///////////////
  // Method Tasks
  ///////////////

  methods.forEach((method) => {
    const task_names = new Set()
    method.papers.forEach((paper) => {
      paper.frontmatter.tasks.forEach((task_name) => {
        task_names.add(task_name)
      })
    })
    method.tasks = [...task_names].map((task_name) => tasks.get(task_name))
  })

  ///////////////
  // Method Introduced By
  ///////////////

  methods.forEach((method) => {
    if(method.frontmatter.introduced_by && papers.has(method.frontmatter.introduced_by)) {
      method.introduced_by = papers.get(method.frontmatter.introduced_by)
    }
  })

  ///////////////
  // Category Paper Counts
  ///////////////
  categories.forEach(category => {
    category.paper_count = category.methods.reduce((paper_count, method) => paper_count + method.papers.length, 0)
  })

  ///////////////
  // Category Method Counts
  ///////////////
  categories.forEach(category => {
    category.method_count = category.methods.length
  })

  ///////////////
  // Method Paper Counts
  ///////////////

  methods.forEach(method => {
    method.paper_count = method.papers.length
  })


  ///////////////
  // Task Paper Counts
  ///////////////
    
  tasks.forEach(task => {
    task.paper_count = task.papers.length
  })


  ///////////
  // Area Category Pages 
  ///////////

  areaCategories.forEach((categories, category_area) => {

    let method_count = 0
    let paper_count = 0

    const ctx_categories = categories.map(category => {
      method_count += category.methods.length
      return ({
        name: category.fields.name,
        title: category.frontmatter.title,
        thumbnail: category.frontmatter.thumbnail ? category.frontmatter.thumbnail.publicURL : siteConfig.defaultThumbnail,
        methods: category.methods.map(method => {
          paper_count += method.paper_count
          return ({
            name: method.fields.name,
            title: method.frontmatter.title,
            year: method.frontmatter.year,
            thumbnail: method.frontmatter.thumbnail ? method.frontmatter.thumbnail.publicURL : siteConfig.defaultThumbnail,
            paper_count: method.paper_count
          })
        })
      })
    });

    

    createPage({
      path: `/methods/area/${category_area}/`,
      component: directoryCategoryAreaPage,
      context: {
        area: category_area,
        categories: ctx_categories,
        method_count,
        paper_count
      }
    });
  });


  ///////////////
  // Area Task Pages
  ///////////////

  areaTasks.forEach((tasks, task_area) => {

    const top_level_tasks = tasks.filter(task => !task.frontmatter.parent_task)

    // These counts are not recursive, only top level and sub one level
    let task_count = top_level_tasks.length
    let paper_count = 0

    const ctx_tasks = top_level_tasks.map(task => {
      task_count += task.sub_tasks.length
      paper_count += task.paper_count
      return ({
        name: task.fields.name,
        title: task.frontmatter.title,
        thumbnail: task.frontmatter.thumbnail ? task.frontmatter.thumbnail.publicURL : siteConfig.defaultThumbnail,
        paper_count: task.paper_count,
        sub_tasks: task.sub_tasks.map(sub_task => {
          paper_count += sub_task.paper_count
          return ({
            name: sub_task.fields.name,
            title: sub_task.frontmatter.title,
            thumbnail: sub_task.frontmatter.thumbnail ? sub_task.frontmatter.thumbnail.publicURL : siteConfig.defaultThumbnail,
            paper_count: sub_task.paper_count,
          })
        })
      })
    });

    createPage({
      path: `/tasks/area/${task_area}/`,
      component: directoryTaskAreaPage,
      context: {
        area: task_area,
        tasks: ctx_tasks,
        task_count,
        paper_count
      }
    });
  });


  /////////////////
  // Papers Pages
  /////////////////

  papers.forEach((paper, paper_name) => {

    const ctx_tasks = paper.tasks.map(task => ({
      name: task.fields.name,
      title: task.frontmatter.title,
      paper_count: task.paper_count,
      thumbnail: task.frontmatter.thumbnail ? task.frontmatter.thumbnail.publicURL : siteConfig.defaultThumbnail,
    }))

    const ctx_methods = paper.methods.map(method => ({
      name: method.fields.name,
      title: method.frontmatter.title,
      paper_count: method.paper_count,
      thumbnail: method.frontmatter.thumbnail ? method.frontmatter.thumbnail.publicURL : siteConfig.defaultThumbnail,
    }))
    
    createPage({
      path: paper.fields.slug,
      component: directoryPaperPage,
      context: {
        name: paper_name,
        tasks: ctx_tasks,
        methods: ctx_methods
      }
    });

  });


  /////////////////
  // Methods Pages
  /////////////////

  methods.forEach((method, method_name) => {

    const ctx_introduced_by = method.introduced_by ? {
      name: method.introduced_by.fields.name,
      slug: method.introduced_by.fields.slug,
      title: method.introduced_by.frontmatter.title,
      date: method.introduced_by.frontmatter.date,
      authors: method.introduced_by.frontmatter.authors,
      abstract: method.introduced_by.frontmatter.abstract,
      thumbnail: introduced_by.frontmatter.thumbnail ? method.introduced_by.frontmatter.thumbnail.publicURL : siteConfig.defaultThumbnail,
      links: method.introduced_by.frontmatter.links,
    } : null

    const ctx_papers = method.papers.map(paper => ({
      name: paper.fields.name,
      title: paper.frontmatter.title,
      date: paper.frontmatter.date,
      authors: paper.frontmatter.authors,
      abstract: paper.frontmatter.abstract,
      thumbnail: paper.frontmatter.thumbnail ? paper.frontmatter.thumbnail.publicURL : siteConfig.defaultThumbnail,
      links: paper.frontmatter.links
    }))

    const ctx_tasks = method.tasks.map(task => ({
      name: task.fields.name,
      title: task.frontmatter.title,
      area: task.frontmatter.area,
      thumbnail: task.frontmatter.thumbnail ? task.frontmatter.thumbnail.publicURL : siteConfig.defaultThumbnail,
      paper_count: task.paper_count
    }))

    const ctx_components = method.components.map(component => ({
      name: component.fields.name,
      title: component.frontmatter.title,
      year: component.frontmatter.year,
      thumbnail: component.frontmatter.thumbnail ? component.frontmatter.thumbnail.publicURL : siteConfig.defaultThumbnail,
      paper_count: method.paper_count
    }))

    const ctx_categories = method.categories.map(category => ({
      name: category.fields.name,
      title: category.frontmatter.title,
      thumbnail: category.frontmatter.thumbnail ? category.frontmatter.thumbnail.publicURL : siteConfig.defaultThumbnail,
    }))

    createPage({
      path: method.fields.slug,
      component: directoryMethodPage,
      context: {
        name: method_name,
        papers: ctx_papers,
        tasks: ctx_tasks,
        components: ctx_components,
        categories: ctx_categories,
        introduced_by: ctx_introduced_by
      }
    });

  });


  /////////////////
  // Categories Pages
  /////////////////

  categories.forEach((category, category_name) => {

    const ctx_methods = category.methods.map(method => ({
      name: method.fields.name,
      title: method.frontmatter.title,
      year: method.frontmatter.year,
      thumbnail: method.frontmatter.thumbnail ? method.frontmatter.thumbnail.publicURL : siteConfig.defaultThumbnail,
      paper_count: method.paper_count
    }))

    createPage({
      path: category.fields.slug,
      component: directoryCategoryPage,
      context: {
        name: category_name,
        methods: ctx_methods
      }
    });

  });


  /////////////////
  // Tasks Pages
  /////////////////

  tasks.forEach((task, task_name) => {

    const ctx_papers = task.papers.map(paper => ({
      name: paper.fields.name,
      title: paper.frontmatter.title,
      date: paper.frontmatter.date,
      authors: paper.frontmatter.authors,
      abstract: paper.frontmatter.abstract,
      thumbnail: paper.frontmatter.thumbnail ? paper.frontmatter.thumbnail.publicURL : siteConfig.defaultThumbnail,
      links: paper.frontmatter.links
    }))

    const ctx_sub_tasks = task.sub_tasks.map(sub_task => ({
      name: sub_task.fields.name,
      title: sub_task.frontmatter.title,
      thumbnail: sub_task.frontmatter.thumbnail ? sub_task.frontmatter.thumbnail.publicURL : siteConfig.defaultThumbnail,
      paper_count: sub_task.paper_count
    }))

    console.log("ctx_sub_tasks", ctx_sub_tasks)

    createPage({
      path: task.fields.slug,
      component: directoryTaskPage,
      context: {
        name: task_name,
        papers: ctx_papers,
        sub_tasks: ctx_sub_tasks
      }
    });

  });

  /////////////////
  // Sub-tasks Page
  /////////////////

  tasks.forEach((task, task_name) => {

    const ctx_sub_tasks = task.sub_tasks.map(sub_task => ({
      name: sub_task.fields.name,
      title: sub_task.frontmatter.title,
      thumbnail: sub_task.frontmatter.thumbnail ? sub_task.frontmatter.thumbnail.publicURL : siteConfig.defaultThumbnail,
      paper_count: sub_task.paper_count
    }))

    createPage({
      path: '/tasks/area/' + task.frontmatter.area + '/' + task_name + '/',
      component: directorySubTasksPage,
      context: {
        name: task_name,
        sub_tasks: ctx_sub_tasks
      }
    });

  });


  /////////////////
  // Methods Page
  /////////////////

  const ctx_area_categories = {}

  areaCategories.forEach((area_categories, area) => {
    ctx_area_categories[area] = area_categories.map(area_category => ({
      name: area_category.fields.name,
      title: area_category.frontmatter.title,
      thumbnail: area_category.frontmatter.thumbnail ? area_category.frontmatter.thumbnail.publicURL : siteConfig.defaultThumbnail,
      paper_count: area_category.paper_count,
      method_count: area_category.method_count,
    }))
  })

  createPage({
    path: '/methods/',
    component: directoryMethodsPage,
    context: {
      area_categories: ctx_area_categories
    }
  });


  /////////////////
  // Tasks Page
  /////////////////

  const ctx_area_tasks = {}

  areaTasks.forEach((area_tasks, area) => {
    const area_top_level_tasks = area_tasks.filter(area_task => !area_task.frontmatter.parent_task)
    ctx_area_tasks[area] = area_top_level_tasks.map(area_task => ({
      name: area_task.fields.name,
      title: area_task.frontmatter.title,
      thumbnail: area_task.frontmatter.thumbnail ? area_task.frontmatter.thumbnail.publicURL : siteConfig.defaultThumbnail,
      paper_count: area_task.paper_count
    }))
  })

  createPage({
    path: '/tasks/',
    component: directoryTasksPage,
    context: {
      area_tasks: ctx_area_tasks
    }
  });
}



//////////////////
// Blog
//////////////////

async function createBlogPages(graphql, actions) {
  const { createPage } = actions;

  const blogPostPage = path.resolve("src/templates/blog/post.js");
  const blogTagPage = path.resolve("src/templates/blog/tag.js");


  const blogPostResults = await graphql(
    `
    {
      allMarkdownRemark(filter: {fields: {type: {eq: "post"}}}) {
        edges {
          node {
            frontmatter {
              title
              tags
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
    `
  );

  if (blogPostResults.errors) {
    console.error(blogPostResults.errors);
    throw blogPostResults.errors;
  }

  const tagSet = new Set();

  const blogPostEdges = blogPostResults.data.allMarkdownRemark.edges;

  blogPostEdges.sort((postA, postB) => {
    const dateA = moment(
      postA.node.frontmatter.date,
      siteConfig.dateFromFormat
    );

    const dateB = moment(
      postB.node.frontmatter.date,
      siteConfig.dateFromFormat
    );

    if (dateA.isBefore(dateB)) return 1;
    if (dateB.isBefore(dateA)) return -1;

    return 0;
  });

  blogPostEdges.forEach((edge, index) => {
    if (edge.node.frontmatter.tags) {
      edge.node.frontmatter.tags.forEach(tag => {
        tagSet.add(tag);
      });
    }

    const nextID = index + 1 < blogPostEdges.length ? index + 1 : 0;
    const prevID = index - 1 >= 0 ? index - 1 : blogPostEdges.length - 1;
    const nextEdge = blogPostEdges[nextID];
    const prevEdge = blogPostEdges[prevID];

    createPage({
      path: edge.node.fields.slug,
      component: blogPostPage,
      context: {
        slug: edge.node.fields.slug,
        nexttitle: nextEdge.node.frontmatter.title,
        nextslug: nextEdge.node.fields.slug,
        prevtitle: prevEdge.node.frontmatter.title,
        prevslug: prevEdge.node.fields.slug
      }
    });
  });

  // Generate link foreach tag page
  tagSet.forEach(tag => {
    createPage({
      path: `/blog/tag/${encodeKebobCase(tag)}/`,
      component: blogTagPage,
      context: {
        tags: [...tagSet].sort(),
        tag
      }
    });
  });
}



exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  
  let slug, type;

  if (node.internal.type === "MarkdownRemark") {

    const fileNode = getNode(node.parent);
    const sourceInstanceName = fileNode.sourceInstanceName
    const parsedFilePath = path.parse(fileNode.relativePath);
    const dir = parsedFilePath.dir
    const name = parsedFilePath.name

    if (sourceInstanceName == 'blog') {
      type = 'post'
      slug = `/blog/${name}/`;
    } else if (sourceInstanceName == 'data') {
      if (dir.startsWith('categories')) {
        type = 'category'
        slug = `/methods/category/${name}/`; 
      } else if (dir.startsWith('methods')) {
        type = 'method'
        slug = `/method/${name}/`;
      } else if (dir.startsWith('papers')) {
        type = 'paper'
        slug = `/paper/${name}/`;
      } else if (dir.startsWith('tasks')) {
        type = 'task'
        slug = `/task/${name}/`;
      }
    } 
    
    if (!slug) return

    createNodeField({ node, name: "name", value: name });
    createNodeField({ node, name: "type", value: type });
    createNodeField({ node, name: "slug", value: slug });

  }
};


exports.createPages = async ({ graphql, actions }) => {

  await createBlogPages(graphql, actions)
  await createDirectoryPages(graphql, actions) 

};


exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  const typeDefs = [
    schema.buildObjectType({
      name: 'MarkdownRemark',
      fields: {
        frontmatter: 'MarkdownRemarkFrontmatter!'
      },
      interfaces: ['Node'],
      extensions: {
        infer: true,
      },
    }),
    schema.buildObjectType({
      name: 'MarkdownRemarkFrontmatter',
      fields: {
        year: {
          type: 'Int',
        },
        "introduced_by": {
          type: 'String',
        },
        "parent_task": {
          type: 'String',
        },
        "date": {
          type: 'String',
        },
        components: {
          type: "[String!]",
        },

        // thumbnail: {
        //   type: 'Thumbnail!',
        //   resolve(source) {
        //     console.log('Thumbnail', source)
        //     const { thumbnail } = source
        //     if (source.thumbnail == null || !thumbnail.publicURL) {
        //       return {
        //         publicURL: "/unsupervisedpapers.svg"
        //       }
        //     }
        //     return thumbnail
        //   },
          
        // }
      }
    }),
    // schema.buildObjectType({
    //   name: 'Thumbnail',
    //   interfaces: ['Node'],
    //   fields: {
    //     publicURL: {
    //       type: 'String',
    //     },
    //   },
    //   extensions: {
    //     infer: true,
    //   },
    // }),
  ]
  createTypes(typeDefs)
}