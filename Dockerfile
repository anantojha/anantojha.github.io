FROM node:16-alpine

WORKDIR /app

COPY . /app

RUN npm install --legacy-peer-deps

RUN npm run build

EXPOSE 3000

CMD npm run start