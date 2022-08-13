import styled from "@emotion/styled";
import { ReactNode } from "react";

const StyledSection = styled.section`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--s2);
  padding-right: var(--s2);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-top: var(--s1);
  padding-bottom: var(--s1);
`;

export const Container = ({children}: { children: ReactNode }) => {
    return (
        <StyledSection>
            {children}
        </StyledSection>
    )

}