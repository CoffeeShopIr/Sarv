import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage, { LoaderTitle } from "./pages/HomePage"
import ProductDetails from "./pages/ProductDetails"
import { LoaderDetails } from "./Components/DetailMenu"
import Root from "./pages/Root"


function App() {
  const Router=createBrowserRouter([
    {path:"/Sarv", element:<Root/>,
      children:[
        {path:"/Sarv", element:<HomePage/>, loader:LoaderTitle},
        {path:"/Sarv/:Detailsid", element:<ProductDetails/>, loader:LoaderDetails}
      ]
    },
  ])
  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
    </>
  )
}

export default App
