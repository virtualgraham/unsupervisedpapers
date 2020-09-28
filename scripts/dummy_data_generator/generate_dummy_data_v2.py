from essential_generators import DocumentGenerator
import random
import json
import re
import os 
from PIL import Image
from geopatterns import GeoPattern
import cairosvg
import random
import itertools



gen = DocumentGenerator()

def random_image(file):
    pattern = GeoPattern(
        str(random.random()), 
        generator=random.choice(['bricks','hexagons','overlapping_circles','overlapping_rings','plaid','plus_signs','rings','sinewaves','squares','triangles','xes'])
    )
    cairosvg.svg2png(bytestring=pattern.svg_string, write_to=file, scale=3)


def blank_image(file):
    img = Image.new("RGB", (256, 256), (255, 255, 255))
    img.save(file, "PNG")

def id_from_sentence(s):
    return re.sub(r'[^a-zA-Z0-9 _]+', '', s).lower().replace(" ", "-")


def generate_category(category_areas):
    title = gen.gen_sentence(min_words=2, max_words=7)

    return (
        id_from_sentence(title),
        {
            "area": random.choice(category_areas),
            "title": title,
            "thumbnail": "thumbnail.png"
        },
        gen.paragraph()
    )




def generate_task(area, task_ids):
    title = gen.gen_sentence(min_words=2, max_words=7)
    parent_task = random.choice(task_ids) if len(task_ids) > 0 and random.random() > 0.5 else None

    return (
        id_from_sentence(title),
        {
            "area": area,
            "title": title,
            "parent-task": parent_task,
            "thumbnail": "thumbnail.png"
        },
        gen.paragraph()
    )



def generate_method(area, method_ids, category_ids):
    
    print(category_ids)

    categories = random.sample(category_ids, random.randint(1,3))
    components = random.sample(method_ids, random.randint(1,3)) if len(method_ids) > 3 and random.random() > 0.5 else []

    title = gen.gen_sentence(min_words=2, max_words=7)
    year = random.randint(1970,2020)
    
    return (
        id_from_sentence(title),
        {
            "area": area,
            "title": title,
            "year": year,
            "categories": categories,
            "components": components,
            "thumbnail": "thumbnail.png"
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
            "thumbnail": "thumbnail.png"
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

    S = 10

    category_areas = [generate_area() for _ in range(random.randint(S, S*2))]
    task_areas = [generate_area() for _ in range(random.randint(S, S*2))]

    categories = [generate_category(category_areas) for _ in range(random.randint(S*5, S*10))]

    area_category_ids = {}
    for category in categories:
        if category[1]["area"] in area_category_ids:
            area_category_ids[category[1]["area"]].append(category[0])
        else:
            area_category_ids[category[1]["area"]] = [category[0]]

    category_ids = [category[0] for category in categories]

    tasks = []
    for _ in range(random.randint(S*20, S*40)):
        tasks.append(generate_task(random.choice(task_areas), [task[0] for task in tasks]))
    task_ids = [task[0] for task in tasks]

    methods = []
    for _ in range(random.randint(S*20, S*40)):
        method_area = random.choice(list(area_category_ids.keys()))
        methods.append(generate_method(method_area, [method[0] for method in methods], area_category_ids[method_area]))
    method_ids = [method[0] for method in methods]

    papers = [generate_paper(method_ids, task_ids) for _ in range(random.randint(S*100, S*200))]


    method_papers = {}

    for paper in papers:
        for _method in paper[1]["methods"]:
            if _method in method_papers:
                method_papers[_method].append(paper[0])
            else:
                method_papers[_method] = [paper[0]]

    for method in methods:
        mp = method_papers[method[0]]
        if len(mp) > 0:
            method[1]["introduced-by"] = random.choice(mp)


    os.mkdir("./_dummy_directory")
    os.mkdir("./_dummy_directory/tasks")
    os.mkdir("./_dummy_directory/methods")
    os.mkdir("./_dummy_directory/categories")
    os.mkdir("./_dummy_directory/papers")

    for category in categories:
        directory = "./_dummy_directory/categories/" + category[1]["area"] + "/" + category[0]
        write_md(category[0], category[1], category[2], directory)
        random_image(directory + "/thumbnail.png")

    for method in methods:
        directory = "./_dummy_directory/methods/" + method[0]
        write_md(method[0], method[1], method[2], directory)
        random_image(directory + "/thumbnail.png")

    for task in tasks:
        directory = "./_dummy_directory/tasks/" + task[1]["area"] + "/" + task[0]
        write_md(task[0], task[1], task[2], directory)
        random_image(directory + "/thumbnail.png")

    for paper in papers:
        directory = "./_dummy_directory/papers/" + paper[0]
        write_md(paper[0], paper[1], paper[2], directory)
        random_image(directory + "/thumbnail.png")
        
test()