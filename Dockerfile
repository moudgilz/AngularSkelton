FROM nginx:1.13.7-alpine

COPY dist/AngularSkelton /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
