

import styled from "styled-components";


export const CustomSection = styled.section<{container?: boolean}>`
    display:flex;
    flex-direction:row;
    max-width: ${(props: { container?: boolean }) =>  (props.container) ? '1300px' : 'auto' };
    margin: auto
`