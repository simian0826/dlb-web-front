FROM konghangdocker/nginx-cnpm:latest

# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
	ln -sf /dev/stderr /var/log/nginx/error.log

COPY deploy/docker/nginx /etc/nginx

WORKDIR /app

COPY ./package.json /app/

RUN cnpm install

COPY . /app/

ARG APP_ENV
ARG TZ

CMD ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone && npm run ${APP_ENV} && mkdir /usr/share/nginx/html/faq && cp -r dist/* /usr/share/nginx/html/faq && nginx -g 'daemon off;'
