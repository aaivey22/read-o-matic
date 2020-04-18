
// data is a peramiter of generateMarkdown
function generateMarkdown(data) {
  console.log(data);

  return `
## <img src="${data.data.avatar_url}" alt="avatar" style="border-radius: 16px" width="30" />  ${data.data.login}

# <h1 align="center"> ${data.title} </h1>
<h3 align="center"> ${data.description} </h3>

## Snapshot
<img src="${data.imageSource}" alt="${data.title} image" />
<img src="${data.gif}" alt="${data.title} image" />

<br/>
<br/>

## Table of Contents
${data.badge}
* [Features](#features)
* [Tools](#tools)
* [Installation](#installation) 
* [Collaborators](#collaborators)
* [Contact](#data.data.name)
* [License](#license)

<br/>
<br/>

## Features

<br/>
<br/>

## Tools Used
${data.tools}

<br/>
<br/>

## Installation
### To install ${data.title} folow these steps:

\`\`\`
${data.installation}
\`\`\`

<br/>
<br/>

***
## Contact
### ${data.data.name}
### ${data.email}
***

*@ University of Richmond Coding Bootcamp 2020, Richmond, VA.*
`;
}

module.exports = generateMarkdown;
