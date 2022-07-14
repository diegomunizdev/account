FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/account
WORKDIR /usr/src/account

# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json yarn.lock ./

# Install app dependencies
RUN yarn

# Bundle app source
COPY . /usr/src/account

EXPOSE ${PORT}

CMD [ "yarn", "dev" ]