# 📱 React App with Vite, TypeScript, and Jest

This project is a boilerplate React application using **React 18.3.1**, **Vite 5.4.1**, **TypeScript**, and **Jest** with **React Testing Library** for unit testing.

---

## 🚀 Project Setup

### 🔧 Install Dependencies

```bash
npm install

````
💻 Development
To run the development server:


```bash
npm run dev

````
This will start the Vite server at http://localhost:5173.

🧪 Run Tests
To execute all test suites:


📦 Dependencies
To install required dev dependencies:
```bash 

npm install --save-dev jest ts-jest @types/jest @testing-library/react @testing-library/jest-dom  jest-environment-jsdom  ts-node

```
``` bash
import mobile from './assets/Mobile.jpg';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Welcome to the App</h1>
      <img src={mobile} alt="Mobile" />
    </div>
  );
}

export default App;
App.test.tsx
 ```
```bash
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  test('renders the heading and image', () => {
    render(<App />);

    expect(screen.getByText(/Welcome to the App/i)).toBeInTheDocument();

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image.getAttribute('src')).toBe('test-image-stub');
  });
});
```
```bash 

jest.config.ts

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/mocks/fileMock.js',
  },
};

```

```bash 
__mocks__/fileMock.js

module.exports = 'test-image-stub';

```
add the babel config file 

babel.config.ts
```bash 
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' }, modules: false }],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ],
 
};
```

