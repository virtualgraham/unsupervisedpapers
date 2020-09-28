from essential_generators import DocumentGenerator
import random
import json
import re
import os 


###
# TODO: generate dummy thumbnails and incorporate them into dummy data
# https://github.com/bryanveloso/geopatterns
###

gen = DocumentGenerator()


def id_from_sentence(s):
    return re.sub(r'[^a-zA-Z0-9 _]+', '', s).lower().replace(" ", "-")


def generate_category():
    title = gen.gen_sentence(min_words=2, max_words=7)

    return (
        id_from_sentence(title),
        {
            "title": title,
            "thumbnail": gen.slug() + ".png"
        },
        gen.paragraph()
    )


def generate_task(task_ids):
    
    sub_tasks = random.sample(task_ids, random.randint(1,3)) if len(task_ids) >= 3 and bool(random.getrandbits(1)) else []

    title = gen.gen_sentence(min_words=2, max_words=7)

    return (
        id_from_sentence(title),
        {
            "title": title,
            "sub-tasks": sub_tasks,
            "thumbnail": gen.slug() + ".png"
        },
        gen.paragraph()
    )


def generate_method(method_ids, category_ids):
    
    categories = random.sample(category_ids, random.randint(1,3))
    sub_methods = random.sample(method_ids, random.randint(1,3)) if len(method_ids) >= 3 and bool(random.getrandbits(1)) else []

    title = gen.gen_sentence(min_words=2, max_words=7)
    year = random.randint(1970,2020)
    
    return (
        id_from_sentence(title),
        {
            "title": title,
            "year": year,
            "categories": categories,
            "sub-methods": sub_methods,
            "thumbnail": gen.slug() + ".png"
        },
        gen.paragraph(),
        year
    )


def generate_link():
    return {
        "title": gen.sentence(),
        "type": random.choice(["PDF", "Abstract", "Website", "Wikipedia", "Youtube", "Repository"]),
        "url": gen.url()
    }


def generate_paper(method_ids, task_ids):
    
    tasks = random.sample(task_ids, random.randint(1,3))
    methods = random.sample(method_ids, random.randint(1,3))

    links = [generate_link() for i in range(random.randint(1,3))]
    authors = [gen.name() for i in range(random.randint(1,7))]

    title = gen.gen_sentence(min_words=2, max_words=7)

    date = (str(random.randint(1970,2020)), format(random.randint(1,12), '02d'), format(random.randint(1,28), '02d'))

    return (
        id_from_sentence(title),
        {
            "title": title,
            "date": date[0] + '-' + date[1] + '-' + date[2],
            "authors": authors,
            "abstract": gen.paragraph(),
            "links": links,
            "tasks": tasks,
            "methods": methods,
            "thumbnail": gen.slug() + ".png"
        },
        gen.paragraph(),
        date
    )


def generate_area():
    return id_from_sentence(gen.gen_sentence(min_words=2, max_words=7))


def into_md(frontmatter, content):
    return "---\n" + json.dumps(frontmatter, indent=2) + "\n---\n\n" + content

def write_md(id, frontmatter, content, directory):
    if not os.path.exists(directory):
        os.makedirs(directory)
    textfile = open(directory + '/' + id + ".md", 'w')
    textfile.write(into_md(frontmatter, content))
    textfile.close()

def test():

    if os.path.exists('./_dummy_directory'):
        raise Exception("_dummy_directory already exists") 

    S = 1

    category_areas = [generate_area() for _ in range(random.randint(S, S*2))]
    task_areas = [generate_area() for _ in range(random.randint(S, S*2))]

    categories = [generate_category() for _ in range(random.randint(S*5, S*10))]
    
    category_ids = [category[0] for category in categories]

    tasks = []
    for _ in range(random.randint(S*10, S*20)):
        tasks.append(generate_task([task[0] for task in tasks]))
    
    task_ids = [tasks[0] for tasks in tasks]

    methods = []
    for _ in range(random.randint(S*20, S*40)):
        methods.append(generate_method([method[0] for method in methods], category_ids))

    method_ids = [method[0] for method in methods]

    papers = [generate_paper(method_ids, task_ids) for _ in range(random.randint(S*100, S*200))]

    os.mkdir("./_dummy_directory")
    os.mkdir("./_dummy_directory/categories")
    os.mkdir("./_dummy_directory/tasks")
    os.mkdir("./_dummy_directory/methods")
    os.mkdir("./_dummy_directory/papers")
    

    for category in categories:
        area = random.choice(category_areas)
        directory = "./_dummy_directory/categories/" + area
        write_md(category[0], category[1], category[2], directory)
        
    for task in tasks:
        area = random.choice(task_areas)
        directory = "./_dummy_directory/tasks/" + area
        write_md(task[0], task[1], task[2], directory)

    for method in methods:
        directory = "./_dummy_directory/methods/" + str(method[3])
        write_md(method[0], method[1], method[2], directory)

    for paper in papers:
        directory = "./_dummy_directory/papers/" + str(paper[3][0]) + "/" + str(paper[3][1])
        write_md(paper[0], paper[1], paper[2], directory)

test()