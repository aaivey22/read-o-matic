
// data is a peramiter of generateMarkdown
function generateMarkdown(data, answers) {
  return `
<img src=${data.avatar_url}>
# ${data.name}
# ${data.login}
# ${answers.email}

# ${answers.title}
${answers.description}

## Tools Used
${answers.tools}

## Features

## Snapshot
${answers.imageSource}

## Installation Command
${answers.installation}

## Table of Contents
* [Installation](#installation) 
* [License](#license)
* [Collaborators](#collaborators)

\`\`\`
${answers.installation}
\`\`\`

*@ University of Richmond Coding Bootcamp 2020, Richmond, VA.*
`;
}

module.exports = generateMarkdown;
