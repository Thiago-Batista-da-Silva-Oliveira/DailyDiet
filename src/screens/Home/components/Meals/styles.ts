import styled from 'styled-components/native';

const Container = styled.View`
display: flex;
gap: 10px;
width: 100%;
`;

const ComponentTitle = styled.Text`
 font-size: ${({theme}) => theme.FONT_SIZE.LG};
 color: ${({theme}) => theme.COLORS.GRAY_1};
 font-weight: 400;
`

const Title = styled.Text`
 font-size: ${({theme}) => theme.FONT_SIZE.XL};
 color: ${({theme}) => theme.COLORS.GRAY_1};
 font-weight: 700;
`

const SubTitle = styled.Text`
 font-size: ${({theme}) => theme.FONT_SIZE.LG};
 color: ${({theme}) => theme.COLORS.GRAY_2};
 font-weight: 400;
` 
const RegisteredMealsContainer = styled.View`
display: flex;
gap: 10px;
width: 100%;
margin: 10px 0px;
`;

const MealContainer = styled.TouchableOpacity`
display: flex;
flex-direction: row;
padding: 14px 16px 14px 12px;
align-items: center;
gap: 12px;
align-self: stretch;
border-radius: 6px;
border-width: 1px;
border-color: ${({theme}) => theme.COLORS.GRAY_5};
width: 100%;
`;

const Divisor = styled.View`
height: 14px;
width: 1px;
background-color: ${({theme}) => theme.COLORS.GRAY_4};
`;

const Meal = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
flex: 1;
`;

const OnDietCircle = styled.View<{onDiet: boolean}>`
width: 14px;
height: 14px;
border-radius: 50px;
background-color: ${({theme, onDiet}) => onDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export { Container, ComponentTitle, Title, SubTitle, RegisteredMealsContainer, MealContainer, Divisor, Meal, OnDietCircle}