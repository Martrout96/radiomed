import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';
import {Container,Header, Title, Content} from 'native-base';
import List from './common/list';
import {createStore} from 'redux';
import rootReducer from './rootReducer';
import {Provider} from 'react-redux';

const signos = [
    {name: "Panalizacion", id: 0},
    {name: "Consolidacion", id: 1},
    {name: "Enfisema", id: 2},
]
const store = createStore(rootReducer);

export default class Radiomed extends Component {

    render() {
        return (
            <Provider store={store}>
                <Container>
                    <Header>
                     <Title>Prueba</Title>
                    </Header>
                    <Content>
                        <List items={signos}/>
                    </Content>
                 </Container>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('Radiomed', () => Radiomed);
