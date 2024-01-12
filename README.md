# Portfolio Server

Server backend of my portfolio website. This server provides the sole
functionality of sending a message when the contact form of the
[portfolio client frontend][portfolio client] is submitted.

[![Node][node shield]][node website]
[![TypeScript][typescript shield]][typescript website]
[![Express][express shield]][express website]
[![npm][npm shield]][npm website]
![Git][git shield]
[![GitHub][github shield]][github repo]

## Contact route

This package contains a single POST route at `/contact` that accepts a JSON
request and uses it to compose an email to be sent.

## Scripts

Below are the provided npm scripts this package provides:

- `npm run dev`

    Starts a local web server appropriate for development.

- `npm run build`

    Compiles the TypeScript source code into a production distributable ready format.

- `npm start` and `npm run start`

    Runs the production distributable ready compiled source code server.

[portfolio client]: https://github.com/SnapperGee/portfolio-client "Portfolio Client"
[node shield]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white "node"
[node website]: https://nodejs.org/en/about "node"
[typescript shield]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white "TypeScript"
[typescript website]: https://www.typescriptlang.org/ "TypeScript"
[express shield]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB "Express"
[express website]: https://expressjs.com/ "Express"
[npm shield]: https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white "npm"
[npm website]: https://www.npmjs.com/ "npm"
[git shield]: https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white "Git"
[github shield]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white "github"
[github repo]: https://github.com/SnapperGee/portfolio-server "GitHub repo"
