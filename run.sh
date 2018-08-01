#!/usr/bin/env bash

ImageTestA = $(docker inspect -f '{{.State.Running}}' docker-image-A);
ImageTestB = $(docker inspect -f '{{.State.Running}}' docker-image-B);
ImageRemoveA = $(docker rm -f docker-image-A);
ImageRemoveB = $(docker rm -f docker-image-B);
ImageRunA = $(docker run -d -p 8888:80 --name docker-image-A awsdevopro/php-app:1.1.1);
ImageRunB = $(docker run -d -p 8383:80 --name docker-image-B awsdevopro/php-app:1.1.1);
#CheckPort = $(docker inspect docker-image-test | grep HostPort);
if [ $ImageTestA = 'yes' ] then
     $ImageRunB && $ImageRemoveA
else
$ImageRunA
fi


# docker run -p ${EXTERNAL_PORT_NUMBER1}:${INTERNAL_PORT_NUMBER}