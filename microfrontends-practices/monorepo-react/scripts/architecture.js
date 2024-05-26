const path = require("path");
const fs = require("fs");

function createDirectory(directoryPath){
    if(!fs.existsSync(directoryPath)){
        console.log(`The directory was created: ${directoryPath}`);
        fs.mkdirSync(directoryPath);
    } else {
        console.log(`The directory exists: ${directoryPath}`);
    }
}
function createDirectoryStructure(basePath, structure){
    if(structure){
        for(const item of structure){
            const pathItem = path.join(basePath, item.name);
            if(item.isDirectory){
                createDirectory(pathItem);
                createDirectoryStructure(pathItem, item.children);
            }
        }
    }
}

function generate(basePath){
    const structure = [
        {
            name: "src",
            isDirectory: true,
            children: [
                {
                    name: "domain",
                    isDirectory: true,
                    children: [
                        {
                            name: "models",
                            isDirectory: true
                        },
                        {
                            name: "services",
                            isDirectory: true
                        }
                    ]
                },
                {
                    name: "application",
                    isDirectory: true,
                    children: [
                        {
                            name: "useCases",
                            isDirectory: true
                        },
                        {
                            name: "services",
                            isDirectory: true
                        }
                    ]
                },
                {
                    name: "presentation",
                    isDirectory: true,
                    children: [
                        {
                            name: "actions",
                            isDirectory: true
                        },
                        {
                            name: "stores",
                            isDirectory: true
                        },
                        {
                            name: "views",
                            isDirectory: true
                        }
                    ]
                },
                {
                    name: "infrastructure",
                    isDirectory: true,
                    children: [
                        {
                            name: "adapters",
                            isDirectory: true
                        },
                        {
                            name: "api",
                            isDirectory: true
                        }
                    ]
                }
            ]
        }
    ];
    createDirectoryStructure(basePath, structure);
}

const baseDirectory = process.argv[2];
if(baseDirectory){
    generate(baseDirectory);
} else {
    console.error("Type the directory of the micro-front-end");
}

// EX: npm run architecture ./packages/products