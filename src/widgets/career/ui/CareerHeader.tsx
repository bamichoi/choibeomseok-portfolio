import React from "react";
import styled from "styled-components";

interface CareerHeaderProps {
  title: string;
  period: string;
  logo?: React.ComponentType | string;
  isExpanded: boolean;
  onToggle: () => void;
}

export const CareerHeader = ({ title, period, logo, isExpanded, onToggle }: CareerHeaderProps) => {
  return (
    <TitleWrapper onClick={onToggle}>
      <LogoWrapper>
        {logo ? (
          typeof logo === 'string' ? (
            <LogoImage src={logo} alt={`${title} logo`} />
          ) : (
            React.createElement(logo)
          )
        ) : (
          <DefaultLogo>{title}</DefaultLogo>
        )}
      </LogoWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <Period>{period}</Period>
      </TextWrapper>
      <ToggleIcon $isExpanded={isExpanded}>
        {isExpanded ? "▼" : "▲"}
      </ToggleIcon>
    </TitleWrapper>
  );
};


const TitleWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 2rem;
  cursor: pointer;
  position: relative;
  padding-bottom: 1rem;
  border-bottom: 0.5px solid #9bb7d4;

  &:hover {
    opacity: 0.8;
  }
`;

const LogoWrapper = styled.div`
  width: 50px;
  height: 50px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.div`
  font-size: 1.3rem;
  color: #9bb7d4;
  font-weight: semibold;
`;

const Period = styled.div`
  font-size: 0.9rem;
  color: #9bb7d4;
  font-weight: lighter;
`;

const ToggleIcon = styled.div<{ $isExpanded: boolean }>`
  color: #9bb7d4;
  font-size: 0.8rem;
  margin-left: auto;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const DefaultLogo = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  font-weight: bold;
  border-radius: 4px;
  text-align: center;
`;