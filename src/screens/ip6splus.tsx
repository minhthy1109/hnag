import * as React from 'react'
import * as Notifications from 'expo-notifications';

import { View } from 'react-native'
import { Button, Header } from 'react-native-elements'
import { Heading, Page } from './components'
import { submitToken, Token } from '../service/api';

async function getNotificationToken() {
  const {status} = await Notifications.getPermissionsAsync()
  if (status != 'granted') {
    const {status} = await Notifications.requestPermissionsAsync()
    if (status != 'granted') {
        alert('Lấy token bị failed rồi 😒')
        return
    }
  }

  const tokenData = await Notifications.getExpoPushTokenAsync()
  const token = tokenData.data
  console.log({token})
  return token
}

const ip6splus : React.FC = () => {
  const [token, setToken] = React.useState<Token | undefined>()

   return (
   <View>
        <Header centerComponent = {{ text: '6S PLUS 💓', style: { color: '#CCCCFF'} }} />
        <Page>
            <Heading>{token ? `Bạn có mã số là ${token.id}.` : 'Bạn chưa có mã số xác thực, bấm vào nút dưới để lấy mã'
            } </Heading>
            <Button title = "Bấm vào đây để lấy mã" onPress={async () => {
              const token = await getNotificationToken()
              if (token) {
                const storedToken = await submitToken(token)
                setToken(storedToken)
              }
            }} />
        </Page>    
   </View> 
   )
}
/* 72MXG3f8j60KrO-cXWiXYAXSbdT209O-jySeCHPE */ 
export default ip6splus