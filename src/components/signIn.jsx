import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Text from './text';
import * as yup from 'yup';

import FormikTextInput from './formikComponents/formikTextInput';
import { Formik } from 'formik';
import theme from '../theme';
import useSignIn from '../hooks/useSignin';

const styles = StyleSheet.create({
    mainStyle: {
    },
    inputComponents: {
        
    },
    buttonStyle: {
        padding: 10,   
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        margin: 15,
    },
    loginFormStyle: {
        backgroundColor: '#FFFFFF',
    }
});

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(5, 'Username must be over 6 characters')
        .max(30, 'Username cant\' be over 30 characters')
        .required('Username is required'),
    password: yup
        .string()
        .min(7, 'Password must be over 7 characters')
        .max(20, 'Password can\'t be over 20 characters')
        .required('Password is required'),
});

const initialValues = {
    username: '',
    password: ''
};

const SignInForm = ({ onSubmit }) => {
    return(
        <View mainStyle={styles.mainStyle}>
            <View style={styles.loginFormStyle}>
                <FormikTextInput name='username' placeholder='Username' testID='loginForm-usernameInput'/>
                <FormikTextInput name='password' placeholder='Password' secureTextEntry testID='loginForm-passwordInput'/>
                <TouchableWithoutFeedback onPress={onSubmit}>
                    <View style={styles.buttonStyle}>
                        <Text color='textLanguage' fontWeight='bold' style={{ textAlign: 'center' }} testID='loginForm-submitButton' >Log in</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

export const SignInContainer = ({ onSubmit }) => (
    <View>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
            {({handleSubmit}) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    </View>
)

const SignIn = () => {
    const [signIn] = useSignIn();
    const onSubmit = async (values) => {
        const { username, password } = values;
        try{
            await signIn({ username, password });
        }catch(e){
            console.error(e);
        }
    };

    return <SignInContainer onSubmit={onSubmit} />
};

export default SignIn;