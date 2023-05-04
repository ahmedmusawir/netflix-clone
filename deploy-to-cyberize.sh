#!/usr/bin/bash

LOCAL_PROJECT="portfolio-3d-react"
PLESK_PROJECT="themoose.cyberizestaging.com"

# using gitbash on windows
SOURCE="/c/Users/The Moose/c
REACT_APPS_ON_WINDOWS/$LOCAL_PROJECT/dist"
TARGET="root@cyberizestaging.com:/var/www/vhosts/cyberizestaging.com/$PLESK_PROJECT"
REMOTE_FOLDER="/var/www/vhosts/cyberizestaging.com/$PLESK_PROJECT/*"

echo "--------------------------------------"
echo "Building the App..."
echo "--------------------------------------"
npm run build
echo "--------------------------------------"
echo "Removing old files..."
echo "--------------------------------------"
ssh root@cyberizestaging.com "rm -rf $REMOTE_FOLDER"


echo "--------------------------------------"
echo "Transfering new files..."
echo "--------------------------------------"
#echo "scp -r $SOURCE/* $TARGET/"
scp -r $SOURCE/* $TARGET/

echo "--------------------------------------"
echo "File transfer complete!"
echo "--------------------------------------"