FROM node:19-alpine

COPY package.json /app/
COPY main /app

WORKDIR pp/a

RUN npm install

EXPOSE 8080

CMD ["node","index.js", "--port", "8080"]