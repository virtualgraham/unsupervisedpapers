const fs = require('fs');
const {argv} = require('yargs')

function encodeKebobCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()
}

function writeMarkdownFile(frontmatter, file) {
    const markdown = `---\n${JSON.stringify(frontmatter, null, 2)}\n---\n`
    
    if (!fs.existsSync(file)) {
        fs.writeFileSync(file, markdown)
        console.log('Created', file)
    } else {
        console.error('File already exists', file)
    }
}

const args = argv._

if(args.length > 0) {
    const type = args[0]

    if (type === "c" || type === "category") {

        if(args.length !== 3) {
            console.error("[usage] npm run ins category area title")
        }

        const area = encodeKebobCase(args[1])
        const title = args[2]
        const name = encodeKebobCase(args[2])

        if (!fs.existsSync(`data/categories/${area}`)) {
            fs.mkdirSync(`data/categories/${area}`);
        }

        if (!fs.existsSync(`data/categories/${area}/${name}`)) {
            fs.mkdirSync(`data/categories/${area}/${name}`);
        }

        const frontmatter = {
            "area": area,
            "title": title,
            "thumbnail": null
        }

        writeMarkdownFile(frontmatter, `data/categories/${area}/${name}/${name}.md`)

        return

    } else if (type === "m" || type === "method") {

        if(args.length !== 3) {
            console.error("[usage] npm run ins method area title")
        }

        const area = encodeKebobCase(args[1])
        const title = args[2]
        const name = encodeKebobCase(args[2])

        if (!fs.existsSync(`data/methods/${name}`)) {
            fs.mkdirSync(`data/methods/${name}`);
        }

        const frontmatter = {
            "area": area,
            "title": title,
            "year": null,
            "categories": [],
            "components": [],
            "thumbnail": null,
            "introduced_by": null,
            "links": []
        }

        writeMarkdownFile(frontmatter, `data/methods/${name}/${name}.md`)

        return

    } else if (type === "p" || type === "paper") {

        if(args.length !== 3) {
            console.error("[usage] npm run ins paper title")
        }

        const title = args[1]
        const name = encodeKebobCase(args[1])

        if (!fs.existsSync(`data/papers/${name}`)) {
            fs.mkdirSync(`data/papers/${name}`);
        }

        const frontmatter = {
            "title": title,
            "date": null,
            "authors": [],
            "abstract": null,
            "links": [],
            "supervision": [],
            "tasks": [],
            "methods": [],
            "thumbnail": (name + ".jpg")
        }

        writeMarkdownFile(frontmatter, `data/papers/${name}/${name}.md`)

        return

    } else if (type === "t" || type === "task") {

        if(args.length !== 3) {
            console.error("[usage] npm run ins task area title")
        }

        const area = encodeKebobCase(args[1])
        const title = args[2]
        const name = encodeKebobCase(args[2])

        if (!fs.existsSync(`data/tasks/${area}`)) {
            fs.mkdirSync(`data/tasks/${area}`);
        }

        if (!fs.existsSync(`data/tasks/${area}/${name}`)) {
            fs.mkdirSync(`data/tasks/${area}/${name}`);
        }

        const frontmatter = {
            "area": area,
            "title": title,
            "parent_task": null,
            "thumbnail": null,
            "links": []
        }

        writeMarkdownFile(frontmatter, `data/tasks/${area}/${name}/${name}.md`)

        return

    } 
}

console.error("[usage] npm run ins category|method|paper|task")

