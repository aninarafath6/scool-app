# Scool App
_Description here_
### Libraries used
1. [Next.js](https://nextjs.org/)
2. [Typescript](https://www.typescriptlang.org/) for type checking
3. [Tailwindcss](https://tailwindcss.com/) for styling

### Tools used
1. [ESlint](https://eslint.org/) for lint
2. [Prettier](https://prettier.io/) for formatting
3. [Husky](https://typicode.github.io/husky/#/) for pre-commit hook
4. [lint-staged](https://github.com/okonet/lint-staged#readme) to run git hook only on staged files
5. [redux-toolkit](https://redux-toolkit.js.org/) for global state management
6. [storybook](https://storybook.js.org/) from isolated development and visual testing

### Preferred tools
1. Code editor [VS Code](https://code.visualstudio.com/)
2. [Yarn](https://yarnpkg.com/) as package manager

### Folder structure

#### `elements`
It will have all the basic elements like buttons, text types, etc.

#### `components`
The composition of elements and redux connections for pages happen here. Each sub directories will have the same name as _page_ and the name is pascal-cased. 

#### `pages`
Next.js [page](https://nextjs.org/docs/basic-features/pages) directory.

#### `redux`
All redux related files are added here. We will have page level slices, under the _slices_ directory. Upon adding a new slice, make sure you update the root reducer at `redux/store.js`.

### Commands

```
# start dev server
yarn dev

# create prod build
yarn build 

# start application in production mode
yarn start 

# lint code
yarn lint 
```
### Links
[Design](https://www.figma.com/file/N6qQh31qddBEpDgZ7sWTZC/Scool-Master-(Copy)?node-id=0%3A1)
