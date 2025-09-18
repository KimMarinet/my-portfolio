import React from "react";
import Header from "../outlines/Header";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainLayout = () => {
    return (
        <>
            <Main>
                <Header />
                <Outlet />
            </Main>
        </>
    )
};

export default React.memo(MainLayout)