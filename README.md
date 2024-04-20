# Store Frontend
This is a site for a commercial project for a small business. It aims to showcase products and provide an online B2B shopping experience.
## Features
Currently, the site is a work in progress. The following features are currently implemented:
- A home page with a tile display of products
- Cart view with the ability to add and remove items
- A checkout page with a form for user information
- Ability to expand the product image when clicked
- A dynamic scroll to section feature in the navigation bar
- A responsive design for mobile and desktop
- Seach bar to filter products
- Ability to create categories and select their priority
- Ability to set the priority of products inside a category
- Ability for one product to be in many categories
- Admin page where the admin can look up the orders made by the users
## Features underway
The following features are currently being worked on:
- A login page for the admin
- Contact page
- Ability to add products from the admin page

## Technologies
The site is built using the following technologies:
- Vue.js
- Tailwind CSS
- Firebase
- Firestore
- Vue Router
- Vueuse motion
- Headless UI

## Getting Started
To get started with the Store Frontend project, follow these steps:

1. Clone the repository to your local machine:
    ```
    git clone https://github.com/your-username/store-front-frontend.git
    ```

2. Navigate to the project directory:
    ```
    cd store-front-frontend
    ```

3. Install the dependencies using npm or yarn:
    ```
    npm install
    ```
    or
    ```
    yarn install
    ```

4. Create a Firebase project and set up Firestore:
    - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
    - Enable Firestore in the Firebase project.
    - Copy the Firebase configuration object.

5. Configure the Firebase project in the application:
    - Rename the `.env.example` file to `.env`.
    - Open the `.env` file and replace the placeholder values with your Firebase configuration.

6. Start the development server:
    ```
    npm run serve
    ```
    or
    ```
    yarn serve
    ```

7. Open your browser and navigate to `http://localhost:8080` to see the Store Frontend in action.

That's it! You are now ready to start exploring and customizing the Store Frontend project.
