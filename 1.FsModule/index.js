const fs = require("fs");

//console.log(fs);

fs.writeFile('demo1.txt', "This is a sample text", (err) => {
    if (err) {
        console.log(err);
    }
    else{
    console.log("The file has been saved!");
    }  
})

//cd FSModule
//node index

fs.appendFile('demo1.txt', "My name is Roxim", (err) => {
    if (err) {
        console.log(err);
    }
    else{
    console.log("The file has been saved!");
    }  
})
//this will just add new content to the existing file

fs.readFile('demo1.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    else{
    console.log(data);
    }  
})//this will real the file

fs.rename('demo2.txt', 'demo2.txt', (err) => {
    if (err) {
        console.log(err);
    }
    else{
    console.log("The file has been renamed!");
    }  
})//this will rename demo1.txt to demo2.txt

fs.unlink('demo2.txt', (err) => {
    if (err) {
        console.log(err);
    }
    else{
    console.log("The file has been deleted!");
    }  
})//this will delete demo2.txt

fs.exists('demo1.txt', (exists) => {     
    if (exists) {
        console.log("The file exists!");
    }
    else{
        console.log("The file does not exist!");
    }  
})//this will check if demo1.txt exists
//recomanded not to use


