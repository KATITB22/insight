/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },
            colors: {
                DarkBlue: '#0d3240',
                Blue: '#96BBE6',
                White: '#FFFFFF',
                Gray: '#EEEEEE',
            },
            fontFamily: {
                Heading: 'Magilio',
                Subheading: 'Alegreya Semibold',
                Title: 'Alegreya Sans Medium',
                Body: 'Alegreya Sans Regular',
                Caption: 'Alegreya Sans Thin',
                Bold: 'Alegreya Sans Bold',
                Italic: 'Alegreya Sans Italic',
                BoldItalic: 'Alegreya Sans Bold and Italic',
            },
            fontSize: {
                h1: 96,
                h2: 60,
                h3: 48,
                h4: 34,
                title: 24,
                body: 20,
                caption: 16,
                overline: 14,
                caption_smaller: 12,
                overline_smaller: 10,
            },
            dropShadow: {
                errorStyle: '-1px -2px 0px #463322',
            },
            height: {
                content: 'calc(100vh - 4rem)',
                sm: '100px',
                md: '150px',
                lg: '200px',
            },
            minHeight: {
                content: 'calc(100vh - 4rem)',
            },
        },
    },
    plugins: [],
};
