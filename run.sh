#!/usr/bin/env bash

imagetesta = $(docker inspect -f '{{.State.Running}}' docker-image-A);
imagetestb = $(docker inspect -f '{{.State.Running}}' docker-image-B);
imageremovea = $(docker rm -f docker-image-A);
imageremoveb = $(docker rm -f docker-image-B);
imageruna = $(docker run -d -p 8888:80 --name docker-image-A awsdevopro/php-app:1.1.1);
imagerunb = $(docker run -d -p 8383:80 --name docker-image-B awsdevopro/php-app:1.1.1);
#CheckPort = $(docker inspect docker-image-test | grep HostPort);
if [ $imagetesta = "true" ]
then
   $imagerunb && $imageremovea
else
   $imageruna
fi


# docker run -p ${EXTERNAL_PORT_NUMBER1}:${INTERNAL_PORT_NUMBER}