import React from "react"
import LeftSide from "../components/LeftSide"
import RightSide from "../components/RightSide"
import { Container } from "../components/Introduce.styles"

const MainContainer = () => {
    return (
        <Container>
            <LeftSide />
            <RightSide />
        </Container>
    )
}

export default React.memo(MainContainer)