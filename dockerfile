# build front-end
FROM node:18-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5173
CMD [ "npm", "run", "preview"]