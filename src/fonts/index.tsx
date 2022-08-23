import { Global } from '@emotion/react';

const Fonts = () => (
    <Global
        styles={`@font-face {
            font-family: 'Magilio';
            src: url('./fonts/Magilio.otf');
        }

        @font-face {
            font-family: 'Alegreya Semibold';
            src: url('./fonts/Alegreya-SemiBold.ttf');
        }

        @font-face {
            font-family: 'Alegreya Sans Regular';
            src: url('./fonts/AlegreyaSans-Regular.ttf');
        }

        @font-face {
            font-family: 'Alegreya Sans Thin';
            src: url('./fonts/AlegreyaSans-Light.ttf');
        }

        @font-face {
            font-family: 'Alegreya Sans Medium';
            src: url('./fonts/AlegreyaSans-Medium.ttf');
        }

        @font-face {
            font-family: 'Alegreya Sans Bold';
            src: url('./fonts/AlegreyaSans-Bold.ttf');
        }
        
        @font-face {
            font-family: 'Alegreya Sans Italic';
            src: url('./fonts/AlegreyaSans-Italic.ttf');
        }
        
        @font-face {
            font-family: 'Alegreya Sans Bold and Italic';
            src: url('./fonts/AlegreyaSans-BoldItalic.ttf');
        }
        `}
    />
);

export default Fonts;
