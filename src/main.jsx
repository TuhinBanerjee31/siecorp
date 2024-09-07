import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import CoreValues from "./pages/CoreValues.jsx";
import OurBrand from "./pages/OurBrand.jsx";
import OurLeadership from "./pages/OurLeadership.jsx";
import Energy from "./pages/Energy.jsx";
import Maritime from "./pages/Maritime.jsx";
import Infrastructure from "./pages/infrastructure.jsx";
import Careers from "./pages/Careers.jsx"

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <App />
//       },
//       {
//         path: '/core-values',
//         element: <CoreValues />
//       },
//       {
//         path: '/our-brand',
//         element: <OurBrand />
//       }
//     ]
//   }
// ])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<App />} />
//       <Route path='core-values' element={<CoreValues />} />
//       <Route path='our-brand' element={<OurBrand />} />
//     </Route>
//   )
// )

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<App />} /> {/* Use 'index' for the default route */}
      <Route path='core-values' element={<CoreValues />} />
      <Route path='our-brand' element={<OurBrand />} />
      <Route path='our-leadership' element={<OurLeadership />} />
      <Route path='energy' element={<Energy />} />
      <Route path='maritime' element={<Maritime />} />
      <Route path='infrastructure' element={<Infrastructure />} />
      <Route path='careers' element={<Careers />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
