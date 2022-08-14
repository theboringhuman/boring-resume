import styled from "@emotion/styled"
import { Container } from "./Container"

const StyledListContainer = styled.ul`
    list-style: none;
`;

export const SkillsComponent = () => {
    return (
        <Container className="">
            <h2>Skills & Qualifications</h2>
            <StyledListContainer>
                <li>✔️ 7 Years experience with front & backend development</li>
                <li>✔️ Extensive knowledge in API & Database Design.</li>
                <li>✔️ Experienced with handling projects end to end. </li>
            </StyledListContainer>
        </Container>
    )
}