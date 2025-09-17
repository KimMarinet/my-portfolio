import React from "react"
import logo from "../../global/images/logo1.png"
import Swal from "sweetalert2";
import { CgProfile } from "react-icons/cg"
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import {
  LeftPanel,
  SubTitle,
  Title,
  Socials,
  SocialIcon,
  LogoImage,
} from '../components/Introduce.styles'

interface Skill{
    name: string,
    content: string
}

type ProfileInfo = {
    title: string,
    isImg: boolean,
    skills: Skill[]
}

const LeftSide = () =>{
    const handleProfileClick = ({title, isImg, skills}: ProfileInfo) => {
    
        const skillsHtml = isImg
        ? skills.map((skill) => `<img src=${skill.content}>`).join("")
        : skills.map((skill) => `<strong>${skill.name}:</strong> ${skill.content}`).join("");

        Swal.fire({
            title: title,
            html: skillsHtml,      
            icon: "info",                   
            confirmButtonText: "확인"
        });
    };
    return(
        <LeftPanel>
                <LogoImage src={logo} alt="logo"/>
                <SubTitle>Moonsoo Kim</SubTitle>
                <Title>프론트•백앤드를 잇는 다리</Title>
                <Socials>
                <SocialIcon href="#" onClick={(e) => {
                    e.preventDefault();
                    handleProfileClick({title:"연락처", isImg: false, skills:[{name: "Phone", content: "010-8849-3645"}]});
                }}><FaPhoneVolume /></SocialIcon>
                <SocialIcon href="#" onClick={(e) => {
                    e.preventDefault();
                    handleProfileClick({title:"이메일", isImg: false, skills:[{name: "e-mail", content: "kiana507680@gmail.com"}]});
                }}><MdOutlineEmail /></SocialIcon>
                <SocialIcon href="#" onClick={(e) => {
                    e.preventDefault();
                    handleProfileClick({title:"기술 스택", isImg: true, skills:[
                        {name: "JAVA", content: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"},
                        {name: "JavaScript", content: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"},
                        {name: "TypeScript", content: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"},
                        {name: "C#", content:"https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white"},
                        {name: "React", content:"https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"},
                        {name: "Next JS", content:"https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"},
                        {name: "HTML5", content:"https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"},
                        {name: "CSS3", content:"https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"},
                        {name: "SpringBoot", content:"https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"},
                        {name: "MySQL", content:"https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white"},
                        {name: "git", content:"https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"},
                        {name: "Docker", content:"https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"},
                        {name: "AWS", content:"https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"},
                        {name: "Jenkins", content:"https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white"}]})
                }}><CgProfile /></SocialIcon>
                </Socials>
            </LeftPanel>
    )
}

export default React.memo(LeftSide)