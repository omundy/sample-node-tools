


# Sample Node Tools 🦋

Demonstrates

- How to structure a static website with Javascript ***in the browser*** that also uses Node for automation
- How to use Node to create a test web server thus avoiding CORS issues with external data on localhost
- How to use Node to create a proxy server to avoid CORS issues on the frontend
- How to use Node to import CSV, convert to JSON, and write to a `.json` file
- How to use Node to import data from [Google Sheets](https://developers.google.com/sheets/api)
- How to create a file for secure, platform-specific, data and ignore it with Git


## Projects / tools in this repository

1. Static website: e.g. `/index.html` and `/assets/*` which uses external data
1. To convert CSV to JSON data: In `node-projects/convert-csv-to-json/`, use `node index.js`
1. Node test server to call `fetch()` and import data from the same origin, avoiding CORS issues





## How to run the test server

The test server inside `node-projects/test-server/` sets the entire project Git repository folder "public" so that

- All assets (e.g. [`node-projects/convert-csv-to-json/data.json`](https://localhost:3000/node-projects/convert-csv-to-json/data.json)) can be accessed via their expected paths in your code without CORS issues
- When you finish your project and put it on a live server (e.g. Github.io) the paths will still work
- If you access files via `file:///path/to/project/index.html` then `fetch()` will fail because of CORS

1. Change to server directory `cd node-projects/test-server/` (you must run from this directory)
1. Start the server `node server.js`
1. View `/index.html` at https://localhost:3000/







## How to hide sensitive data

To keep from committing files with sensitive data into your repo just copy and paste the names of these file to the `.gitignore`.

1. Create a `.gitignore` file
1. Add the names of the files to the `.gitignore`

```
credentials.json
token.json
```

This is a common method for securing platform-specific data, and could be done with any type of file. Is it common across node developers to use an `.env` (short for "environment") file. Check out this article [Here’s how you can actually use Node environment variables](https://www.freecodecamp.org/news/heres-how-you-can-actually-use-node-environment-variables-8fdf98f53a0a/)
