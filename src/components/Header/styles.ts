import styled from 'styled-components/native';

const Container = styled.View`
  display: 'flex';
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

const Logo = styled.Image`
 width: 82px;
 height: 37px;
`;

const ProfileContainer = styled.View`
 height: 40px;
 width: 40px;
 border-radius: 50px;
 overflow: hidden;
 border-width: 2px;
 border-color: ${({theme}) => theme.COLORS.GRAY_1};
`

const ProfileImage = styled.Image`
 height: 100%;
 width: 100%;
 border-radius: 50px;
`


export { Container, Logo, ProfileContainer, ProfileImage }