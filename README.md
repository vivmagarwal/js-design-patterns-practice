# An HTML SCSS and JAVASCIPT Playground for developers.

I prefer this against online platforms for four main reasons :
1. Its easier to use browsers dev tools to debug things
2. Its closer to real world
3. Live reload / refresh is a real time saver
4. I can use my favourite text editors live templates / snippets while practicing

recommended node version : Version 12 LTS (We recommend NVM)

setup :
clone the repository
run `npm install`

once install completes

Use one of the following commands for running and watching javascript:

`npm run watch`  for browser using `gulp`.

`npm run watch:node script.js` for node using `nodemon`.

index.html and script.js is used as it is. 

JS files are not processed because most browsers supports latest JS features. In case you are an IE-11 user - you may consider using https://github.com/drupalastic/HTML-SCSS-JS-Starterkit 

style.scss will be compiled to style.css. Browser will refresh automatically on change. 

### Generate Pages 
```
npm run gp page-name
```
the `gp` (`generate:page`) command generates an html page along with its own js and scss file. the js and the scss file inside the page directory is specific to the html. a link to the page is automatically placed in the index page.

by default the generated page has some basic styles. if you dont need them use `gp:nostyle`