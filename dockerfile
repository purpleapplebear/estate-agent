#Dockerfile
FROM node:18-alpine as build

#Install the app
WORKDIR /app

# ENV PATH /app/node_modules/.bin:$PATH 
COPY package.json .
# COPY package-lock.json .
RUN npm install

#Builf the app
COPY . .
RUN npm run build

#Create nginx server and copy build there
FROM nginx:1.19-alpine

ENV REACT_APP_MY_VAR=http://public-lb-tf-001fda8b2d93bd11.elb.us-west-2.amazonaws.com:8080

COPY ./docker-entrypoint.sh /docker-entrypoint.sh
COPY --from=build /app/dist /usr/share/nginx/html

#CMD [ "npm", "run", "preview" ]