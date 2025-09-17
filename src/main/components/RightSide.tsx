import React, { useState } from "react";
import kms from "../../global/images/kms2.jpg"
import {
  RightPanel,
  Menu,
  MenuItem,
  Introduction,
  CTAButton,
  CenteredBlock,
  ProfileImage
} from '../components/Introduce.styles'

const RightSide = () => {

    const [active, setActive] = useState(0);
    const menuList = ["Profile", "Skill"]
    const message = [["Name : 김문수", "DOB : 1995-01-18"],
                    ["Skill...", "Test..."]]

    return(
        <RightPanel>
            <CenteredBlock>
                <Menu>
                    {menuList.map((item, index) => (
                        <MenuItem active={index === active} onClick={() => setActive(index)}>{item}</MenuItem>
                    ))}
                </Menu>
                {active === 0 ? <ProfileImage src={kms}/> : ""}
                <Introduction>
                    {message[active].map((item) => (
                        <p>{item}</p>
                    ))}
                </Introduction>
                <CTAButton href="/port">My story →</CTAButton>
            </CenteredBlock>
        </RightPanel>
    )
}

export default React.memo(RightSide)