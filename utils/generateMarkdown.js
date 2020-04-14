
// data is a peramiter of generateMarkdown
function generateMarkdown(data) {
  console.log(data);

  return `
# <img src="${data.data.avatar_url}" /> # ${data.data.name}

# ${data.data.login}
# ${data.email}

# ${data.title}
${data.description}

## Tools Used
${data.tools}

## Features

## Snapshot
${data.imageSource}

## Installation Command
${data.installation}

## Table of Contents
* [Installation](#installation) 
* [License](#license)
* [Collaborators](#collaborators)

\`\`\`
${data.installation}
\`\`\`

*@ University of Richmond Coding Bootcamp 2020, Richmond, VA.*
`;
}

module.exports = generateMarkdown;
