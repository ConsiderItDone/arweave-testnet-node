FROM node:18

# Create app directory
WORKDIR /app

RUN npm install -g typescript ts-node

COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./

RUN yarn
COPY . .

RUN yarn build
EXPOSE 3000

CMD ["yarn", "start"]
