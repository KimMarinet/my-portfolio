import React from "react"
import LeftSide from "../components/LeftSide"
import { Container } from "../components/Introduce.styles"
import RightSide from "../components/RightSide"

const MainContainer = () => {
    return (
        <Container>
            <LeftSide />
            <RightSide />
        </Container>
    )
}

export default React.memo(MainContainer)