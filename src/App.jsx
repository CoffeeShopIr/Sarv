import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage, { LoaderTitle } from "./pages/HomePage"
import ProductDetails from "./pages/ProductDetails"
import { LoaderDetails } from "./Components/DetailMenu"
import Root from "./pages/Root"


function App() {
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <HomePage />, loader: LoaderTitle },
        { path: ":Detailsid", element: <ProductDetails />, loader: LoaderDetails },
      ],
    },
  ],
  {
    basename: "/Sarv",
  }
);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
