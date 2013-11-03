#!/bin/bash
# init the project

# install all dependencies
cd source/
npm install

# get build repository
cd ..
mkdir build
cd build
git init

# setup deploy to heroku
heroku git:remote -a {%= herokuAppName %}

# get the repo localy
git pull heroku master