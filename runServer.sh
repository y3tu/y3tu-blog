#!/bin/sh
if docker ps | grep -i yao-blog
    then
        echo 'kill old container'
        docker stop yao-blog
fi

# remove old container
if docker ps -a | grep -i yao-blog
    then
        echo 'rm old container'
        docker rm yao-blog
fi

# remove old images
if docker images | grep -i yao_yao-blog:latest
    then
        echo 'remove old image'
        docker rmi y3tu-docker.pkg.coding.net/yao/yao/yao_yao-blog:latest
fi

docker pull y3tu-docker.pkg.coding.net/yao/yao/yao_yao-blog:latest
docker run -d -p 80:80 --name yao-blog y3tu-docker.pkg.coding.net/yao/yao/yao_yao-blog:latest