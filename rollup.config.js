// rollup.config.js
import scss from 'rollup-plugin-scss'
import html from '@rollup/plugin-html';
import fs from 'fs';

const template = ({ attributes, bundle, files, publicPath, title }) => { return fs.readFileSync('./index.html') }

export default {
    input: 'src/js/app.js',
    output: {
        file: 'dist/app.js',
        format: 'esm'
    },
    plugins: [
        scss() ,
        html({
            template
        })// will output compiled styles to output.css
    ]
}