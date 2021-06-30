const fs = require('fs');//require fs
const path = require('path'); //require path

const htmlPath = path.resolve(__dirname, "../dist");
//this function pulls the html together for the given roles and will be called in our index.js
//filter through the array and find the index that has the method getRole() that returns the given role name. once we have the index, then call its render function
//this will ready our html with the correct values
const render = employees => {
    const readerHTML = [];
    readerHTML.push(employees.filter(employee => employee.getRole() == 'Manager').map(manager => renderManager(manager)).join(''));
    readerHTML.push(employees.filter(employee => employee.getRole() == 'Engineer').map(engineer => renderEngineer(engineer)).join(''));
    readerHTML.push(employees.filter(employee => employee.getRole() == 'Intern').map(intern => renderIntern(intern)).join(''));
    return renderStart(readerHTML.join(""));
};

const renderManager = manager => {
    let starter = fs.readFileSync(path.resolve(htmlPath, "manager.html"), "utf8");
    starter = addText(starter, "name", manager.getName());
    starter = addText(starter, "role", manager.getRole());
    starter = addText(starter, "email", manager.getEmail());
    starter = addText(starter, "id", manager.getId());
    starter = addText(starter, "officeNumber", manager.getOfficeNumber());
    return starter;
};
const renderEngineer = engineer => {
    let starter = fs.readFileSync(path.resolve(htmlPath, "engineer.html"), "utf8");
    starter = addText(starter, "name", engineer.getName());
    starter = addText(starter, "role", engineer.getRole());
    starter = addText(starter, "email", engineer.getEmail());
    starter = addText(starter, "id", engineer.getId());
    starter = addText(starter, "github", engineer.getGithub());
    return starter;
};
const renderIntern = intern => {
    let starter = fs.readFileSync(path.resolve(htmlPath, "intern.html"), "utf8");
    starter = addText(starter, "name", intern.getName());
    starter = addText(starter, "role", intern.getRole());
    starter = addText(starter, "email", intern.getEmail());
    starter = addText(starter, "id", intern.getId());
    starter = addText(starter, "school", intern.getSchool());
    return starter;
};
const renderStart = html => {
    let starter = fs.readFileSync(path.resolve(htmlPath, "starter.html"), "utf8");
    return addText(starter, 'team', html);
    
    
}
const addText = (starter, placeholder, value) => {
    const parser = new RegExp("{{ " + placeholder + " }}", "gm");
    return starter.replace(parser, value);
}

module.exports = render;