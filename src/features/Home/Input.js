import React, { Component } from 'react'
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

const InputWrapper = styled.View`
  backgroundColor: papayawhip;
`

const ItemInput = styled.TextInput`flex-direction: row;`
const AddButton = styled.Button`alignSelf: stretch;`
export default class Input extends Component {
  render() {
    return (
      <InputWrapper>
        <ItemInput />
        <AddButton title="Add" onPress={_ => _} />
      </InputWrapper>
    )
  }
}

