# Smarthome_React

# Project Setup and Deployment Guide

This document provides a step-by-step guide to set up and deploy the "Smarthome" project on your local development environment. Follow the instructions below for a smooth and error-free setup.

## Prerequisites
- Ensure that you have Node.js and npm installed on your machine.
- An Integrated Development Environment (IDE) is required to work with the project.

## Steps to Set Up and Run the Project

1. **Unzip the Folder:**
   - Unzip the project folder and navigate to the "Smarthome" directory.

2. **Open in IDE:**
   - Open your preferred Integrated Development Environment (IDE).
   - Navigate to the "Smarthome" folder and open it in your IDE.

3. **Open Terminal:**
   - Open the terminal within your IDE.

4. **Run Server:**
   - Change directory to the "server" folder using the following command:
     ```bash
     cd server
     ```
   - Execute the command to start the server:
     ```bash
     npm run develop
     ```

5. **Run Client:**
   - In a new terminal window, change directory to the "client" folder:
     ```bash
     cd client
     ```
   - Execute the command to start the client:
     ```bash
     npm run start
     ```

6. **Access React App:**
   - Once the commands in steps 4 and 5 are executed successfully, the React app will be deployed on `localhost` at port `3000`. You can access the application by opening your web browser and navigating to [http://localhost:3000](http://localhost:3000).

7. **Configure Strapi Key:**
   - In the file `checkout.jsx`, set up your own Strapi key.

8. **Configure Auth0 Credentials:**
   - In the file `index.js`, provide your Auth0 domain and clientId.

9. **MongoDB Atlas Configuration:**
   - Create a cluster named "smarthome" in MongoDB Atlas.
   - Copy the MongoDB connection URL and paste it in the `.env` file.

10. **MySQL Database Setup:**
    - Create a MySQL database named "smarthome".
    - Create a table named "customerorders" in the "smarthome" database.

With these steps completed, your "Smarthome" project should be successfully set up and running on your local environment. Ensure that all dependencies are installed and configured correctly. Feel free to reach out if you encounter any issues during the setup process.
