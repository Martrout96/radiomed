import React, {Component} from 'react';
import {List, ListItem, Text} from 'native-base';

export default class MyList extends Component{
    renderItems(item){
        return (
            <ListItem key={item.id}>
                <Text>{item.name}</Text>
            </ListItem>
        )
    }

    render(){
        return (
            <List>
                {this.props.items.map(this.renderItems)}
            </List>
        )
    }

}