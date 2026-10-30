# IT313 – Core Components

## Student Directory

A React Native application built with Expo and TypeScript for displaying and managing a list of student records.

## Features

- **Reusable StudentCard Component** – Displays each student's information, including name, year level, and photo.
- **Student Directory** – Displays five student records in a scrollable list.
- **Search Functionality** – Filters students by name as the user types.
- **Pressable Flag Toggle** – Allows users to flag or unflag students.
- **Dynamic Flagged Counter** – Updates automatically when a student's flagged status changes.
- **Controlled TextInput** – Uses React state to control the search field.
- **Conditional Rendering** – Displays a message when no students match the search.
- **Dynamic List Rendering** – Uses JavaScript's `map()` method and unique student IDs to render student cards.

## Technologies Used

- React Native
- Expo
- TypeScript
- React Hooks (`useState`)
- React Native components (`View`, `Text`, `ScrollView`, `TextInput`, and `Pressable`)

## Installation and Setup

1. Clone or download the project.
2. Open the project folder in a terminal.
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the Expo development server:

   ```bash
   npx expo start
   ```

5. Scan the QR code using Expo Go or run the application on a supported emulator.

## Learning Outcomes

This project demonstrates the use of reusable components, props, state management, text input handling, conditional rendering, scrollable lists, and user interaction in React Native.

## Author

Gabriela Shaine Montañez

Course: IT313 – Mobile Programming
