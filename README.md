# grunt-init-heroku

> Creates a Node.js server app for deployment on Heroku with [grunt-init][] based on the [grunt-init-epxress-mocha][].

[grunt-init]: http://gruntjs.com/project-scaffolding
[grunt-init-epxress-mocha]: https://github.com/nicroto/grunt-init-express-mocha

## Installation
If you haven't already done so, install [grunt-init][].

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use git to clone this template into that directory, as follows:

```
git clone git@github.com:nicroto/grunt-init-heroku.git ~/.grunt-init/heroku
```

_(Windows users, see [the documentation][grunt-init] for the correct destination directory path)_

## Usage

First you need to create your app on heroku. (Or if you already have one - just copy the app's name)

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init heroku
```

When prompted with *herokuAppName*, enter your app's name (**Be careful to enter the name correctly - it will be used when connecting to Heroku for deploy**).

After the project is created, you need to initialize it. You do this by running:

```bash
$ bash init.sh
```
This installs dependecies, as well as creates a build dir which is then synched-up to your heroku app.
**IMPORTANT** - your build dir is the place from which your heroku app is updated. This dir is ignored from your main git repository (check the .gitignore file) and this way you can have a single repo with server & client app (you don't need to have a separate git repo for your server) and what's even better - you can do some actual build work (templating, file copying and generation).

After your project is initialized, you can start developing your app.
The procedure is
 - Make changes;
 - from the root dir of your app, run the following commands

```bash
$ bash build.sh
$ bash deploy.sh
```

That's it! :)

_Note that this template will generate files in the current directory, so be sure to change to a new directory first if you don't want to overwrite existing files._
