# StoryBook Demo

This repository contains a demo application to help beginners understand and use **Storybook**. Storybook is an open-source tool for developing UI components in isolation. It enables you to create and showcase components independently of your application, making it easier to visualize, document, and test them.

## Features
- Set up and use Storybook for a React app.
- Create and display components in Storybook.
- Visualize different states of components (e.g., with different props).
- Document and test your UI components effectively.

## Prerequisites
To use this demo, you'll need to have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) as your package manager

## Getting Started
Follow the steps below to get this project running on your local machine:

### 1. Clone the Repository
```bash
git clone https://github.com/Tanishq-07/StoryBook_Demo.git
cd StoryBook_Demo
```

### 2. Install Dependencies
Use npm or Yarn to install the required packages.
```bash
npm install
# or
yarn install
```

### 3. Run the App
Start the development server to see the app in action.
```bash
npm start
# or
yarn start
```

### 4. Run Storybook
To launch Storybook and visualize your components:
```bash
npm run storybook
# or
yarn storybook
```

Storybook will open a new browser window where you can explore all the documented components.

## Project Structure
Here’s the structure of the project:

```
├── src/                    # Application source code
│   ├── components/          # React components and Storybook stories
│   │   ├── MyComponent.js   # Component code
│   │   ├── MyComponent.stories.js   # Storybook stories for MyComponent
│   │   ├── AnotherComponent.js  # Another component code
│   │   ├── AnotherComponent.stories.js  # Storybook stories for AnotherComponent
├── .storybook/              # Storybook configuration
├── package.json             # Project metadata and dependencies
```

## Adding New Stories
To create a new story for a component, follow these steps:

1. Inside the `components` directory, create or edit the `.stories.js` file for your component.

2. Example of a story file (`MyComponent.stories.js`):
    ```javascript
    import React from 'react';
    import MyComponent from './MyComponent';

    export default {
      title: 'MyComponent',
      component: MyComponent,
    };

    export const Default = () => <MyComponent />;
    ```

3. Run `npm run storybook` to view the newly added component in Storybook.

## For References

- [Notion Page to understand more precisely](https://infrequent-college-310.notion.site/StoryBook-1269c816267180f6b871ca2d2c5efe54?pvs=4)
- [Storybook Documentation](https://storybook.js.org/docs/react/get-started/introduction)

