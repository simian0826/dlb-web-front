# Docker build

# Docker构建
## operation front
docker build  -f Dockerfile -t registry.cn-hangzhou.aliyuncs.com/yywh/operation-faq-front:1.0 .

docker run -d --name faq-test -p 9111:80  -e TZ=Asia/Shanghai registry.cn-hangzhou.aliyuncs.com/yywh/operation-faq-front:1.0
