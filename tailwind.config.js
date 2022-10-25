colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            flexGrow: {
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                5: 5,
                6: 6,
                7: 7,
                8: 8,
                9: 9,
                10: 10,
                11: 11,
                12: 12,
            },
            colors: {
                gray: colors.neutral,
                gray: {
                    600: '#303039',
                    700: '#2a2a32',
                    800: '#232329',
                    900: "#141418",
                }
            },
            fontFamily: {
                'raleway': ['Raleway', 'sans-serif'],
                'ptserif': ['PT Serif', 'serif']
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
