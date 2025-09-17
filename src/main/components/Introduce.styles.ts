import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 2vw;
    height: 100vh;
    padding: 0 17vw;
    
    background: linear-gradient(to bottom, #1f2937 0%, #273550 50%, #364173 100%);

    color: #fff;
    font-family: 'Arial'. sans-serif;
`;

export const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  min-width: 532px;
`;

export const SubTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin: 0;
`;

export const Title = styled.h1`
  font-size: 48px;
  margin: 0;
  white-space: nowrap;
`;

export const Socials = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;
`;

export const SocialIcon = styled.a`
  color: #ffffff;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    color: #facc15; // 옐로우 포인트
  }
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #22d3ee;
  margin-bottom: 20px;
`;

export const RightPanel = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  min-width: 532px;
`;

export const CenteredBlock = styled.div`
  width: max-content;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const Menu = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const MenuItem = styled.span<{active: boolean}>`
  color: ${(props) => (props.active ? "#facc15" : "#9ca3af")};
  cursor: pointer;
  font-size: 25px;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  &:hover {
    color: #facc15;
  }
`;

export const IntroductionWrapper = styled.div`
  height: 460px;
  position: relative;
  display: flex;
  justify-content: center; /* 가로 중앙 */
  align-items: center;     /* 세로 중앙 */
  min-width: 450px;
  min-height: 300px;      /* 필요에 따라 높이 조절 */
`;

export const Introduction = styled.div<{visible: boolean}>`
    position: absolute;
    top: 0;
    width: 100%;
    transition: opacity 0.5s ease;
    opacity: ${(props) => (props.visible ? 1 : 0)};
    pointer-events: ${(props) => (props.visible ? "auto" : "none")};
    display: flex;
    flex-direction: column;
`;

export const CTAButton = styled(Link)`
  color: #facc15;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  margin-top: 15px;
  &:hover {
    text-decoration: underline;
  }
`;

export const LogoImage = styled.img`
    width: 250px;
    height: auto;
`

export const SkillImage1 = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
  margin-bottom: 20px;
`

export const SkillImage2 = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  
  /* 가장자리 투명 처리 */
  -webkit-mask-image: radial-gradient(circle, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%);
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: cover;

  mask-image: radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 75%);
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: cover;
`;
