# Vue.js CRUD Application with SweetAlert2 and db.json Server

## Introduction
Welcome to my Vue.js CRUD (Create, Read, Update, Delete) application! This guide will walk you through the setup and installation process, allowing you to effortlessly interact with a `db.json` server. This application showcases a curated list of paintings, offering users the ability to view, add, edit, and delete entries. The interface is styled with Bootstrap for a modern look and incorporates SweetAlert2 for enhanced alert messages.

## Prerequisites
Before you get started, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (includes npm)
- Vue CLI: Install globally using `npm install -g @vue/cli`
- `json-server`: Install globally using `npm install -g json-server`

## Installation

### Vue Setup
1. Install Vue CLI globally (if not done already):
    ```bash
    npm install -g @vue/cli
    ```

2. Clone the project repository:
    ```bash
    git clone <repository-url>
    cd <Vue-Crud>
    ```

3. Install project dependencies:
    ```bash
    npm install
    ```

### DB.json Server Setup
1. Install `json-server` globally:
    ```bash
    npm install -g json-server
    ```

2. Start the `json-server`:
    ```bash
    json-server --watch db.json
    ```

    This will serve your database at [http://localhost:3000](http://localhost:3000).

3. Start the Vue application:
    ```bash
    npm run serve
    ```

### Open your web browser and navigate to:

[http://localhost:5173](http://localhost:5173)

## Features
- **Bootstrap:** The project employs Bootstrap for a responsive and visually appealing application.
- **SweetAlert2:** Utilizing SweetAlert2 for alert messages enhances the overall user experience with beautiful and customizable pop-up dialogs.
- **CRUD Functionality:** Users can seamlessly add new paintings, view them in a detailed single view, edit existing entries, or delete them.
- **Alert Messages:** The application incorporates SweetAlert2 for clear and visually appealing alert messages during actions like adding, updating, or deleting posts, as well as for input validation.

## Conclusion
Explore the intuitive functionalities of our Vue.js application, offering a seamless way to manage a list of paintings. Built with Vue.js, and enhanced with Bootstrap and SweetAlert2, it provides a rich, interactive user interface that communicates in real-time with a `db.json` server.
#   v u e j s - c r u d  
 