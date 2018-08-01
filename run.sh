#!/usr/bin/env bash
ImageTest = $(docker inspect -f '{{.State.Running}}' docker-image-test);
ImageRemove = $(docker rm -f docker-image-test);
ImageRun = $(docker run -p 8888:80 -d --name docker-image-test awsdevopro/php-app:1.1.1);
if [ $ImageTest = "true" ]; then
     $ImageRemove && $ImageRun;
             else
                  $ImageRun;
fi
