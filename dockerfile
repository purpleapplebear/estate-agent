# # build environment
# FROM node:latest as build
# WORKDIR /app
# ENV PATH /app/node_modules/.bin:$PATH
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install
# COPY . ./
# RUN npm run dev

# # production environment
# FROM nginx:stable-alpine
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

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
ENV REACT_APP_MY_VAR=FromDockerFile

COPY ./docker-entrypoint.sh /docker-entrypoint.sh
COPY --from=build /app/dist /usr/share/nginx/html


# CMD [ "npm", "run", "preview" ]