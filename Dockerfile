FROM node:22.14.0-alpine

# !Set the working directory
WORKDIR /app

# !Copy package.json
COPY package*.json ./

# !Install dependencies
RUN npm install -g pnpm@latest
RUN pnpm install

# !Copy the rest of the application code
COPY . .

# !Expose the port the app runs on
EXPOSE 8080

# !Build the application
RUN pnpm build

# !Start the application
CMD ["pnpm", "start"]
