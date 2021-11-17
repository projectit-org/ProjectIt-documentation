# ProjectIt Documentation

This project contains the sources for all documentation on [ProjectIt](https://github.com/projectit-org/ProjectIt). It is powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a documentation website

Create the website using (either npm or yarn will work) and browse through it.

```bash
# create the content for navigation tree, check the internal links, and include the code fragments
yarn prepare

# create the website in the directory 'build'
yarn run build

# preview the website
yarn run preview
```
> Note: preview should _not_ be used to serve your website in production.
## Developing

During development, you can use the following commands.
```bash
# create the website and serve it on localhost:3000
yarn run dev

# or start the server and open the app in a new browser tab
yarn run dev -- --open
```
