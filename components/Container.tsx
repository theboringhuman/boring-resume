import styled from "@emotion/styled";
import { ReactNode } from "react";

const StyledSection = styled.section`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  width: 100%;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--s2);
  padding-right: var(--s2);
  padding-top: var(--s2);
  padding-bottom: var(--s2);
  @media (max-width:600px) {
    padding-top: var(--s1);
    padding-bottom: var(--s1);
  }
`;

export const Container = ({ children, className }: { children: ReactNode, className: string | undefined }) => {
    return (
        <StyledSection className={className}>
            {children}
        </StyledSection>
    )

}