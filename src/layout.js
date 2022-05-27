
import * as React from "react";
import styled from "styled-components";
import beachImg from "./images/beach.jpg";

export const Root = styled.div`
	display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  position: relative;
  max-width: 768px;
  flex: 1;
`;

const SectionImpl = styled.section`
  display: flex;
  justify-content: center;
  padding: 2em;
`;

export const Section = ({children, ...rest}) => <SectionImpl {...rest}><Container>{children}</Container></SectionImpl>;

export const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;

export const HeaderSection = styled(Section)`
  &:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-image: url(${beachImg});
    background-repeat: no-repeat;
    background-position: center 70%;
    background-size: cover;
  }

  overflow: hidden;
  position: relative;
  height: 12em;
  color: var(--color-ivory);
`;

export const Heading = styled.h1`
  font-family: var(--font-script);
  text-align: center;
  margin-top: 7em;
  margin-bottom: 4em;

  & em {
    color: #663399;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 48px;
`;

export const Code = styled.code`
  color: #8A6534;
  padding: 4px;
  background-color: #FFF4DB;
  font-size: 1.25rem;
  border-radius: 4px;
`;