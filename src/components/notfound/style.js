import styled from 'styled-components';

export const Wrapper = styled.div`
    height: calc(100vh - 58px);
    position: relative;
    svg {
        width: 100px;
        height: 100px;
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        margin: 0 auto;
        transform: translateY(-50%);
        .left {
            stop-color: ${props => props.theme.tabsBorderBottom};
        }
        .right {
            
        }
    }
`;