FROM node:latest

WORKDIR /user/app

COPY package.json ./
COPY . .

RUN npm install

EXPOSE 8050

CMD ["npm", "run", "dev"]