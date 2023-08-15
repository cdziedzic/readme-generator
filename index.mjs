import inquirer from "inquirer";
import fs from "fs/promises";

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
            message: 'Please write any installation instructions for your project'
        },
         {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and/or examples for use'
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

let readmeText = `#  ${title}

## Project Description
${description}

## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions?)


### Installation
${installation}

### Usage 
${usage}

### License

${generateLicense(license)}

### Contributing
List of any collaborators will go here

### Tests
Any tests of the program can be entered into this area

### Questions?

[My github](github.com/${github})

E-mail: ${email}

`

    fs.writeFile('README.md',readmeText )

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