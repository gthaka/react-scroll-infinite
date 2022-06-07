# from an image, node image (alpine linux dist)
FROM node:16.15.0-alpine

# set the working directory for instructions execution
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./

# copy our application / program files
COPY . ./

# run the instruction / command
RUN npm i

# CMD node app.js
CMD npm start