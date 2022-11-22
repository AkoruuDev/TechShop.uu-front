// tools
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle";


// pages
import Checkout from "./pages/contents/Checkout";
import Home from "./pages/contents/Home";
import ShoppingTrolley from "./pages/contents/ShoppingTrolley";
import SignIn from "./pages/log/SignIn";
import SignUp from "./pages/log/SignUp";

// admin
import NewItem from "./pages/admin/NewItem";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ < SignIn /> } />
                    <Route path="/sign-up" element={ < SignUp /> } />

                    <Route path="/home" element={ < Home /> } />
                    <Route path="/shopping-trolley" element={ < ShoppingTrolley /> } />
                    <Route path="/checkout" element={ < Checkout /> } />

                    <Route path="/:admin/new-item" element={ < NewItem /> } />
                </Routes>
            </BrowserRouter>
        </>
    )
}