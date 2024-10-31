# RoboFriends

RoboFriends is a React-based application that displays a list of robot friends, searchable by name. Created as part of a learning journey through the Zero to Mastery (ZTM) course, this project helped reinforce core React concepts such as component structure, state management, and data handling.

## Features

- **Robot List Display**: Shows a collection of robot friends fetched from an API.
- **Search Functionality**: Users can filter robots by name using a search input field.
- **Responsive Layout**: Designed to be responsive and user-friendly on various devices.

## What I Learned

Working on RoboFriends helped me understand key concepts in React, including:

- **Components**: Structuring the app with reusable components.
- **Props and State**: Passing data between components and managing component state.
- **Lifecycle Methods**: Using component lifecycle methods to handle API calls and render updates.
- **Event Handling**: Managing user input and dynamically updating the displayed robot list.

## Project Structure

- **src/components**: Contains all React components like `Card`, `CardList`, `SearchBox`, and `Scroll`.
- **src/App.js**: Main app component that holds the state and manages data flow.
- **src/index.js**: Entry point that renders the app.
- **public/**: Static assets and `index.html`.

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/robofriends.git
   cd robofriends
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage

1. **View Robots**: The app displays a list of robot friends by default.
2. **Search Robots**: Use the search bar to filter robots by name, dynamically updating the display.

## Future Enhancements

- **Additional Robot Details**: Include more information about each robot on hover or click.
- **Favorite Robots**: Allow users to favorite specific robots and save them.
- **Improved Styling**: Enhance the app’s design with animations and transitions.

## Credits

- **Zero to Mastery (ZTM)**: This project was built while learning React through the ZTM course, which provided hands-on guidance and exercises to deepen React knowledge.
