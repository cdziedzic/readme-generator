import inquirer from "inquirer";
import fs from "fs/promises";


// ask the user for the information needed to create the readme
let {title, description, installation, usage, license, github, email} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project'
        },
         {
            type: 'input',
            name: 'description',
            message: 'Write a description of your project:'
        },
        {
            type: "list",
            name: "license",
            message: "Which license would you like to use?",
            choices: ['MIT', 'Apache license 2.0', 'Mozilla Public License 2.0'] 
        },
         {
            type: 'input',
            name: 'installation',
            message: 'Please write any installation instructions for your project: '
        },
         {
            type: 'input',
            name: 'usage',
            message: 'Provide an example of the how the program should be used: '
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your github profile name'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail address?'
        },


    ])


//Text of the reademe file that will be written into the document
    let readmeText = `#  ${title}

## Project Description
${description}

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


### Installation
${installation}

### Usage 
${usage}

### License

${generateLicense(license)}

### Contributing
Add any collaborator information here

### Tests
Any tests of the program can be entered into this area

### Questions

[My github](github.com/${github})

E-mail: ${email}

`
//create the readme.MD file
    fs.writeFile('README.md',readmeText )


//check which license the user selected and link to the badge image
    function generateLicense(license) {
if (license === 'MIT') {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
}

if (license === 'Apache License 2.0') {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
}

else {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
}

}