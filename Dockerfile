# Use Node.js LTS as base
FROM node:18-alpine AS builder
WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the app and build
COPY . .
RUN npm run build

# --- Production image ---
FROM node:18-alpine
WORKDIR /app

# Copy built files and install only prod deps
COPY --from=builder /app ./
RUN npm install --omit=dev

EXPOSE 3000
CMD ["npm", "start"]
