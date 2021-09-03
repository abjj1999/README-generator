const { clear } = require("console");

function generate(Data) {

  
  let Table = `## Table of Contents`;

  if (Data.installation !== '') { Table += `
  * [Installation](#installation)` };

  if (Data.contributing !== '') { Table += `
  * [Contributing](#contributing)` };

  if (Data.tests !== '') { Table += `
  * [Tests](#tests)` };
  let Page = 
  `# ${Data.title}
  ## Description 
  ${Data.description}


  
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${Data.username}/${Data.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${Data.username}/${Data.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  `
  let installation= `
  ## Installation
  *Provide a step-by-step description of how to get the development environment running.
  ${Data.installation}
  `
  let license = `
  ## License
  ${Data.license};
  `
  let feature = `
  ## Features
  ${Data.feature}
  `
  let test = `
  ## Test
  ${Data.tests}
  `

  Page += Table;
  Page += installation;
  Page += license;
  Page += feature;
  Page += test;
  return Page;
}

module.exports = generate;