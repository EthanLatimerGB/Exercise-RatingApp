import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './textInput';
import Text from '../text';
import theme from '../../theme'


const FormikTextInput = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;

    const styles = StyleSheet.create({
        MainComponentStyle: {
            margin: 15
        },
        errorText: {
            marginTop: 5,
            color: theme.colors.error
        },
        textFormat: {
            justifyContent: 'center',
            borderColor: showError ? theme.colors.error: theme.colors.border,
            borderWidth: 1,
            borderRadius: 5,
            padding: 15,
        }
    });

    return(
        <View style={styles.MainComponentStyle}>
            <TextInput 
                onChangeText={value => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                value={field.value}
                error={showError}
                style={styles.textFormat}
                {...props}
            />
            {
                showError && <Text style={styles.errorText}>{meta.error}</Text>
            }
        </View>
    );
};

export default FormikTextInput;
