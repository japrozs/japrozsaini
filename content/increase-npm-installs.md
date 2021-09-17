---
slug: increase-npm-installs
title: How to increase NPM downloads for your package
description: How to increase the NPM downloads of your package and increase its credibility, so NPM recommends it to more people
date: 17-September-2021
---

## What is npm

NPM is a package manager for the JavaScript programming language maintained by npm, Inc. npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.

## How to create a package

There are many tutorials out there on how you can create your own NPM package, just like [this one](https://www.section.io/engineering-education/npm-packages/)

## How NPM measures downloads

NPM measures the downloads of your package, not on the basis of how many people install your package, but how many times NPM fetches the page of your npm registry which is them uses to download your package. So, if you were to fetch the pages again and again, theoretically, you could increase the downloads of your package.

## The script

```javascript
//https://registry.npmjs.org/nlr/-/nlr-0.0.1.tgz
const axios = require("axios");
var a = 0;
setInterval(addDL, 1);

function addDL() {
    axios
        .get("https://registry.npmjs.org/nlr/-/nlr-0.0.1.tgz")
        .then((response) => {
            a++;
            console.log(`Added ${a} Downloads!\n`);
        });

```

To use this script, just change the name to your package name
