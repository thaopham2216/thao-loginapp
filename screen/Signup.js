
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
//formik
import { Formik } from 'formik';
//icon
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'

import { StyledContainer, InnerContainer, PageLogo, PageTitle, Subtitle, StyledFormArea,
    LeftIcon, StyledInputLabel, StyledTextInput, RightIcon,StyledButton, ButtonText,
    Colors, MsgBox, Line, ExtraView, ExtraText, TextLink, TextLinkContent} from './../components/styles'
import { View } from 'react-native';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

const {brand, darkLight, primary} = Colors;

const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);

    return(
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style='dark' />
                <InnerContainer>
                    <PageLogo resizeMode="cover" source={require('./../assets/img/logo.jpg')} />
                    <PageTitle>Wonderlust Travel</PageTitle>
                    <Subtitle>Signup</Subtitle>

                    <Formik 
                        initialValues={{fullName:'', email: '', dateOfBirth:'', password:'', confirmPassword: ''}}
                        onSubmit={(values) => {
                            console.log(values);
                            navigation.navigate("Welcome");
                        }}
                    >
                        {({handleChange, handleBlur, handleSubmit, values}) => (
                            <StyledFormArea>
                                <MyTextInput 
                                    label="Full Name"
                                    icon="person"
                                    placeholder='Enter your name'
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('fullName')}
                                    onBlur={handleBlur('fullName')}
                                    value={values.fullName}
                                />
                                <MyTextInput 
                                    label="Email Address"
                                    icon="mail"
                                    placeholder='Insert email'
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    keyboardType="email-address"
                                />
                                <MyTextInput 
                                    label="Date of Birth"
                                    icon="calendar"
                                    placeholder='MM/DD/YYYY'
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('dateOfBirth')}
                                    onBlur={handleBlur('dateOfBirth')}
                                    value={values.dateOfBirth}
                                />
                                <MyTextInput 
                                    label="Password"
                                    icon="lock"
                                    placeholder='Password'
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    secureTextEntry={hidePassword}
                                    isPassword={true}
                                    hidePassword={hidePassword}
                                    setHidePassword={setHidePassword}
                                />
                                <MyTextInput 
                                    label="Confirm Password"
                                    icon="lock"
                                    placeholder='Confirm password'
                                    placeholderTextColor={darkLight}
                                    onChangeText={handleChange('confirmPassword')}
                                    onBlur={handleBlur('confirmPassword')}
                                    value={values.confirmPassword}
                                    secureTextEntry={hidePassword}
                                    isPassword={true}
                                    hidePassword={hidePassword}
                                    setHidePassword={setHidePassword}
                                />
                                <MsgBox>...</MsgBox>
                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>Signup</ButtonText>
                                </StyledButton>
                                <Line />
                                <ExtraView>
                                    <ExtraText>Already have an account?</ExtraText>
                                    <TextLink onPress={()  => navigation.navigate("Login")}>
                                        <TextLinkContent>Login</TextLinkContent>
                                    </TextLink>
                                </ExtraView>
                            </StyledFormArea>
                        )}
                    </Formik>
                </InnerContainer>
            </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off': 'md-eye'} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    );
    
};

export default Signup;  