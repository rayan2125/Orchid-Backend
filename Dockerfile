FROM node:slim

# Set working directory
WORKDIR /src

# Install system dependencies required for bcrypt
RUN apt-get update && \
    apt-get install -y build-essential && \
    rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port
EXPOSE 8000

# Command to start the app
CMD ["node", "src/App.js"]
