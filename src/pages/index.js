import * as React from "react"
import { Root, Main, Heading, Paragraph, Section, HeaderSection } from "../layout";
import "./index.css";

// markup
const IndexPage = () => {
  return (
    <Root>
      <Main>
        <title>Andrew &amp; Etta</title>
        <HeaderSection>
          <Heading>
          🤵🏼 Andrew &amp; Etta 👰🏻
          </Heading>
        </HeaderSection>
        <Section>
          <Paragraph>
            This is a website about a wedding
          </Paragraph>
        </Section>
      </Main>
    </Root>
  )
}

export default IndexPage
