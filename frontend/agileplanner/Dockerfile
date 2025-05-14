# Use the official Node.js image as the base image for the build stage
FROM node:latest AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all application files to the container
COPY . .

# Build the React application
RUN npm run build

# Use the lightweight Nginx image as the base image for the final stage
FROM nginx:alpine

# Copy the built React application from the previous stage to the Nginx public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port that Nginx listens on (default is 80)
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
