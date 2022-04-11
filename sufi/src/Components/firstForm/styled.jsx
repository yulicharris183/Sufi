import styled, { css } from 'styled-components'

export const Container = styled.div`

`
export const Title = styled.span`
    display: block;
    width: 80%;
    font-weight: bold;
    text-align: center;
    margin: 0 auto;
    letter-spacing: 0px;
    color: #DD3542;
    font-size: 18px;
`
export const SubTitle = styled.span`
    display: block;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    letter-spacing: 0px;
    color: #413E4D;
    font-size: 14px;
    margin: 15px 0 20px;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;
`
export const CustomImput = styled.input`
    font-size: 21px;
    padding: 20px;
    display: block;
    width: 100%;
    border: 1px solid #ABB9C780;
    border-radius: 6px;
    &:focus {
        outline: none;
    }
`
export const Label = styled.label`
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 12px;
    top: 15px;
    padding: 5px;
    transition: 0.2s ease all;
    ${CustomImput}:focus ~ & {
        top: -0px;
        padding: 5px;
        font-size: 13px;
    }
`
export const Content = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-evenly;
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