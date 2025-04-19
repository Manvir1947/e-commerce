import React, { useContext } from "react";
import Main from "./Main";
import categoryElementsData from "./components/ProductCategoryFolder/categoryElementsData";
import CategoryPagesCreator from "./components/ProductCategoryFolder/categoryPagesCreator";
import "./App.css";
import ProductDescription from "./components/productDescription";
import CartPage from "./components/cartFolder/cartPage";
import StoreFinder from "./components/NavBar/navOptions/allNavPages/StoreFinder";
import MyAccount from "./components/NavBar/myAccount";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./components/Root";
import { appContext } from "./Context";
import Clothings from "./components/NavBar/navOptions/allNavPages/Clothings";

export default function App() {
  const { categories, data, favoriteItems } = useContext(appContext);
  const routeElements = [];
  for (let categoryObj in categories) {
    const categoryPathObj = categoryElementsData.filter(
      (ele) => ele.link == categoryObj
    );
    const categoryData = categories[categoryObj];
    routeElements.push(
      <Route
        path={`${categoryPathObj[0].link}`}
        element={
          <CategoryPagesCreator
            loader={{
              data: categoryData,
              categoryName: categoryPathObj[0].title,
            }}
          />
        }
      ></Route>
    );
  }

  const dataArrayCreater = (object) => {
    const newAllarray = [];
    for (let i in object) {
      object[i].forEach((ele) => {
        newAllarray.push(ele);
      });
    }
    return newAllarray;
  };

  const allData = dataArrayCreater(categories);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Main />} />
        {routeElements}
        <Route
          path="more-all-products"
          element={
            <CategoryPagesCreator
              loader={{
                data: allData,
                categoryName: "All Categories",
              }}
            />
          }
        />
        <Route path="cart" element={<CartPage />} />
        <Route path=":id" element={<ProductDescription />} />
        <Route path="storeFinder" element={<StoreFinder />} />
        <Route path="clothing" element={<Clothings />} />

        <Route
          path="favorite-products"
          element={
            <CategoryPagesCreator
              loader={{
                data: favoriteItems,
                categoryName: "Favorite Products",
              }}
            />
          }
        />
        <Route path="my-account" element={<MyAccount />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
