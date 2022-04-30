
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyledContainer, InnerContainer, PageLogo, PageTitle, Subtitle, StyledFormArea,
    StyledButton, ButtonText, Line, WelcomeContainer, WelcomeImage, Avatar} from './../components/styles'

const Welcome = ({navigation}) => {
    return(
        <StyledContainer>
            <StatusBar style='dark' />
            <PageTitle welcome={true}>Welcome!</PageTitle>
            <Avatar resizeMode="cover" source={require('./../assets/img/logo.jpg')} />
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('./../assets/img/welcome.jpg')} />
                <WelcomeContainer>
                    <Subtitle  welcome={true}>Dare to live the life you’ve always wanted.</Subtitle>
                    <StyledFormArea>
                        <StyledButton onPress={() => {navigation.navigate("Welcome")}}>
                            <ButtonText>Logout</ButtonText>
                        </StyledButton>
                        <Line />
                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </StyledContainer>
    );
};

export default Welcome;  