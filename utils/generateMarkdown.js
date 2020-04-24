
// data is a peramiter of generateMarkdown
function generateMarkdown(data) {
  console.log(data);

  return `
## <img src="${data.data.avatar_url}" alt="avatar" style="border-radius: 50px" width="75" />  ${data.data.login}

# <h1 align="center"> ${data.title} </h1>
<h3 align="center"> ${data.description} </h3>

---

<br/>


## Table of Contents
${data.badge}
* [Technologies](#technologies)
* [Installation](#installation) 
* [Collaborators](#contact)
* [Contact](#contact)
* [License](#license)

<br/>

---

## Snapshot
<img src="${data.imageSource}" alt="${data.title}" style="border-radius: 20px" />

<br/>

<img src="${data.gif}" alt="${data.title}" style="border-radius: 20px" />

<br/>
<br/>

---

## Technologies
${data.technologies}

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
### ${data.collaborators}
## <img src="${data.data.avatar_url}" alt="avatar" style="border-radius: 20px" width="30" />  ${data.data.login}
### ${data.data.name}
### ${data.email}
***

*@ University of Richmond Coding Bootcamp 2020, Richmond, VA.*
`;
}

module.exports = generateMarkdown;
