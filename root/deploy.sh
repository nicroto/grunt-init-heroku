#!/bin/bash
# deploy to heroku

cd build

# commit all
git add --all
git commit -m "ready for deploy"

# deploy
git push heroku master