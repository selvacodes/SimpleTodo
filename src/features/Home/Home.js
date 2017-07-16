import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

import Input from './Input'
import List from './List'

const HomeWrapper = styled.View`
  flex: 1;
  backgroundColor: papayawhip;
  alignItems: center;
  padding: 100px 0;
`

export default class Home extends React.Component {
  render() {
    return (
      <HomeWrapper>
        <View>
          <Input />
          <List />
        </View>
      </HomeWrapper>
    )
  }
}
