# Stage 1: Build React frontend
FROM node:18-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Run backend and serve React build
FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --omit=dev
COPY --from=build /app/build ./build
COPY . .

# Set environment variables if needed
ENV NODE_ENV=production

# Start backend (ensure your Express app serves from ./build)
CMD ["node", "server.js"]
