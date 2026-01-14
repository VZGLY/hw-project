FROM node:24-alpine3.23

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 3000

CMD ["node", "index.js"]