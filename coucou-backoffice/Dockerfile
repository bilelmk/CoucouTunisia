#stage 1
FROM node:12-slim  as node
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# production environment
FROM nginx:stable-alpine
COPY --from=node /app/dist/coucou-backoffice /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
