# React + Vite

### Technology Used:
-> React.js
-> Tailwind css
-> DaisyUI
-> json file
-> firebase authentication

## Software Used:
-> Visual Stdio Code

## Description: 
This is a responsive website. It can be used by any device like phone, laptop. User can see book information by using this websites. 
The website is in developing phase. Continuously it will be updating.

## Secret Key at .env file
Use .env File to Store Secrets
Your Firebase credentials should be stored in an .env file (which you’ve already done), but make sure that the .env file is not committed to your repository.

2. Add .env to .gitignore
In the root of your project, ensure that you have a .gitignore file with the following line to prevent the .env file from being pushed to your version control (like GitHub):

bash
Copy code
# .gitignore
.env
3. Use Environment Variables Securely in Vite
Make sure you are using Vite's environment variables securely in your project. Here's an example of how to access the environment variables in your Vite project without exposing them directly:

js
Copy code
// firebaseConfig.js
export const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

Set Up Firebase Configuration
To connect the project with Firebase, you need to set the environment variables.

Create a .env file in the root directory of your project.
Add the following Firebase configuration variables to the .env file:
bash
Copy code
VITE_APIKEY=your-api-key
VITE_AUTHDOMAIN=your-auth-domain
VITE_PROJECTID=your-project-id
VITE_STORAGEBUCKET=your-storage-bucket
VITE_MESSAGINGSENDERID=your-messaging-sender-id
VITE_APPID=your-app-id

Important: Make sure the .env file is added to .gitignore to avoid committing your secrets.

# Server code link: https://github.com/devalienbrain/bootcamp-book-shop-server-user-management-part