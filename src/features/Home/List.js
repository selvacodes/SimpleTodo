import React, { Component } from 'react'
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

const ListWrapper = styled.View`
  margin: 50px 0;
`

export default class List extends Component {
  render() {
    return (
      <ListWrapper>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
      </ListWrapper>
    )
  }
}


