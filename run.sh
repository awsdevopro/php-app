#!/usr/bin/env bash

ImageTestA = $(docker inspect -f '{{.State.Running}}' docker-image-A);
ImageTestB = $(docker inspect -f '{{.State.Running}}' docker-image-B);
ImageRemoveA = $(docker rm -f docker-image-A);
ImageRemoveB = $(docker rm -f docker-image-B);
ImageRunA = $(docker run -d --name docker-image-A awsdevopro/php-app:1.1.1);
ImageRunB = $(docker run -d --name docker-image-B awsdevopro/php-app:1.1.1);
#CheckPort = $(docker inspect docker-image-test | grep HostPort);
if [ $ImageTestA == "true" ]; then
     $ImageRunB && $ImageRemoveA;
elif [ $ImageTestB == "true" ]; then
                  $ImageRunA && $ImageRemoveB;
else
$ImageRunA
fi


# docker run -p ${EXTERNAL_PORT_NUMBER1}:${INTERNAL_PORT_NUMBER}