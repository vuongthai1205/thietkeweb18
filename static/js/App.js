import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Components/Header";
import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage/SecondPage";
import Menu from "./Components/Menu/menu";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import ScrollDisabler from "./Utils/ScrollDisabler";
import Preloader from "./Components/Preloader/preloader";

const App = () => {
    const [isShowMenu, setIsShowMenu] = useState(false);
    const [loaded, setLoaded] = useState(false);

    // useEffect(() => {
    //   if (isShowMenu) ScrollDisabler.disable();
    //   else ScrollDisabler.enable();
    // }, [isShowMenu]);

    return (
        <div className={classNames("App", loaded && "loaded")}>
            <Preloader onEnded={setLoaded} loaded={loaded} />{" "}
            <Menu
                open={isShowMenu}
                setShow={setIsShowMenu}
                setLoaded={setLoaded}
            />{" "}
            <Header
                menuOpen={isShowMenu}
                toggleMenu={() => setIsShowMenu((currVal) => !currVal)}
            />{" "}
            <Routes>
                <Route path="/" element={<FirstPage loaded={loaded} />} />
                <Route
                    path="/volt"
                    element={
                        <SecondPage loaded={loaded} isShowMenu={isShowMenu} />
                    }
                />
            </Routes>{" "}
            <footer> Copyright© 2022 Zibu - All Rights Reserved </footer>{" "}
        </div>
    );
};

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("loaded");
});

export default App;
