#!/usr/bin/env bash

ImageTest = $(docker inspect -f '{{.State.Running}}' docker-image-A);
ImageRemoveA = $(docker rm -f docker-image-A);
ImageRemoveB = $(docker rm -f docker-image-B);
ImageRunA = $(docker run -d --name docker-image-A awsdevopro/php-app:1.1.1);
ImageRunB = $(docker run -d --name docker-image-B awsdevopro/php-app:1.1.1);
#CheckPort = $(docker inspect docker-image-test | grep HostPort);
if [ $ImageTest = "true" ]; then
     $ImageRunB && $ImageRemoveA;
else
                  $ImageRunA && $ImageRemoveB;
fi


# docker run -p ${EXTERNAL_PORT_NUMBER1}:${INTERNAL_PORT_NUMBER}