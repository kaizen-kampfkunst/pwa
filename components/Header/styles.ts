import link from 'next/link';
import styled from 'styled-components';

// Mobile Nav
export const MobileNavigation = styled.div<{ open: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    z-index: 2;
    transition: transform 0.5s ease;
    transform: translateY(${({ open }) => (open ? '0' : '-100%')});
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: scroll;
`;

export const NavLink = styled(link)``;

export const NavValue = styled.div`
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    margin-bottom: 40px;
    font-size: 24px;
    font-weight: 700;

    &:last-child {
        margin-bottom: 0;
    }
`;

// Header
export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
`;

export const Inner = styled.div`
    height: 122px;
    display: flex;
    padding: 0 24px;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    justify-content: space-between;
`;

export const LogoLink = styled(link)``;

export const Logo = styled.div<{ open: boolean }>`
    font-size: 24px;
    font-family: ${({ theme }) => theme.fonts.headlines};
    text-transform: uppercase;
    z-index: 3;
    color: ${({ theme, open }) => (open ? theme.colors.white : theme.colors.black)};
`;

export const BurgerInner = styled.div`
    width: 24px;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Line = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    transition: transform 0.8s ease, color 0.2s ease;

    &:nth-child(1) {
        transform: translateY(-7px);
    }

    &:nth-child(3) {
        transform: translateY(7px);
    }
`;

export const Burger = styled.div<{ open: boolean }>`
    width: 58px;
    height: 58px;
    transition: background-color 0.2s ease;
    background-color: ${({ theme, open }) => (open ? theme.colors.white : theme.colors.black)};
    border-radius: 50%;
    position: relative;
    z-index: 3;

    ${({ open, theme }) =>
        open &&
        `

        ${Line} {
            background-color: ${theme.colors.black};

            &:nth-child(1) {
                transform: translateY(0) rotate(45deg);
            }

            &:nth-child(2) {
                opacity: 0;
            }
        
            &:nth-child(3) {
                transform: translateY(0) rotate(-45deg);
            }
        }

    `}
`;
