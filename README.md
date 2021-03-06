<h1 align="center">
  <img src=".github/logo.png" alt="Logo"><br /><br />
  <img src=".github/people.png" alt="Logo Image" height="200">
</h1>

<h3 align="center">
  Ecoleta - The easiest way to throw away your trash
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/filipebteixeira98/ecoleta-api?color=%2334CB79">
  <a href="https://www.linkedin.com/in/filipebteixeira98/"><img alt="Made by" src="https://img.shields.io/badge/made%20by-Filipe%20Teixeira-%2334CB79"></a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/filipebteixeira98/ecoleta-api?color=%2334CB79">
  <a href="https://github.com/filipebteixeira98/ecoleta-api/commits/master"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/filipebteixeira98/ecoleta-api?color=%2334CB79"></a>
  <a href="https://github.com/filipebteixeira98/ecoleta-api/issues"><img alt="Repository issues" src="https://img.shields.io/github/issues/filipebteixeira98/ecoleta-api?color=%2334CB79"></a>
  <img alt="GitHub" src="https://img.shields.io/github/license/filipebteixeira98/ecoleta-api?color=%2334CB79">
</p>

<p align="center">
  <a href="#recycle-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<img alt="Layout" src=".github/mockup.png">

## :recycle: About the project

This project was developed on the Next Level Week event by [Rocketseat](https://rocketseat.com.br/) &nbsp;🚀&nbsp;💜

With the idea to help world ecosystem, this software provides a flow to create recyclable garbage collection points and show in a map around you. In the end, you can send a text message using the whatsapp or an email, and make the world better witout trash.

## 🚀 Technologies

Technologies that I used to develop this application

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Knex](http://knexjs.org/)
- [SQLite](https://www.sqlite.org/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/)

**Clone the project and access the folder**

```bash
$ git clone https://github.com/filipebteixeira98/ecoleta-api.git && cd ecoleta-api
```

**Install dependencies**

```bash
$ npm install
```

**Follow the steps below**

```bash
# Use the script to run the migrations
$ npm run knex:migrate

# Use the script to run the seeds
$ npm run knex:seed

# To finish, run the api service
$ npm run dev

# Well done, project is started!
```

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork filipebteixeira98/ecoleta-api
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd ecoleta-api

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜&nbsp; by Filipe Teixeira 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/filipebteixeira98/)
