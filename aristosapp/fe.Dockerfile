FROM nginx:1.17.0-alpine
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY /dist/apps/ng-sif /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
