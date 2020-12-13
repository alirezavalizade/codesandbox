import { Box, DirectoryIcon } from '../';

import json from '../../../theme/vectors/json.svg';
import readme from '../../../theme/vectors/readme.svg';
import css from '../../../theme/vectors/css.svg';
import js from '../../../theme/vectors/js.svg';
import html from '../../../theme/vectors/html.svg';
import image from '../../../theme/vectors/image.svg';

// This file can be fast by having hashtable
const getIcon = (title) => {
    if (title.includes('.json')) {
        return json;
    }
    if (title.includes('.md')) {
        return readme;
    }
    if (title.includes('.css')) {
        return css;
    }
    if (title.includes('.js')) {
        return js;
    }
    if (title.includes('.html')) {
        return html;
    }
    if (title.includes('.gif') || title.includes('.png') || title.includes('.jpeg') || title.includes('.jpg')) {
        return image;
    }
    return '';
};

const Icon = ({ isDirectory, title }) => {
    if (isDirectory) {
        return (
            <Box mr={3}>
                <DirectoryIcon size={15} />
            </Box>
        );
    }
    if (getIcon(title)) {
        return (
            <Box mr={3}>
                <img src={getIcon(title)} width={18} />
            </Box>
        );
    }
    return null;
};

export default Icon;