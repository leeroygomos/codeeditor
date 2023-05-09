FROM node:19

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN apt-get update

RUN apt-get install -y python3

RUN apt-get -y install gcc

RUN apt-get -y install mono-complete

RUN apt-get -y install default-jdk

RUN apt-get -y install golang-go

RUN apt-get -y install rustc

COPY . .

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "start"]