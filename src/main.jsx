import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./main.css";
import { createBrowserRouter, RouterProvider } from 'react-router';

// For Sharing The Data From The API
import DataProvider from './context/DataProvider';

// Import Pages Components
import Homepage from './Homepage.jsx';
import { NotFoundPage, GenericAdhkarPage } from "./routes";
import { categories } from './constants';

// Create The Router
const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />
    },
    ...categories.map(({ link, ...rest }) => (
        {
            path: `/${link}`,
            element: <GenericAdhkarPage link={link} { ...rest } />
            // element: React.cloneElement(component, { link, ...rest }) //! Use when using a specific component for each category
        }
    )),
    {
        path: "*",
        element: <NotFoundPage />
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <DataProvider>
            <RouterProvider router={router} />
        </DataProvider>
    </StrictMode>,
);
