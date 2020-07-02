FROM node:13-buster-slim
WORKDIR /app

# Set a self signed ssl certificate
ENV HTTPS=false

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD npm run start
