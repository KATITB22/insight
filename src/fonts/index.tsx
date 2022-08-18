import { Global } from '@emotion/react';

const Fonts = () => (
    <Global
        styles={`@font-face {
            font-family: 'Magilio';
            src: url('./fonts/Magilio.otf');
        }
        `}
    />
);

export default Fonts;
