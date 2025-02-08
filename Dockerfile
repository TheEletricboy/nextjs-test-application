# Use official Node.js image
FROM node:22.13.1

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (better caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy all project files (excluding node_modules)
COPY . .

# Build Next.js app
RUN npm run build

# Expose the port Next.js runs on
EXPOSE 3000

# Start Next.js in production mode
CMD ["npm", "run", "start"]