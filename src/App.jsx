import { Alert, Box, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header";
import HomeScreen from "./components/Home/HomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/productDetails/ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import { pageAlertSelector, setPageAlert } from "./redux/pageAlertSlice";
import Cart from "./components/cart/Cart";
import { getProducts } from "./redux/products/productActions";
import PaymentRequest from "./components/cart/PaymentRequest";
import Error404 from "./components/error/Error404";
import Footer from "./components/footer/Footer";
import Page204 from "./components/error/Page204";

const theme = createTheme();

function App() {
    const dispatch = useDispatch();
    const pageAlert = useSelector(pageAlertSelector);

    dispatch(getProducts);

    return (
        <>
            <BrowserRouter>
                <Box className="min-h-[92vh] relative ">
                    <Header />
                    {pageAlert.value && (
                        <Box className=" mt-[54px] ">
                            <Alert
                                severity={pageAlert.type}
                                onClose={() =>
                                    dispatch(setPageAlert(false, "", ""))
                                }
                            >
                                {pageAlert.message}
                            </Alert>
                        </Box>
                    )}
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Box className="mt-[54px] ">
                                    <HomeScreen />
                                </Box>
                            }
                        />
                        <Route
                            path="/product/:id"
                            element={<ProductDetails />}
                        />
                        <Route
                            path="/cart"
                            element={
                                <Box className="bg-[#f2f2f2] min-h-[92vh] mt-[54px] ">
                                    <Cart />
                                </Box>
                            }
                        />
                        <Route
                            path="/payment"
                            element={
                                <Box className="mt-[54px] ">
                                    <ThemeProvider theme={theme}>
                                        <PaymentRequest />
                                    </ThemeProvider>
                                </Box>
                            }
                        />
                        <Route
                            path="/404"
                            element={
                                <Box className="mt-[54px] ">
                                    <Error404 />
                                </Box>
                            }
                        />
                        <Route
                            path="/error/204"
                            element={
                                <Box className="mt-[54px] ">
                                    <Page204 />
                                </Box>
                            }
                        />
                    </Routes>
                    <Box className="p-[35px] "></Box>
                    <Box className="absolute bottom-0 w-full ">
                        <Footer />
                    </Box>
                </Box>
            </BrowserRouter>
        </>
    );
}

export default App;
