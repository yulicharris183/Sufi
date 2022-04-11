import React from "react";
import { Box, Container, Content, Text1, Text2 } from "./styled";

export const Header = () => {
    return(
        <Container>
            <Content>
            <img src="red.PNG"></img>
            <Box>
                <Text1>Paso 1/3</Text1>
                <Text2>Tus Datos</Text2>
                <img src="barra.PNG"></img>
            </Box>
            </Content>
        </Container>
    )
}