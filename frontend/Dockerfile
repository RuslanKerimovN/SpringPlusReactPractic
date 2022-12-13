FROM node:alpine3.15 AS BUILD
WORKDIR /usr/app/front
COPY ./ ./
RUN npm install && npm run build
#RUN npm run build

FROM nginx:1.22.1-alpine
COPY --from=BUILD /usr/app/front/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=BUILD /usr/app/front/nginx.conf /etc/nginx/conf.d
EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]