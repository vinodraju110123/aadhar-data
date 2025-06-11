# Aadhar Directory App

A simple React application to add and retrieve personal information using **localStorage**, styled with **Tailwind CSS**, and powered by **React Router** for navigation.

## 🚀 Features

- ✅ Add New Person with dynamic rows
- ✅ Auto-calculates Age from Date of Birth
- ✅ Validates Aadhar (12 digits) and Mobile Number (10 digits)
- ✅ Saves records to localStorage
- ✅ Retrieve Person Info by Aadhar Number
- ✅ Tailwind CSS for responsive UI
- ✅ React Router for smooth navigation

---

## 📸 Screenshots

### Add New Person
- Add multiple rows dynamically
- Save/Delete individual records
- Fields required and validated before saving

### Retrieve Person Info
- Search using Aadhar Number
- Displays record or "No match found"

---

## 🛠️ Technologies Used

- **React**
- **React Router DOM**
- **Tailwind CSS**
- **LocalStorage API**

---

## 🧩 Folder Structure

src/
├── App.jsx
├── main.jsx
├── index.css
├── components/
│ ├── AddPerson.jsx
│ └── RetrievePerson.jsx
└── tailwind.config.js


---

## 🧪 Local Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/aadhar-directory-app.git
   cd aadhar-directory-app
📄 Validation Rules
Field	Rule
Name	Required
Date of Birth	Required
Aadhar Number	Exactly 12 digits (numeric)
Mobile Number	Exactly 10 digits (numeric)
Age	Auto-calculated
