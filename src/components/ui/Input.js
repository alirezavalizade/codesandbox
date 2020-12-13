import styled, { css } from 'styled-components';

import { useState, useEffect, useCallback } from 'react';

import { Flex, Box } from './';

const Input = ({ prefix, postfix, onChange, parse, defaultValue, ...inputProps }) => {
    const [value, setValue] = useState(() => defaultValue)
    const [active, setActive] = useState(false);

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, [setValue]);

    const toggleActive = useCallback(() => {
        setActive(v => !v);
    }, [setActive]);
    
    useEffect(() => {
        onChange(parse(value));
    }, [value, onChange]);
    
    return (
        <Wrapper active={active}>
            {prefix ? 
            <Box>
                {prefix}
            </Box> : null}
            <InputElement  {...inputProps} onChange={handleChange} value={value} onFocus={toggleActive} onBlur={toggleActive} />
            {postfix ? 
            <Box>
                {postfix}
            </Box> : null}
        </Wrapper>
    );
};

Input.defaultProps = {
    prefix: null,
    postfix: null,
    onChange: () => {},
    parse: (v) => {
        if (!v) {
            return '';
        }
        return v.trim();
    },
    defaultValue: '',
};

export default Input;

const activeState = css`
    border-color: ${p => p.theme.colors.border.colors.secondary};

    > div {
        &:first-child {
            color: ${p => p.theme.colors.layout.colors.primary};
        }
    }
`;

const Wrapper = styled(Flex)`
    position: relative;
    align-items: center;
    background-color: ${p => p.theme.colors.form.input.bg};
    color: ${p => p.theme.colors.layout.colors.primary};
    border: 1px solid ${p => p.theme.colors.border.colors.primary};
    padding-left: ${p => p.theme.sizes[1]};
    padding-right: ${p => p.theme.sizes[1]};
    transition: border-color 0.2s ease 0s;
    border-radius: ${p => p.theme.radii.medium};
    height: ${p => p.theme.sizes[9]};

    > div {
        &:first-child, &:last-child {
            color: ${p => p.theme.colors.border.colors.secondary};
        }
    }

    &:hover {
        ${activeState};
    }

    ${p => p.active && activeState};
`;

const InputElement = styled(Box).attrs({ as: 'input' })`
    border: none;
    background-color: transparent;
    outline: 0;
    flex: 1;
    color: currentColor;
    height: 100%;
    padding-left: ${p => p.theme.sizes[1]};
    padding-right: ${p => p.theme.sizes[1]};
    font-size: ${p => p.theme.fontSizes[3]};
`;
