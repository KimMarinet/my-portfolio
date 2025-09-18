import React from "react";
import pptImg from "../../global/images/ppt.png"
import { FaExternalLinkAlt } from "react-icons/fa";
import { 
    Contianer, 
    LeftPanel, 
    RightPanel, 
    Address,
    IDPWBox,
    StyledIcon,
    StyledContents } from "./Section.styles";

const Section3 = () => {
    
    return(
        <Contianer>
            <LeftPanel>
                <img src={pptImg} width="100%" alt="img"/>
            </LeftPanel>
            <RightPanel>
                <h1 style={{color: "#facc15"}}>목적에 맞는 문서작성 및 의사소통</h1>
                <a href="https://drive.google.com/drive/folders/1fNqs86hjnMmuO9Zy4R7IUnPgc2ZgMRzP?usp=drive_link">
                    <Address>&nbsp;문서자료 바로가기 <FaExternalLinkAlt style={{transform: "translateY(2px)"}}/></Address>
                </a>
                <div>
                    <h2><StyledIcon />&nbsp;문서화 및 표현 능력</h2>
                    <StyledContents>&nbsp;&nbsp;&nbsp;&nbsp;명확하고 체계적인 문서를 작성하는 능력을 보유하고 있습니다.</StyledContents>
                    <StyledContents>&nbsp;&nbsp;&nbsp;&nbsp;보고서, 기획안, 제안서 등 다양한 문서를 정확하고 효율적으로 작성할 수 있습니다.</StyledContents>
                    <StyledContents>&nbsp;&nbsp;&nbsp;&nbsp;복잡한 데이터를 설득력 있는 문서로 재구성하여 의사결정을 이끌어냅니다.</StyledContents>
                    <StyledContents>&nbsp;&nbsp;&nbsp;&nbsp;핵심을 짚는 제안서와 보고서를 통해 이해관계자의 공감을 얻습니다.</StyledContents>
                    <StyledContents>&nbsp;&nbsp;&nbsp;&nbsp;읽는 사람의 관점을 고려한 가독성 높은 문서 작성에 강점을 가지고 있습니다.</StyledContents>
                </div>
                <div>
                    <h2><StyledIcon />&nbsp;발표 및 커뮤니케이션 능력</h2>
                    <StyledContents>&nbsp;&nbsp;&nbsp;&nbsp;복잡한 내용을 청중의 눈높이에 맞게 이해하기 쉽게 전달할 수 있습니다.</StyledContents>
                    <StyledContents>&nbsp;&nbsp;&nbsp;&nbsp;비즈니스 상황에 따라 톤과 방식을 조절하는 유연한 커뮤니케이션 능력을 보유하고 있습니다.</StyledContents>
                    <StyledContents>&nbsp;&nbsp;&nbsp;&nbsp;명확하고 자신감 있는 발표를 통해 신뢰를 구축합니다.</StyledContents>
                </div>
            </RightPanel>
        </Contianer>
    )
}

export default React.memo(Section3)