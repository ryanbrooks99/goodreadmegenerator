// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

## Description

${data.description}

## Table of Contents

*[Installation](#installation)

*[Usage](#usage)

*[License](#license)

*[Contribution](#contribution)

*[Tests](#tests)

*[Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

![github license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Contribution

${data.contribution}

## Tests

${data.test}

## Questions

If you have any questions about the repo please contact me at: ${data.email}

You can find out more about me at [${data.username}](https://github.com/${data.username}/)
`;
}

module.exports = generateMarkdown;
