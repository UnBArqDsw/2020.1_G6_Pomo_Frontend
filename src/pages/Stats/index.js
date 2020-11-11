import React from 'react';
import {
    Container,
    Graphics,
    LGraphics,
    LTitle,
    Info,
    Description,

  } from './styles';

export default function Stats() {
    const users =  [{name: 'grafico 1'},{name: 'grafico 2'},{name: 'grafico 3'},{name: 'grafico 4'}]
    return (
        <Container>
            <Graphics
            data={users}
            keyExtractor={(user) => String(user.name)}
            renderItem={({item}) => (
                <LGraphics>
                    <Info>
                        <LTitle>{item.name}</LTitle>
                        <Description>{'descrição'}</Description>
                    </Info>
                </LGraphics>
            )}
            />
        </Container>
    );
}