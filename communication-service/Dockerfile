FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY index.js .

RUN mkdir -p /app/logs

EXPOSE 3002

CMD ["npm", "start"]
