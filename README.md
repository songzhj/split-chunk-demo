## [splitChunks scripts not added in html](https://github.com/just-jeb/angular-builders/issues/738)

### Problem
When I use `custom-webpack`, I add `splitChunks` config in `extra-webpack.config.js`.

It's OK when I run in dev server (`npm run start`), but when I build it in production(`npm run build:prod`), chunks scripts did not inject to index.html.

### Screenshots

html script in dev server: [image](./img/dev.png)

html script in production: [image](./img/prod.png)
