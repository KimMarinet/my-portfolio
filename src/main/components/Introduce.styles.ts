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
`;

export const RightPanel = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
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

export const Introduction = styled.div`
    min-width: 450px;
    text-align: left;
    margin: 20px 0 20px;
`;

export const CTAButton = styled.a`
  color: #facc15;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const LogoImage = styled.img`
    width: 250px;
    height: auto;
`