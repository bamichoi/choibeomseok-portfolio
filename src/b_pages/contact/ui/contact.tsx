import styled from "styled-components";
import GithubSVG from "@shared/assets/icons/github.svg?react";
import LinkedinSVG from "@shared/assets/icons/linkedin.svg?react";
import MailSVG from "@shared/assets/icons/mail.svg?react";
import useToastStore from "@/f_shared/model/toastStore";

const Contact = () => {
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
          <GithubSVG />
        </IconWrapper>
        <IconWrapper
          onClick={() =>
            handleIconClick(
              "https://www.linkedin.com/in/beomseok-choi-02b9a0228"
            )
          }
        >
          <LinkedinSVG />
        </IconWrapper>
        <IconWrapper onClick={handleMailClick}>
          <MailSVG />
        </IconWrapper>
      </ContactIcons>
    </ContactContainer>
  );
};

export default Contact;

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
  &:hover {
    svg {
      g {
        fill: #9bb7d4;
      }
      path {
        fill: #9bb7d4;
      }
    }
  }
`;
