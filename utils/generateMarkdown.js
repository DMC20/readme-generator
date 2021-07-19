// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''
  } else if ( license === 'GNU') {
    return ` ### ${license}
    Permissions of this strongest copyleft license are conditioned on making available 
    complete source code of licensed works and modifications, which include larger works using a 
    licensed work, under the same license. Copyright and license notices must be preserved. Contributors 
    provide an express grant of patent rights. `
  } else if (license === 'Apache 2.0') {
    return ` ### ${license} 
    A permissive license whose main conditions require preservation of copyright and license notices. 
    Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may 
    be distributed under different terms and without source code.`
  } else if (license === 'MIT') {
    return ` ### ${license} 
    A short and simple permissive license with conditions only requiring preservation of copyright and license notices. 
    Licensed works, modifications, and larger works may be distributed under different terms and without source code.` 
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation] (#installation)
  - [Usage] (#usage)
  - [Contributors] (#contributors)
  - [License] (#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## Contributors
  ${data.contributors}

  ## Test
  ${data.test}

  ## License 
  // license badge
  // license link
  Licensed with ${data.license}
  

  ## Questions
  ### If you have any questions, please feel free to reach out to me directly on the links provided:
  ### Github: 
  ### Email: ${data.email}




`;
}

module.exports = generateMarkdown;
