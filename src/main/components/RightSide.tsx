import React, { useState } from "react";
import { BiSolidCommentDetail } from "react-icons/bi";
import kms from "../../global/images/kms2.jpg"
import skill1 from "../../global/images/skill1.png"
import skill2 from "../../global/images/skill2.png"
import styled from "styled-components";
import {
  RightPanel,
  Menu,
  MenuItem,
  Introduction,
  CTAButton,
  CenteredBlock,
  ProfileImage,
  SkillImage1,
  SkillImage2,
  IntroductionWrapper
} from '../components/Introduce.styles'

interface Contents{
    name?: string,
    content?: string
}

const StyledPtag = styled.strong`
    background: linear-gradient(90deg, #facc15, #f97316, #ec4899); /* 노랑 → 오렌지 → 핑크 */
    -webkit-background-clip: text;  /* 텍스트 영역에 배경 적용 */
    -webkit-text-fill-color: transparent; /* 글자 색 투명 처리 */
    font-weight: bold;
    font-size: 20px;
`

const RightSide = () => {
    
    const [active, setActive] = useState(0);
    const menuList = ["Profile", "Skill"]
    const profileContents: Contents[] = [
        {name: "Name", content: "김문수"},
        {name: "Birth", content: "1995-01-18 만 30세"},
        {name: "Education", content: "목원대학교(AI로봇공학) 졸업"},
        {name: "Career History"},
        {content: "고객상담 2년(TDCX Korea) [퇴사(계약만료)]"},
        {content: "부소대장 1년 6개월(73사단) [전역]"},
        {name: "Academic Background"},
        {content: "AI활용 핀테크서비스 개발자 양성과정 [수료]"},
        {content: "게임엔진 및 게임 네트워크 전문가 양성과정 [수료]"},
    ];

    const skillContents: Contents[] = [
        {name: "Languages", content: "Java, Javascripts, typescripts, C#"},
        {name: "Frontend", content: "React, Next,js, Thymeleaf, HTML, CSS"},
        {name: "Backend", content: "Spring Boot, Node.js"},
        {name: "DB", content: "MySQL"},
        {name: "Tools", content: "Git, Docker, AWS"},
    ];

    return(
        <RightPanel>
            <CenteredBlock>
                <Menu>
                    {menuList.map((item, index) => (
                        <MenuItem active={index === active} onClick={() => setActive(index)}>৹ {item}</MenuItem>
                    ))}
                </Menu>
                <IntroductionWrapper>
                    <Introduction visible={active === 0}>
                        <ProfileImage src={kms}/>
                        {profileContents.map((item) => <p><StyledPtag>{item.name}</StyledPtag>&nbsp;&nbsp; {item.content}</p>)}
                        <CTAButton to="/port">Details <BiSolidCommentDetail /></CTAButton>
                    </Introduction>
                    <Introduction visible={active === 1}>
                        <SkillImage1 src={skill1} alt="skill1"/>
                        {skillContents.map((item) => <p><StyledPtag>{item.name}</StyledPtag>&nbsp;&nbsp; {item.content}</p>)}
                        <CTAButton to="/port">Details <BiSolidCommentDetail /></CTAButton>
                        <SkillImage2 src={skill2} alt="skill2"/>
                    </Introduction>
                </IntroductionWrapper>
            </CenteredBlock>
        </RightPanel>
    )
}

export default React.memo(RightSide)