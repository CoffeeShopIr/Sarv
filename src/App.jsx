import { createHashRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
constimport ProductDetails, { LoaderDetails, LoaderTitle } from "./pages/ProductDetails"



function App() {
const router = createHashRouter(
  [
    {path:"/"  ,children:[
      { path:"/", element: <HomePage />},
      {path:"/" , loader:LoaderTitle,id:"TitleId" ,children:[
        { path: ":id/:products", element: <ProductDetails />, loader:LoaderDetails},
      ]}
    ]}
  ],
);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
