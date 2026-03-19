FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --production=false

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Install production dependencies
RUN npm install --production

# Create .tmp directory for SQLite
RUN mkdir -p .tmp

# Expose port
EXPOSE 1337

# Start the application
CMD ["npm", "start"]
