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
  `
  Page += Table;
  Page += `
  * [License](#license)`;
  if (Data.installation !== '') {
  
  Page +=
  `
  ## Installation
  *What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.*
  ${Data.installation}`
  };
  // Optional Contributing section
  if (Data.contributing !== '') {
  `
  ## Contributing  
  ${Data.contributing}`
  };
  if (Data.tests !== '') {
  Page +=
  `
  ## Tests
  *Tests for application and how to run them:*
  ${Data.tests}`
  };
  Page +=
  `
  ## License
  ${Data.license}
  `;
  return Page;
  
}

module.exports = generate;