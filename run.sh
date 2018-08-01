#!/usr/bin/env bash
if [ $(docker inspect -f '{{.State.Running}}' docker-image-test) = "true" ]; then 
     
      docker rm -f docker-image-test && docker run -p 8888:80 -d --name docker-image-test awsdevopro/php-app:1.1.1;
 
                else 
                       docker run -p 8888:80 -d --name docker-image-test awsdevopro/php-app:1.1.1; 

fi

