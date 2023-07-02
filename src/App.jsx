import { Alert, Box } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header";
import HomeScreen from "./components/Home/HomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/productDetails/ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import { pageAlertSelector, setPageAlert } from "./redux/pageAlertSlice";
import { addUser } from "./redux/user/userSlice";
import Cart from "./components/cart/Cart";

function App() {
    const dispatch = useDispatch();
    const pageAlert = useSelector(pageAlertSelector);

    // if (localStorage?.userDetails) {
    //     let data = JSON.parse(localStorage.userDetails);
    //     dispatch(addUser({ ...data }));
    // }

    return (
        <>
            <BrowserRouter>
                <Header />
                <Box className=" mt-[54px] ">
                    {pageAlert.value && (
                        <Alert
                            severity={pageAlert.type}
                            onClose={() =>
                                dispatch(setPageAlert(false, "", ""))
                            }
                        >
                            {pageAlert.message}
                        </Alert>
                    )}
                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                        <Route
                            path="/product/:id"
                            element={<ProductDetails />}
                        />
                        <Route
                            path="/cart"
                            element={
                                <Box className="bg-[#f2f2f2] min-h-[92vh] ">
                                    <Cart />
                                </Box>
                            }
                        />
                    </Routes>
                </Box>
            </BrowserRouter>
        </>
    );
}

export default App;
