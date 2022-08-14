import styled from "@emotion/styled";
import { Container } from "./Container"

const StyledSocials = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 1em;
  flex-wrap: wrap;
`;

const StyledSocialLinks = styled.a`
    font-weight: 300;
    color: var(--secondaryTextColor);
    font-size: 0.9em;
    transition: 0.3s;
    &:hover {
        font-weight: 100;
        color: var(--mainLinkColor);
        font-size: 0.9em;
    }
`;

export const SocialComponent = () => {
    return (
        <Container className="">
            <StyledSocials>
                <StyledSocialLinks href="https://www.linkedin.com/in/rawat-shashank" target="_blank" rel="noreferrer">Linkedin</StyledSocialLinks>
                <StyledSocialLinks href="https://github.com/theboringhuman" target="_blank" rel="noreferrer">Github</StyledSocialLinks>
                <StyledSocialLinks href="" target="_blank" rel="noreferrer">Download Resume</StyledSocialLinks>
            </StyledSocials>
        </Container>
    )
}