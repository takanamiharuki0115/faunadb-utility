module.exports = {
  figlet: `
__                            _ _                 _   _ _ _ _         
/ _|                          | | |               | | (_) (_) |        
| |_ __ _ _   _ _ __   __ _  __| | |__ ______ _   _| |_ _| |_| |_ _   _ 
|  _/ _\` | | | | '_ \\ / _\` |/ _\` | '_ \\______| | | | __| | | | __| | | |
| || (_| | |_| | | | | (_| | (_| | |_) |     | |_| | |_| | | | |_| |_| |
|_| \\__,_|\\__,_|_| |_|\\__,_|\\__,_|_.__/       \\__,_|\\__|_|_|_|\\__|\\__, |
                                                                  __/ |
                                                                  |___/ 
`,
  root_license: `[![npm version](https://badge.fury.io/js/faunadb-utility.svg)](https://badge.fury.io/js/faunadb-utility)`,
  root_header: `
## Installation
\`\`\`
npm install faunadb-utility
\`\`\`
or
\`\`\`
yarn add faunadb-utility
\`\`\`
`,
  root_body: `

## Usage
\`\`\`ts
import fauna from "faunadb-utility"
\`\`\`

\`\`\`js
const fauna = require('faunadb-utility');
\`\`\`

### Functions

- \`createFaunaDocument\` : Create a fauna document.
- \`deleteFaunaDocument\` : Delete a fauna document.
- \`faunaClient\` : Create a fauna client.
- \`queryAllByFaunaIndexes\` : Query all documents by fauna indexes.
- \`queryTermByFaunaIndexes\` : Query documents by fauna indexes and term.
- \`updateFaunaDocument\` : Update a fauna document.

`,
  root_footer: `## Don't hesitate to contribute to this project.`,
  ignore_gitFiles: true,
  ignore_gitIgnoreFiles: true,
  ignore_files: ['.github', '.vscode']
}
