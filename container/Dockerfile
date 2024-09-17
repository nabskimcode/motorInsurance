# Use the official Node.js image as a base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json from the parent directory (../)
COPY ../package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code from the parent directory (../)
COPY ../ ./

# Build the application
RUN npm run build

# Expose the port NestJS will run on
EXPOSE 3000

# Command to start the NestJS application
CMD ["npm", "run", "start:motorapi"]
