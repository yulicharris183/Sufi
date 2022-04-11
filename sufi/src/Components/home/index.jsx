import React, { useState } from "react";
import { Container, Content, SubTitle, Title, Imagen, ContentAvatar, Button } from "./styled";

export const Home = ({ setShow }) => {

    const [styleButton, setStyleButton] = useState(0)

    return (
        <Container>
            <Title>¡Ayúdanos a conocer para quién es el seguro!</Title>
            <SubTitle>Ingresa los datos del propietario del vehículo, para arrojar un resultado real en tu cotización.</SubTitle>
            <Content>
                <ContentAvatar onClick={() => setStyleButton(1)}>
                    <Imagen src="hombre.svg" />
                    <span style={{ fontSize: '10px', color: 'red' }}>HOMBRE</span>
                </ContentAvatar>
                <ContentAvatar onClick={() => setStyleButton(1)}>
                    <Imagen src="mujer.svg" />
                    <span style={{ fontSize: '10px', color: 'red' }}>MUJER</span>
                </ContentAvatar>
            </Content>
            <Content style={{ marginTop: '4rem' }}>
                <Button sButton={2} >Atrás</Button>
                <Button onClick={() => setShow(1)} sButton={styleButton}>Siguiente</Button>
            </Content>
        </Container>
    )
}