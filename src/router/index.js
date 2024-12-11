import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductModule from "../modules/Product-module/ProductModule";
import AllProducts from "../modules/Product-module/AllProducts";
import AddProduct from "../modules/Product-module/AddProductForm/AddProduct";
import CategoryManagement from "../modules/Product-module/CategoryManagement/CategoryManagement";
import HsnManagement from "../modules/Product-module/HSNManagement/HsnManagement";
import UnitSettings from "../modules/Product-module/UnitSettings/UnitSettings";
import RelatedProductSettings from "../modules/Product-module/RelatedUnitSettings/RelatedProductSettings";
import ViewProduct from "../modules/ViewProduct.jsx/ViewProduct";



const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
           {
            path:'product-module',
            element:<ProductModule/>,
            children:[
                {
                    path:'all-products',
                    element:<AllProducts/>
                },
                {
                    path:'add-products',
                    element:<AddProduct/>
                },
                {
                    path:'category-management',
                    element:<CategoryManagement/>
                },
                {
                    path:'hsn-management',
                    element:<HsnManagement/>
                },
                {
                    path:'unit-settings',
                    element:<UnitSettings/>
                },
                {
                    path:'related-product-settings',
                    element:<RelatedProductSettings/>
                },
                {
                    path:'view-product',
                    element:<ViewProduct/>
                }
            ]
           }
        ]
    },
  
])

export default router;