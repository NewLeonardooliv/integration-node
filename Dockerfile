FROM node:latest

WORKDIR /user/app

COPY package.json ./
COPY . .

RUN npm install

EXPOSE 8010

CMD ["npm", "run", "dev"]