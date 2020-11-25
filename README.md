# DAVE-REGG-BLOG
> A personal blog created, programmed, and designed by Dave Regg. This blog may be reused by other developers as long as due credit is given. Developed using Gatsbyjs, Graphql, and Contentful-CMS. Users can peruse articles by category, or read them in sequential order.

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [License](#license)
* [Contact](#contact)

## General info
A Blog created with Gatsbyjs, Reactjs, Graphql, and Contentful-CMS. Content is created within the Contentful-CMS website. Netlify automatically rebuilds the server when new content is pushed to it. Graphql is queried and placed within a Gatsby template in order to render the content. Homepage is created with the five most recent articles. Readers may then go to the Blog page which renders paginated posts. Readers can search by category. Readers can navigate through content through buttons at the end of articles.

## Screenshots
![Homepage](./src/images/screenshots/homepage-11-06-2020.jpg)

## Technologies
* Node - version 12.3.1
* React - version 16.13.1
* Sass - version 1.26.5
* Gatsby - version 2.21.37
* React-Helmet - version 6.0.0

## Setup
1. Clone the repo
```sh
git clone https://github.com/drregg6/repository.git
```
2. Install NPM packages
```sh
npm install
```

## Features
List of features ready and TODOs for future development
* Gatsby uses Post template to render posts created by Contentful CMS
* Gatsby will query Graphql in order to search for categories and render a Blog template based on user search. Defaults to All Blog posts

To-do list:
* Include pagination to Category Blog template

## Status
Project is: _launched_ and to some degree completed, but not perfected. Check the [Todo List](#features). Check out the Live project here - [Dave Regg's Blog](https://blog.daveregg.com)

## Inspiration
The design is inspired by [this template on Gooyaabi](https://gooyaabitemplates.com/flamingo-blogger-template-2/)

## License
Distributed under the MIT License. See `LICENSE` for more information.

## Contact
Dave Regg - [@daveregg](https://www.twitter.com/daveregg) - dave.r.regg@gmail.com

Project Link: [Dave Regg's Blog Live](https://blog.daveregg.com) and [Dave Regg's Blog Code](https://github.com/drregg6/dave-regg-blog)