import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 20px;
`
export const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`
export const Title = styled.span`
    display: block;
    width: 62%;
    font-weight: bold;
    text-align: center;
    margin: 0 auto;
    letter-spacing: 0px;
    color: #DD3542;
    font-size: 18px;
`
export const SubTitle = styled.span`
    display: block;
    width: 90%;
    text-align: center;
    margin: 0 auto;
    letter-spacing: 0px;
    color: #413E4D;
    font-size: 14px;
    margin: 15px 0 20px;
`
export const Imagen = styled.img`
    :active {
        border: 2px solid #DD3542;
    }
    border: 2px solid transparent;
    border-radius: 50px;
`
export const ContentAvatar = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
    border: none;
`

const style1 = css`
    padding: 15px;
    width: 140px;
    color: #fff;
    font-size: 15px;
    border: none;
    background-color: #cdcecb;
    border-radius: 18px;
`
const style2 = css`
    padding: 15px;
    width: 140px;
    color: #fff;
    font-size: 15px;
    border: none;
    background-color: #DD3542;
    border-radius: 18px;
`
const style3 = css`
    padding: 15px;
    width: 140px;
    color: #DD3542;
    font-size: 15px;
    border: none;
    background-color: #fff;
    box-shadow: 0px 0px 6px #DD354250;
    border-radius: 18px;
`
export const Button = styled.button`
    ${({ sButton }) => sButton === 0 ? style1 : sButton === 1 ? style2 : style3};
`

// export const Img = styled.img`
//     display: block;
//     margin: 0 auto;
//     width: 224px;
//     height: 44px;
// `
