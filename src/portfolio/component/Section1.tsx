import React from "react";
import VideoPlayer from "../../global/components/VideoPlayer";
import { FaExternalLinkAlt } from "react-icons/fa";
import { 
    Contianer, 
    LeftPanel, 
    RightPanel, 
    Address,
    IDPWBox,
    StyledIcon,
    StyledContents } from "./Section.styles";

const Section1 = () => {

    return(
        <Contianer>
            <LeftPanel>
                <VideoPlayer src="https://www.youtube.com/watch?v=A1iIsN803bc" controls></VideoPlayer>
            </LeftPanel>
            <RightPanel>
                <h1 style={{color: "#facc15"}}>Project : 철푸닥 [Chulfudoc]</h1>
                <a href="https://chulfudoc.xyz">
                    <Address>&nbsp;배포페이지 바로가기 <FaExternalLinkAlt style={{transform: "translateY(2px)"}}/></Address>
                </a>
                <IDPWBox>
                    <StyledContents style={{color: "#f97316"}}>&nbsp;&nbsp;৹ 관리자 계정 : admin01</StyledContents>
                    <StyledContents style={{color: "#f97316"}}>&nbsp;&nbsp;৹ 비밀번호 : !aA123456</StyledContents>
                </IDPWBox>
                <div>
                    <h2><StyledIcon />&nbsp;개요</h2>
                    <StyledContents>&nbsp;&nbsp;&nbsp;&nbsp;철푸닥 프로젝트는 긴급 상황을 미연에 방지하고 신속한 대응을 돕기 위해 제작되었습니다.</StyledContents>
                </div>
                <div>
                    <h2><StyledIcon />&nbsp;주요기능 및 개발환경</h2>
                    <h4>&nbsp;&nbsp;৹ 주요기능</h4>
                    <StyledContents style={{marginTop:"5px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;YOLO API를 활용해 사람이 쓰러진 상황을 자동으로 인식합니다.</StyledContents>
                    <StyledContents>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tmap API를 통해 응급실 보유 병원을 지도와 목록으로 확인할 수 있습니다.</StyledContents>
                    <StyledContents>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;실제 경험한 위급 상황이나 병원 정보를 공유하고 소통할 수 있습니다.</StyledContents>
                    <h4 style={{marginTop: "10px"}}>&nbsp;&nbsp;৹ 개발환경</h4>
                    <div style={{padding: "0 25px", margin: "10px 0"}}>
                        <img src="https://img.shields.io/badge/Nextjs-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="skill"/>&nbsp;
                        <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="skill"/>&nbsp;
                        <img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="skill"/>&nbsp;
                        <img src="https://img.shields.io/badge/Mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="skill"/><br/>
                        <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="skill"/>&nbsp;
                        <img src="https://img.shields.io/badge/Jenkins-D24939D?style=for-the-badge&logo=jenkins&logoColor=white" alt="skill"/>&nbsp;
                        <img src="https://img.shields.io/badge/Roboflow-6706CE?style=for-the-badge&logo=roboflow&logoColor=white" alt="skill"/>&nbsp;
                        <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="skill"/>
                    </div> 
                </div>
                <h2><StyledIcon />&nbsp;주된역할</h2>
                <StyledContents>&nbsp;&nbsp;&nbsp;&nbsp;회원관리&nbsp;<span style={{fontSize: "10px", display:"inline"}}>[회원가입, 로그인, REST API 연동 로그인]</span>, 이메일 인증 서비스, 메인페이지 UI 제작</StyledContents>
            </RightPanel>
        </Contianer>
    )
}

export default React.memo(Section1)