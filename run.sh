#!/usr/bin/env bash

# ImageTest = $(docker inspect -f '{{.State.Running}}' docker-image-test);
ImageRemoveA = $(docker rm -f -p 8888:80 docker-image-test);
ImageRemoveB = $(docker rm -f -p 8383:80 docker-image-test);
ImageRunA = $(docker run -p 8888:80 -d --name docker-image-test awsdevopro/php-app:1.1.1);
ImageRunB = $(docker run -p 8383:80 -d --name docker-image-test awsdevopro/php-app:1.1.1);
CheckPort = $(docker inspect docker-image-test | grep HostPort);
if [ $CheckPort == "8888" ]; then
     $ImageRunB && $ImageRemoveA;
else
                  $ImageRunA && $ImageRemoveB;
fi


# docker run -p ${EXTERNAL_PORT_NUMBER1}:${INTERNAL_PORT_NUMBER}