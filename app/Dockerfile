FROM mhart/alpine-node:10.8.0

ENV NODE_ENV=production

RUN mkdir -p /app
COPY ./app /app
WORKDIR /app


RUN npm install
RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 3000
CMD ["npm", "start"]