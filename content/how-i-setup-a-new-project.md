---
slug: how-i-setup-a-new-project
title: How I setup a new project
description: How to setup a new project so that you can manage your code easily.
date: 16-August-2021
---

Recently, I started working on a project called [Vent](https://github.com/japrozs/vent) ans I was having a lot of fun coding it.

# 🚀 Setup

I started setting up my project by creating a `yarn` workspaces and `lerna` and usually setup the folder structure as follows:

`app` - `React Native` app
`server` - Backend code made with `GraphQL`
`.github` - Github Workflows and other customization for `github`
`.vscode` - VSCode configuration files

# 🚀 Flow

I generally start with the backend for the project, by writing the schemas and then I move forward to the frontend or the mobile app.

After coding the entire project, I try to add some new features before committing it to `Github` and deploying it.

# 🚀 Deployment

For deployment, I deploy my backend in containers for `postgres`, `redis`, `graphql-server` and I deploy my frontend application to `Vercel` if it is a web app or to app store if it is a `react-native` app.

# 🚀 Post Deployment

After that, I create blog posts about my project on [ProductHunt](producthunt.com) .
