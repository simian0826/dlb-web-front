#!/bin/sh
DEPLOY_HOME=`pwd`
FRONT_DIST_HOME=$DEPLOY_HOME/../dist
ASSETS_DIST_FILE='assets.tar.gz'

echo 'start building ...'

mkdir -p $FRONT_DIST_HOME
cd $FRONT_DIST_HOME

echo 'enter FRONT_DIST_HOME : ' `pwd`
FRONT_DIST_HOME=`pwd`
rm -rf $FRONT_DIST_HOME/$ASSETS_DIST_FILE

echo build env is : `basename $1`
BUILD_ENV=`basename $1`
echo build env is : $BUILD_ENV

cd ..
echo 'start build front assets'
cnpm install
if [ $BUILD_ENV = "devprod" ]; then
   npm run devprod
elif [ $BUILD_ENV = "itg" ]; then
   npm run itg
elif [ $BUILD_ENV = "prod" ]; then
   npm run build
else
   npm run itg
fi #ifend

echo 'start assembly front assets'
cd $FRONT_DIST_HOME
tar -zcvf $ASSETS_DIST_FILE ./*
cp $ASSETS_DIST_FILE $DEPLOY_HOME/docker
