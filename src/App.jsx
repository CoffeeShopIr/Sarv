import { createHashRouter, RouterProvider } from "react-router-dom"
import HomePage, { LoaderAllData } from "./pages/HomePage"
import ProductDetails, { LoaderDetails, LoaderTitle } from "./pages/ProductDetails"



function App() {
const router = createHashRouter(
  [
    {path:"/" , loader:LoaderAllData , id:"Data" ,children:[
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
