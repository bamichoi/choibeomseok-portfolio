import styled from "styled-components";
import { GithubIcon, LinkedinIcon, MailIcon } from "@shared/assets";
import { useToastStore } from "@/shared/model";

export const Contact = () => {
  const { showToast } = useToastStore();

  const handleIconClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleMailClick = async () => {
    await navigator.clipboard.writeText("cbs412@naver.com");
    showToast({ message: "이메일 주소를 복사했어요. ✉️", type: "notice" });
  };

  return (
    <ContactContainer>
      <ContactIcons>
        <IconWrapper
          onClick={() => handleIconClick("https://github.com/bamichoi")}
        >
          <IconImage src={GithubIcon} alt="Github" />
        </IconWrapper>
        <IconWrapper
          onClick={() =>
            handleIconClick(
              "https://www.linkedin.com/in/beomseok-choi-02b9a0228"
            )
          }
        >
          <IconImage src={LinkedinIcon} alt="LinkedIn" />
        </IconWrapper>
        <IconWrapper onClick={handleMailClick}>
          <IconImage src={MailIcon} alt="Mail" />
        </IconWrapper>
      </ContactIcons>
    </ContactContainer>
  );
};


const ContactContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const IconWrapper = styled.div`
  cursor: pointer;
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 0.7;
  }
`;

const IconImage = styled.img`
  width: 40px;
  height: 40px;
  filter: invert(1);
  &:hover {
    filter: invert(0.6) sepia(1) saturate(2) hue-rotate(200deg);
  }
`;
