FROM node:lts-alpine

WORKDIR /backend

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3333
CMD [ "npm", "run", "dev" ]
