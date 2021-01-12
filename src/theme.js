import { Platform } from 'react-native'

const theme = {
    colors: {
        textAppbar: '#e2e2e2',
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
        border: '#24292e',
        error: '#ed1202'
    },
    fontSizes: {
        body: 14,
        subheading: 16,
    },
    fonts: {
        main: Platform.select({
            ios: 'Arial',
            android: 'Roboto',
            default: 'System'
        }),
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
    backgrounds: {
        appBar: '#24292e',
        main: '#e1e4e8'
    }
};
  
export default theme;