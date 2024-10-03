
# Job Application Tracker

## Overview
The Job Application Tracker is a front end web application that helps users manage their job applications.
## Live Demo
Check out the live demo of the application [here](https://hasantohidul-job-application-tracker.netlify.app/).
## Features

- Add, edit and delete job applications
- Form validation using Formik and Yup
- State management with Redux
- Responsive design with Tailwind CSS
- Comprehensive unit tests with Jest and React Testing Library
- Data Persistence using localStorage
- Light/Dark Theme Switcher for enhanced user experience


## Technologies Used

- React
- Redux
- Formik
- Yup
- Tailwind CSS
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
job-application-tracker
├─ .gitignore
├─ LICENSE
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ icons8-app-50.png
│  ├─ index.html
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
├─ src
│  ├─ App.js
│  ├─ components
│  │  ├─ Button.js
│  │  ├─ Dashboard.js
│  │  ├─ JobCard.js
│  │  ├─ JobCard.test.js
│  │  ├─ JobForm.js
│  │  ├─ JobForm.test.js
│  │  ├─ Navbar.js
│  │  └─ ThemeSwitcher.js
│  ├─ contexts
│  │  └─ ThemeContext.js
│  ├─ index.css
│  ├─ index.js
│  ├─ redux
│  │  ├─ reducers
│  │  │  └─ jobReducer.js
│  │  └─ store.js
│  ├─ reportWebVitals.js
│  ├─ setupTests.js
│  └─ utils
│     └─ localStorage.js
└─ tailwind.config.js
```
## Future Plans
The current implementation is focused on the front-end. Future plans include integrating a backend to extend the application's capabilities.
## Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any features, enhancements, or bug fixes.
## License
This project is licensed under the MIT License
## Contact

For any questions or suggestions, please contact:

- **Name**: Mohammad Tohidul Hasan
- **Email**: [mhasantohidul@gmail.com](mailto:mhasantohidul@gmail.com)
- **GitHub**: [hasantohidul](https://github.com/hasantohidul)
- **LinkedIn**: [hasantohidul](https://www.linkedin.com/in/hasantohidul/)
