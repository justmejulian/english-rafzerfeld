FROM node:23.5-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:23.5-alpine
WORKDIR /app
RUN npm install -g sirv-cli
COPY --from=build /app/dist ./dist
ENV PORT=4321
EXPOSE 4321
CMD ["sirv", "dist", "--port", "4321", "--host", "0.0.0.0"]
