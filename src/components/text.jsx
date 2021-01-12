import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    colorTextPrimary: {
        color: theme.colors.textPrimary
    },
    formatLanguage: {
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        padding: 5,
        alignSelf: 'flex-start'
    },
    colorLanguage: {
        color: '#FFFFFF'
    },
    appBarText: {
        color: theme.colors.textAppbar,
        padding: 10,
    },
    fontSizeSubheading: {
        fontSize: theme.fontSizes.subheading,
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold,
    },
});

const Text = ({ color, fontSize, fontWeight, isAppbar, style, format,  ...props }) => {
    const textStyle = [
        styles.text,
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'textPrimary' && styles.colorTextPrimary,
        color === 'primary' && styles.colorPrimary,
        color === 'textLanguage' && styles.colorLanguage,
        color === 'white' && styles.colorWhite,
        format === 'language' && styles.formatLanguage,
        isAppbar === 'true' && styles.appBarText,
        fontSize === 'subheading' && styles.fontSizeSubheading,
        fontWeight === 'bold' && styles.fontWeightBold,
        style,
    ];

    return <NativeText style={textStyle} {...props} />;
};

export default Text;