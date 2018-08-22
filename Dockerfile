FROM nginx:1.13.3

COPY dist/ /usr/share/nginx/html
COPY docker-entrypoint.sh /

ENV ENV_FILE_PATH=static/config/fuzhou/env.js

WORKDIR /usr/share/nginx/html

EXPOSE 80

CMD ["/docker-entrypoint.sh"]
