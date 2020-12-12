module.exports = {
    purge: ['./pages/**/*.js', './components/**/*.js'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true
        },
        extend: {
            colors: {
                'next-blue': '#0070f3',
            },
            fontFamily: {
                'display': ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"]
            }
        },
    },
    variants: {
        extend: {
            textDecoration: ['active'],
            textColor: ['active'],
            borderColor: ['active']
        },
    },
    plugins: [],
}
