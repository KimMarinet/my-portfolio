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

const Section2 = () => {
    
    return(
        <Contianer>
            <LeftPanel>
                <VideoPlayer src="https://www.youtube.com/watch?v=lvFSxnP9Wlc" controls></VideoPlayer>
            </LeftPanel>
            <RightPanel>
                <h1 style={{color: "#facc15"}}>Project : 맹글맹글 [Maengle]</h1>
                <a href="https://maengle.xyz">
                    <Address>&nbsp;배포페이지 바로가기 <FaExternalLinkAlt style={{transform: "translateY(2px)"}}/></Address>
                </a>
                <IDPWBox>
                    <StyledContents style={{color: "#f97316"}}>&nbsp;&nbsp;৹ 관리자 계정 : admin01</StyledContents>
                    <StyledContents style={{color: "#f97316"}}>&nbsp;&nbsp;৹ 비밀번호 : _aA123456</StyledContents>
                </IDPWBox>
                <div>
                    <h2><StyledIcon />&nbsp;개요</h2>
                    <StyledContents>&nbsp;&nbsp;&nbsp;&nbsp;AI를 활용하여 채팅을 주고 받을 수 있는 서비스를 제공합니다.</StyledContents>
                    <StyledContents>&nbsp;&nbsp;&nbsp;&nbsp;전이 학습을 통해 모델마다 특성을 주어 모델마다 색다름 제공을 목표로 합니다.</StyledContents>
                </div>
                <div>
                    <h2><StyledIcon />&nbsp;주요기능 및 개발환경</h2>
                    <h4>&nbsp;&nbsp;৹ 주요기능</h4>
                    <StyledContents style={{marginTop:"5px"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;사용자의 채팅에 LLM 모델이 답변합니다.</StyledContents>
                    <StyledContents>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;답변 내용의 감정을 판단하여 이모티콘으로 함께 표현합니다.</StyledContents>
                    <StyledContents>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;대화내역을 게시판을 통해 사용자간 공유할 수 있습니다.</StyledContents>
                    <h4 style={{marginTop: "10px"}}>&nbsp;&nbsp;৹ 개발환경</h4>
                    <div style={{padding: "0 25px", margin: "10px 0"}}>
                        <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" alt="skill"/>&nbsp;
                        <img src="https://img.shields.io/badge/Thymeleaf-%23005C0F.svg?style=for-the-badge&logo=Thymeleaf&logoColor=white" alt="skill"/>&nbsp;
                        <img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="skill"/><br/>
                        <img src="https://img.shields.io/badge/Mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="skill"/>&nbsp;
                        <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="skill"/>&nbsp;
                        <img src="https://img.shields.io/badge/Jenkins-D24939D?style=for-the-badge&logo=jenkins&logoColor=white" alt="skill"/>&nbsp;
                        <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="skill"/>
                    </div> 
                </div>
                <h2><StyledIcon />&nbsp;주된역할</h2>
                <StyledContents>&nbsp;&nbsp;&nbsp;&nbsp;팀장, 공통/보안 설정, 회원관리&nbsp;<span style={{fontSize: "10px", display:"inline"}}>[회원가입, 로그인, REST API 연동 로그인]</span>,</StyledContents>
                <StyledContents>&nbsp;&nbsp;&nbsp;&nbsp;이메일 인증 서비스, QA<span style={{fontSize: "10px", display:"inline"}}>&nbsp;[개발 중 발생하는 에러 전반 해결]</span></StyledContents>
            </RightPanel>
        </Contianer>
    )
}

export default React.memo(Section2)