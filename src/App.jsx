import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Country from "./pages/Country";
import Contact from "./pages/Contact";
import AppLayout from "./components/Layouts/AppLayout";
import NotFound from './pages/NotFound';
import CountryDetails from './components/Layouts/CountryDetails';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "country", element: <Country /> },
        { path: "country/:id", element: <CountryDetails /> },
        { path: "contact", element: <Contact /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ],
  {
    future: {
      v7_startTransition: true,  // ✅ Fixes the first warning
      v7_relativeSplatPath: true // ✅ Fixes the second warning
    },
  }
);

function App() {
  return (
    <div className="dark:bg-gray-800">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
