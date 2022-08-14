import styled from "@emotion/styled"
import { Container } from "./Container"

const StyledTechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  font-size: 0.9em;
`;

const StyledTechStack = styled.div`
  border: 1px solid var(--mainBorderColor);
  border-radius: 5px;
  padding: 0.5em 1em;
  align-items: center;
`

export const TechStackComponent = () => {
    return (
        <Container className="">
            <h2>Tech Stack</h2>

            <StyledTechStackContainer>
                <StyledTechStack><span>Python, JavaScript, Typescript</span></StyledTechStack>
                <StyledTechStack><span>HTML, CSS</span></StyledTechStack>
                <StyledTechStack><span>NodeJS, Django, Express, Flask</span></StyledTechStack>
                <StyledTechStack><span>React, Next JS, Angular</span></StyledTechStack>
                <StyledTechStack><span>Postgres, MongoDB, MySQL</span></StyledTechStack>
            </StyledTechStackContainer>
        </Container>
    )
}