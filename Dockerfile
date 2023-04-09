FROM node:latest

WORKDIR /user/app

RUN apt-get update && apt-get install -y ssh && apt-get install -y sshpass

COPY package.json ./
COPY . .

RUN npm install
# RUN npm run build

EXPOSE 8050

CMD ["npm", "run", "serve"]