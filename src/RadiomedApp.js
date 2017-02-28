import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';
import {Container,Header, Title, Content} from 'native-base';
import List from './common/list';

const signos = [
    {name: "Panalizacion", id: 0},
    {name: "Consolidacion", id: 1},
    {name: "Enfisema", id: 2},
]

export default class Radiomed extends Component {

    render() {
        return (
            <Container>
                <Header>
                    <Title>Prueba</Title>
                </Header>
                <Content>
                    <List items={signos}/>
                </Content>
            </Container>
        );
    }
}

AppRegistry.registerComponent('Radiomed', () => Radiomed);
