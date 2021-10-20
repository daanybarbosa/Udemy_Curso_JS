//const fs = require('fs');
const fs = require('fs').promises;
const path = require('path');

//ira escanear as pastas do projeto
// fs.readdirSync //assincrona 
// fs.readdir //sincrona 

//promises - ira pegar o caminho da pasta
// fs.readdir('./')
//     .then(files => console.log(files))
//     .catch(e => console.log(e));

//promises - ira pegar o caminho absoluto da pasta
// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e));

/* ************ Exemplo 1 - visualizar os diretorios **************** 
async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files);
}

function walk(files){
    for (let file of files){
        console.log(file);
    }
};

//executar a funçao - ira visualizar os diretorios
readdir('/Users/daniele/javacript-workspace/');
*/

/* ************ Exemplo 2 - visualizar os diretorios e os arquivos **************** */
async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir){
    for (let file of files){
        //ira buscar o caminho absoluto do path
        const fileFullPath = path.resolve(rootDir, file);
        //ira identificar o conteudo do arquivo/diretorio
        const stats = await fs.stat(fileFullPath);

        //ira remover algumas pastas do fileFullPath
        if(/\.git/g.test(fileFullPath)) continue; //remover a pasta .git
        if(/node_modules/g.test(fileFullPath)) continue; //remover a pasta node_modules
        

        //ira mostrar o conteudo dos diretorios
        if(stats.isDirectory()){
            readdir(fileFullPath);
            continue;
        }

        //ira mostrar apenas as pastas css e html dentro do fileFullPath
        if(
            !/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)
            ) continue; 

        //console.log(fileFullPath, stats.isDirectory()); //ira verificar se o conteudo é diretorio = true 
        console.log(fileFullPath); //ira listar apenas o conteudo do fileFullPath
    }
};

//executar a funçao - ira visualizar os diretorios e os arquivos
readdir('/Users/daniele/javacript-workspace/');