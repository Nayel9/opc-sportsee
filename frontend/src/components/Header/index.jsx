import mockedData from '/mockedData.json';
import styled from 'styled-components';

//********* CSS IN JS STYLE *********//
const StyledUserName = styled.span`
    font-weight: 500;
    color: #FF0000;
`;

const StyledHeader = styled.h3`
    margin: 0;
    font-size: 48px;
    font-weight: 500;
`;

const StyledP = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: #000000;
`;

//********* JS COMPONENT *********//

function Header() {

    const {firstName: userName} = mockedData.user.userInfos;

    return (
        <div className="Header">
            <StyledHeader>
                Bonjour
                <StyledUserName> {userName}</StyledUserName>
            </StyledHeader>
            <StyledP>Félicitation ! Vous avez explosé vos objectifs hier 👏</StyledP>
        </div>
    );
}

export default Header;