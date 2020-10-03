const fs = require('fs');
const argv = require('yargs')
    .boolean(['s'])
    .argv;

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

const staging = argv.s

console.log(argv)

const dataDir = staging ? 'data_staging' : 'data'
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

        if (!fs.existsSync(`${dataDir}`)) {
            fs.mkdirSync(`${dataDir}`);
        }

        if (!fs.existsSync(`${dataDir}/categories`)) {
            fs.mkdirSync(`${dataDir}/categories`);
        }

        if (!fs.existsSync(`${dataDir}/categories/${area}`)) {
            fs.mkdirSync(`${dataDir}/categories/${area}`);
        }

        if (!fs.existsSync(`${dataDir}/categories/${area}/${name}`)) {
            fs.mkdirSync(`${dataDir}/categories/${area}/${name}`);
        }

        const frontmatter = {
            "area": area,
            "title": title,
            "thumbnail": null
        }

        writeMarkdownFile(frontmatter, `${dataDir}/categories/${area}/${name}/${name}.md`)

        return

    } else if (type === "m" || type === "method") {

        if(args.length !== 3) {
            console.error("[usage] npm run ins method area title")
        }

        const area = encodeKebobCase(args[1])
        const title = args[2]
        const name = encodeKebobCase(args[2])

        if (!fs.existsSync(`${dataDir}`)) {
            fs.mkdirSync(`${dataDir}`);
        }

        if (!fs.existsSync(`${dataDir}/methods`)) {
            fs.mkdirSync(`${dataDir}/methods`);
        }

        if (!fs.existsSync(`${dataDir}/methods/${name}`)) {
            fs.mkdirSync(`${dataDir}/methods/${name}`);
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

        writeMarkdownFile(frontmatter, `${dataDir}/methods/${name}/${name}.md`)

        return

    } else if (type === "p" || type === "paper") {

        if(args.length !== 3) {
            console.error("[usage] npm run ins paper title")
        }

        const title = args[1]
        const name = encodeKebobCase(args[1])

        if (!fs.existsSync(`${dataDir}`)) {
            fs.mkdirSync(`${dataDir}`);
        }

        if (!fs.existsSync(`${dataDir}/papers`)) {
            fs.mkdirSync(`${dataDir}/papers`);
        }

        if (!fs.existsSync(`${dataDir}/papers/${name}`)) {
            fs.mkdirSync(`${dataDir}/papers/${name}`);
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
            "thumbnail": (`${name}.jpg`)
        }

        writeMarkdownFile(frontmatter, `${dataDir}/papers/${name}/${name}.md`)

        return

    } else if (type === "t" || type === "task") {

        if(args.length !== 3) {
            console.error("[usage] npm run ins task area title")
        }

        const area = encodeKebobCase(args[1])
        const title = args[2]
        const name = encodeKebobCase(args[2])

        if (!fs.existsSync(`${dataDir}`)) {
            fs.mkdirSync(`${dataDir}`);
        }

        if (!fs.existsSync(`${dataDir}/tasks`)) {
            fs.mkdirSync(`${dataDir}/tasks`);
        }

        if (!fs.existsSync(`${dataDir}/tasks/${area}`)) {
            fs.mkdirSync(`${dataDir}/tasks/${area}`);
        }

        if (!fs.existsSync(`${dataDir}/tasks/${area}/${name}`)) {
            fs.mkdirSync(`${dataDir}/tasks/${area}/${name}`);
        }

        const frontmatter = {
            "area": area,
            "title": title,
            "parent_task": null,
            "thumbnail": null,
            "links": []
        }

        writeMarkdownFile(frontmatter, `${dataDir}/tasks/${area}/${name}/${name}.md`)

        return

    } 
}

console.error("[usage] npm run ins category|method|paper|task")

