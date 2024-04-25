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

EXPOSE 80
ENV REACT_APP_MY_VAR=loadbalancer-977948301.eu-west-2.elb.amazonaws.com:8080

COPY ./docker-entrypoint.sh /docker-entrypoint.sh
COPY --from=build /app/dist /usr/share/nginx/html


# CMD [ "npm", "run", "preview" ]