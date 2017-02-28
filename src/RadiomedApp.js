import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';
import {Container, Content} from 'native-base';
import {List} from './common/list';

export default class Radiomed extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List items={[]}/>

                </Content>
            </Container>
        );
    }
}

AppRegistry.registerComponent('Radiomed', () => Radiomed);
