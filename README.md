
# Job Application Tracker

## Overview
The Job Application Tracker is a front end web application that helps users manage their job applications efficiently. It is built using modern frontend technologies like React, Redux, Formik, and Yup, with a responsive design provided by Bootstrap. The project also includes unit tests to ensure functionality and reliability. Future plans include integrating a backend to extend its capabilities.
## Features

- Add, edit and delete job applications
- Form validation using Formik and Yup
- State management with Redux
- Responsive design with Bootstrap
- Comprehensive unit tests with Jest and React Testing Library


## Technologies Used

- React
- Redux
- Formik
- Yup
- Bootstrap
- Jest
- React Testing Library
## Installation

1.  **Clone the repository**
    ```sh
    git clone https://github.com/hasantohidul/job-application-tracker.git
    ```
2. Navigate to the project directory
    ```sh
    cd job-application-tracker
    ```
3. Install dependencies
    ```sh
    npm install
    ```
## Usage

1. Start the development server
    ```sh
    npm start
    ```
2. Open the application
- Open the http://localhost:3000 in your browser to view the application

## Running Tests

1. Run unit Tests
    ```sh
    npm test
    ```
## Project Structure
```sh
job-application-tracker/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── JobCard.js
│   │   ├── JobCard.css
│   │   ├── JobCard.test.js
│   │   ├── JobForm.js
│   │   ├── JobForm.test.js
│   │   ├── Dashboard.js
│   │   ├── Dashboard.css
│   ├── redux/
│   │   ├── store.js
│   │   ├── reducers/
│   │   │   ├── jobReducer.js
│   ├── App.js
│   ├── index.js
├── .gitignore
├── package.json
├── README.md
```
## Future Plans
The current implementation is focused on the front-end. Future plans include integrating a backend to extend the application's capabilities.
## Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any features, enhancements, or bug fixes.
## License
This project is licensed under the MIT License