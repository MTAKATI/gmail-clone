````markdown
# Gmail Clone: https://clone-37b9b.web.app/

A functional Gmail clone built using **React**, **Firebase**, and **Redux Toolkit**. This project mimics core functionalities of Gmail such as viewing email lists, reading mail, sending mail, and signing in with Google.

## Features

- Google Authentication with Firebase
- Send and receive emails (simulated)
- Dynamic UI components (Header, Sidebar, Mail View)
- Compose mail popup
- Redux state management
- Routing with React Router

## Tech Stack

- **React** — Frontend library
- **Firebase** — Backend (Authentication & Firestore DB)
- **Redux Toolkit** — State management
- **React Router** — Page navigation
- **Material UI** — Icons and components

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/MTAKATI/gmail-clone.git
   cd gmail-clone
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file or update your Firebase config directly in `firebase.js` with your project details.

4. Run the development server:

   ```bash
   npm start
   ```

5. Open `http://localhost:3000` in your browser.

## Notes

* Authentication is done via Google Sign-In.
* Emails are stored in Firebase Firestore.
* Styling is done using CSS and Material UI components.

## Screenshots
![image](https://github.com/user-attachments/assets/651cda59-d82f-41fc-86e9-98bd1532638d)
![image](https://github.com/user-attachments/assets/055011d3-c67c-4a0e-9970-4f50518cf879)

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
