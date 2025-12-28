import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage, { LoaderTitle } from "./pages/HomePage"
import ProductDetails from "./pages/ProductDetails"
import { LoaderDetails } from "./Components/DetailMenu"


function App() {
  const Router=createBrowserRouter([
    {path:"/", 
      id:"get-Title",
      loader:LoaderTitle,
      children:[
        {path:"", element:<HomePage/>},
      ]
    },
    {path:":Detailsid", element:<ProductDetails/>, loader:LoaderDetails}
  ])
  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  )
}

export default App
