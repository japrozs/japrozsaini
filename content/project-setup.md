---
slug: project-setup
title: How I setup a new full stack project
description: How I setup a new full stack projcet using typescript for the server and the react native app.
date: 30-August-2021
---

### Intro

I just created a [git repository](https://github.com/japrozs/ts-project-setup) about my latest boilerplate setup whenever I start a new projcet. It uses the following technologies

-   Redis
-   NodeJS
-   Express
-   Apollo GraphQL
-   TypeORM
-   Postgres

### For the react native app

-   @apollo/client
-   GraphQL Code generator
-   Expo
-   React Navigation

### How the code works

Even though I have explained in the git repo abouthow to start the server, i'll go through that briefly to tell you how it all works. Mainly, I've got a nodejs server, on top of which sits a graphql server alongside a redis server. The job of the redis server is to manage caching and sessions while the GraphQL API is used to handle queries and mutations.

This is how it all comes together

```bash
app
|_ expo
|_ @apollo/client
|_ @graphql-codegen (GraphQL Code generator)

server
|_ express server
	|	|_ apollo server
	|	|_ redis server
	|_  nodemailer to send requests and responses
```
