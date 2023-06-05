import { createContext } from "react";
import { useState, useEffect } from "react";
import clothing from "./ClothingApi";
import { nanoid } from "nanoid";

const appContext = createContext();
const AppContextProvider = (props) => {
  const [data, setData] = useState([]);

  const [categories, setCategories] = useState([]);

  const [otherData, setOtherData] = useState([]);

  const [inputData, setInputData] = useState("");

  const [cartItems, setCartItems] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const [downArrowBool, setDownArrowBool] = useState(false);

  const [featureItems, setFeatureItems] = useState([]);
  const [searchObjs, setSearchObjs] = useState([]);
  const [isActiveSearchAndSignIn, setIsActiveSearchAndSignIn] = useState({
    isActiveSearch: false,
    isActiveSignIn: false,
    isActiveSignUp: false,
    isActiveSpinner: false,
    isActiveSignUpSuccess: false,
  });

  const [userAccounts, setUserAccounts] = useState([]);

  const [currentScreenSize, setCurrentScreenSize] = useState({
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
  });
  const [activeAccount, setActiveAccount] = useState("");

  // useEffect(() => {
  //   function windowClickFun(event) {
  //     setClickedTarget(event.target);
  //   }
  //   window.addEventListener("click", (event) => {
  //     windowClickFun(event);
  //   });

  //   return window.removeEventListener("click", (event) => {
  //     windowClickFun(event);
  //   });
  // }, []);

  const setIsActiveSearch = (bool) => {
    setIsActiveSearchAndSignIn((prevObj) => ({
      ...prevObj,
      isActiveSearch: bool,
    }));
  };

  const setIsActiveSpinner = (bool) => {
    setIsActiveSearchAndSignIn((prevObj) => ({
      ...prevObj,
      isActiveSpinner: bool,
    }));
  };
  const setIsActiveSignUpSuccess = (bool) => {
    setIsActiveSearchAndSignIn((prevObj) => ({
      ...prevObj,
      isActiveSignUpSuccess: bool,
    }));
  };
  const setIsActiveSignIn = (bool) => {
    setIsActiveSearchAndSignIn((prevObj) => ({
      ...prevObj,
      isActiveSignIn: bool,
    }));
  };
  const setIsActiveSignUp = (bool) => {
    setIsActiveSearchAndSignIn((prevObj) => ({
      ...prevObj,
      isActiveSignUp: bool,
    }));
  };
  useEffect(() => {
    setIsActiveSearch(searchObjs.length > 0 ? true : false);
  }, [searchObjs]);

  const setFavoriteItem = (object) => {
    const isFound = favoriteItems.filter((ele) => ele == object);
    setFavoriteItems((prev) =>
      !isFound[0] ? [...prev, object] : prev.filter((ele) => ele != object)
    );
  };

  const setInputDataFun = (event) => {
    setInputData(event.target.value);
  };
  useEffect(() => {
    const filteredSearch = [];
    allProducts.forEach((product) => {
      product.title
        .toLowerCase()
        .split(" ")
        .forEach((titleStr) => {
          const inputDataArray = inputData.toLowerCase().trim().split(" ");
          inputDataArray.forEach((inputStr) => {
            if (
              titleStr == inputStr &&
              !filteredSearch.includes(product) &&
              inputStr != ""
            ) {
              filteredSearch.push(product);
            }
          });
        });
      setSearchObjs(filteredSearch);
    });
  }, [inputData]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((data) => data.json())
      .then((finalData) => {
        setData(finalData);
      });

    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((finalData) => {
        setOtherData(finalData);
      });
  }, []);

  const findElement = (arr, elementToFind) => {
    return arr.find((ele) => ele === elementToFind);
  };
  const emptyCart = () => {
    setCartItems([]);
  };

  function tenRandomElements(arry = [], numberOfproducts = 10) {
    let result = [];

    let randomNum = 0;
    const prevRandomNums = [];
    let counter = 0;
    while (true) {
      randomNum = Math.floor(Math.random() * arry.length);
      const bool = findElement(prevRandomNums, randomNum);
      if (result.length < numberOfproducts) {
        if (!bool) {
          prevRandomNums.push(randomNum);
          result.push(arry[randomNum]);
        } else continue;
      } else break;
      counter++;
    }
    return result;
  }

  function reduceAndFilterCategory(products) {
    return products.reduce((accumulator, current) => {
      if (!accumulator[current.category]) {
        return {
          ...accumulator,
          [current.category]: [current],
        };
      } else {
        return {
          ...accumulator,
          [current.category]: [...accumulator[current.category], current],
        };
      }
    }, {});
  }

  useEffect(() => {
    const products = data.products;
    const newProductsObj = products && reduceAndFilterCategory(products);
    const newClothingProductsObj =
      products && reduceAndFilterCategory(clothing);

    let newId = 0;
    const otherDataNewId = otherData.map((ele, index) => {
      newId = index + 150;
      return {
        ...ele,
        id: newId,
      };
    });

    setCategories({
      ...newProductsObj,
      others: otherDataNewId,
      ...newClothingProductsObj,
    });
  }, [data, otherData]);

  function addToCartItems(object, quantity) {
    const resultElement = cartItems.find((ele) => ele.id == object.id);
    resultElement
      ? alert("This Item is already in the cart!")
      : setCartItems((prev) => [...prev, { ...object, quantity: quantity }]);
  }

  function cartQuantityHandler(obj, quantity) {
    setCartItems((prev) =>
      prev.map((ele) =>
        ele.id == obj.id ? { ...ele, quantity: quantity } : ele
      )
    );
  }

  function removeCartItems(object) {
    setCartItems((prev) => prev.filter((ele) => ele != object));
  }
  // change the screen size
  useEffect(() => {
    const windowSize = (event) => {
      setCurrentScreenSize({
        screenHeight: event.target.innerHeight,

        screenWidth: event.target.innerWidth,
      });
    };
    window.addEventListener("resize", windowSize);
    return () => window.removeEventListener("resize", windowSize);
  }, []);

  useEffect(() => {
    const featuringObj = {
      menClothingFeaturing: tenRandomElements(categories.men),
      womenClothingFeaturing: tenRandomElements(categories.women),
      othersFeaturing: tenRandomElements(categories.others),
    };

    setAllProducts(() => {
      const newArray = [];
      for (let i in categories) {
        for (let j of categories[i]) {
          newArray.push(j);
        }
      }
      return newArray;
    });

    setFeatureItems(featuringObj);
  }, [categories]);
  return (
    <appContext.Provider
      value={{
        data,
        featureItems,
        categories,
        tenRandomElements,
        setFavoriteItem,
        favoriteItems,
        allProducts,
        addToCartItems,
        removeCartItems,
        cartItems,
        cartQuantityHandler,
        emptyCart,
        inputData,
        setInputDataFun,
        searchObjs,
        isActiveSearchAndSignIn,
        setIsActiveSearch,
        setIsActiveSignIn,
        setIsActiveSignUp,
        currentScreenSize,
        userAccounts,
        setUserAccounts,
        setIsActiveSpinner,
        setIsActiveSignUpSuccess,
        activeAccount,
        setActiveAccount,
        downArrowBool,
        setDownArrowBool,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
};

export { AppContextProvider, appContext };
