import React, {Component} from 'react';
import {List, ListItem, Text} from 'native-base';

export default class MyList extends Component{
    renderItems(){
        this.props.items.map((item)=>{
            return(
                <ListItem key={item}>
                    <Text> {item.name}</Text>
                </ListItem>
            )
        });
    }

    render(){

        return (
            <List>
                {this.renderItems()}
            </List>
        )
    }

}