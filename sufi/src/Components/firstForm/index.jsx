import React, { useState } from 'react'
import { Container, CustomImput, Form, Label, SubTitle, Title, Content, Button } from './styled'


const Input = ({ required, value, name, onChange, title, type }) => {
    return (
        <>
            <div style={{ margin: '7px 0', position: 'relative', width: '80%' }}>
                <CustomImput onChange={onChange} required={required} value={value} name={name} type={type} />
                <Label>{title}</Label>
            </div>
        </>
    )
}

export const FirstForm = () => {
    const [styleButton, setStyleButton] = useState(0)

    const [values, setValues] = useState()

    const handleChange = (e) => {
        const { name, value } = e?.target
        setValues({ ...values, [name]: value })
    }

    console.log(values)


    return (
        <Container>
            <Title>¡Listo, casi se nos olvida, no nos hemos presentado!</Title>
            <SubTitle>Nos gusta llamarte por tu nombre 😉</SubTitle>
            <Form>
                <Input value={values?.prueba || ''} name='prueba' required type='text' title='Tipo de documento' onChange={handleChange} />
                <Input value={values?.documento || ''} name='documento' required type='number' title='Número de documento' onChange={handleChange} />
                <Input value={values?.nombre || ''} name='nombre' required type='text' title='Nombre' onChange={handleChange} />
                <Input value={values?.apellido || ''} name='apellido' required type='text' title='Apellido' onChange={handleChange} />
                <Input value={values?.email || ''} name='email' required type='email' title='Email' onChange={handleChange} />
                <Input value={values?.celular || ''} name='celular' required type='tel' title='Celular' onChange={handleChange} />
            </Form>
            <Content >
                <Button sButton={2} >Atrás</Button>
                <Button disabled={!values?.prueba && !values?.celular} sButton={!values?.prueba && !values?.celular ? 0 : 1}>¡Y Ese soy yo!</Button>
            </Content>
        </Container>
    )
}