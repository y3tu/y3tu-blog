#!/bin/sh
echo 'build static resources'

npm install -g cnpm --registry=https://registry.npm.taobao.org
npm install
npm run build:prod

#yarn run build:prod
# kill old container
if docker ps | grep -i yao-blog
    then
        echo 'kill old container'
        docker kill yao-blog
fi

# remove old container
if docker ps -a | grep -i yao-blog
    then
        echo 'rm old container'
        docker rm yao-blog
fi

# remove old images
if docker images | grep docker_yao-blog:latest
    then
        echo 'remove old image'
        docker rmi docker_yao-blog:latest
fi

echo 'build image'
docker build --rm -t docker_yao-blog:latest .

#echo '开始推送镜像到docker hub ...'
#docker tag docker_yao-blog:latest y3tu/yao-blog:latest
#docker push y3tu/yao-blog:latest
#docker rmi y3tu/yao-blog:latest
#echo '镜像推送结束 end...'

#echo 'run docker container'
#docker run -d -p 8080:80 --name yao-blog -d docker_yao-blog:latest