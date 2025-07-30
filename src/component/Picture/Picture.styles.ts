import styled from "@emotion/styled";

const Picture = styled.img<{ width?: string }>`
    width: ${ ({width}) => width || '300px' };
`;

export default {
    Picture
};