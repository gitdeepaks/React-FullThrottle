# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /*

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app code into the container
COPY . .

# Build the React app
RUN npm run build

# Specify the command to run the app
CMD ["npm", "start"]
