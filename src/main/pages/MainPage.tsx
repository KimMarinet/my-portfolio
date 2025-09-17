import React from "react";
import MainContainer from "../containers/MainContainer";
import { Helmet } from 'react-helmet-async';

const MainPage = () => {
    return(
        <>
            <Helmet>
                <title>김문수의 포트폴리오</title>
            </Helmet>
            <MainContainer/>
        </>
    )
}

export default React.memo(MainPage)