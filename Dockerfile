FROM node:16-alpine
WORKDIR /proyecto2-tingeso-fe
COPY package*.json ./
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]
COPY . ./
