import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

function MyApp() {
    return (
        <div>
            Custom App
        </div>
    );
}

const reactElement = React.createElement(
    'a',
    {
        href: 'https://www.google.com',
        target: '_blank',
        rel: 'noopener noreferrer'
    },
    'Click me to go to Google'
);

const anotherElement = (
    <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        Go to Google
    </a>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
    {anotherElement}  {/* Render JSX element */}
    {reactElement}    {/* Render element created with React.createElement */}
  </StrictMode>
);
