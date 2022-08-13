import styled from "@emotion/styled";
import { Container } from './Container';
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
    ssr: false,
});

const StyledHeader = styled.header`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: var(--headerBorderColor);
  background-color: var(--mainBgColor);
  transition: background 0.5s ease-in-out;
  -webkit-transition: background 0.5s ease-in-out;
  & button:last-of-type{
    margin-left: auto;
  }
`;

const StyledName = styled.span`
  text-transform: uppercase;
`;

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <StyledName>Shashank Rawat </StyledName>
                <ThemeToggle />
            </Container>
        </StyledHeader>
    )
}