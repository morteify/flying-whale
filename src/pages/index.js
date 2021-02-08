import * as React from "react";
import styled from "styled-components";
import whaleTail from "../images/whale-tail.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import "@fontsource/open-sans";
import "@fontsource/open-sans/800.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/400.css";

const Container = styled.main`
  margin: 0;
  padding: 0;
  width: calc(100vw - 16px);
  height: calc(100vh - 16px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #232129;
  font-family: Open Sans;
  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: #343434;
  margin-bottom: 0.1em;
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  color: #545454;
  font-size: 1.05rem;
  font-weight: 400;
`;

const IconContainer = styled.div`
  display: flex;
  margin-top: 0.75em;
`;

const Icon = styled.img`
  width: 1.5em;
  margin-right: 1.35em;
  & :hover {
    cursor: pointer;
  }
`;

const Link = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})``;

const LinkedinLink = styled(Link).attrs({
  href: "https://www.linkedin.com/in/michał-węglarz-00a6501b5/",
})``;

const LinkedinIcon = styled(Icon).attrs({
  alt: "Linkedin Icon",
})``;

const GithubLink = styled(Link).attrs({
  href: "https://github.com/morteify",
})``;

const GithubIcon = styled(Icon).attrs({
  alt: "Github Icon",
})`
  width: 1.75em;
`;

const ContactButton = styled.a.attrs({
  href: "mailto:weglarz.michal@outlook.com",
})`
  max-width: 10em;
  height: 2.55em;
  background: #e36387;
  border-radius: 12px;
  display: grid;
  place-items: center;
  color: white;
  font-size: 24px;
  padding: 0 2em;
  text-decoration: none;
  font-weight: 600;
  margin-top: 2em;
  &:hover {
    cursor: pointer;
    background: #e34d77;
    transition: all 0.35s;
  }
`;

const Accent = styled.span`
  color: #e36387;
`;

const WhaleTail = styled.img.attrs({ src: whaleTail })`
  width: 40em;
  height: 40em;
  @media (max-width: 1024px) {
    width: 25em;
    height: 25em;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 2em;
`;

const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IndexPage = () => {
  return (
    <Container>
      <LeftSection>
        <title>Michał Węglarz</title>
        <Title>
          Hi, my name is
          <Accent> Michał</Accent>
        </Title>
        <Subtitle>I'm Frontend Developer located in Cracow, Poland</Subtitle>
        <IconContainer>
          <LinkedinLink>
            <LinkedinIcon src={linkedin}></LinkedinIcon>
          </LinkedinLink>
          <GithubLink>
            <GithubIcon src={github}></GithubIcon>
          </GithubLink>
        </IconContainer>
        <ContactButton>Contact me</ContactButton>
      </LeftSection>
      <RightSection>
        <WhaleTail />
      </RightSection>
    </Container>
  );
};

export default IndexPage;
