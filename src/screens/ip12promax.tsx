import * as React from 'react'
import styled from 'styled-components'
import  {View, Text, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native'
import {Header, Input, Button} from 'react-native-elements'
import { Heading, Page } from './components'
import { getToken, sendPushNotification, Token } from '../service/api'

const SummonButton = styled(TouchableOpacity)<{ color?: string }>`
    background-color: ${p => p.color || 'red'};
    flex: 48% 0 0;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 10px;
    display: flex;
    height: 120px;
    align-items: center;
    justify-content: center;
    color: white;
`
const ButtonContainer = styled(View)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`

const SummonButtonText = styled(Text)`
    color: white;
    font-size: 20px;
` 

const SummonScrollView = styled(ScrollView)`
    marginHorizontal: 10px;
`
/*const token = 'ExponentPushToken[zSYEXAFwZAxyy4ZWCSo5gG]' */

const ip12promax : React.FC = () => {
    const [tokenInput, setTokenInput] = React.useState('')
    const [token, setToken] = React.useState<Token | undefined>()

   return (
   <View>
       <Header centerComponent = {{ text: '12 PRO MAX  💖', style: { color: '#CAE5E8'} }} />
       <Page>
       <SummonScrollView>
            {token ? (<View>
                    <Heading>Mã số máy bên kia là {token.id}. </Heading>
                        <Heading>🍱 Xin mời chọn thực đơn 🍱</Heading>
                </View> 
                ) : (
                    <View>
                        <Input 
                           value = {tokenInput} 
                           onChangeText = {setTokenInput}
                           label = "Mã số xác thực của máy bên kia là gì?" 
                           placeholder = "Nhập mã số vào đây nè bạn ơi!!!" />
                           <Button title = "Xác nhận" onPress = { async() => 
                           {
                               const storedToken = await getToken(tokenInput)
                               setToken(storedToken)
                           }} />
                    </View>
            )}

                {token && 
                    <View style={{ marginTop: 20 }}>
                    <Heading> Hôm này ăn gì? </Heading>
                    <ButtonContainer>
        
                        <SummonButton color = "#b3e6ff" onPress = {() => sendPushNotification(token.token, '👋 Trưa nay ăn gì???', '🍜 Hủ tiếu nha!!!') }>
                            <SummonButtonText>🍜 Hủ tiếu</SummonButtonText>
                        </SummonButton>
        
                        <SummonButton color = "#ccccff" onPress = {() => sendPushNotification(token.token, '👋 Trưa nay ăn gì???', '🍲 Bún bò nghen!!!') }>
                            <SummonButtonText>🍲 Bún bò</SummonButtonText>
                        </SummonButton>
        
                        <SummonButton color = "#90EE90" onPress = {() => sendPushNotification(token.token, '👋 Trưa nay ăn gì???', '🍔 Kebab cho có nhiều sự lựa chọn!!!') }>
                            <SummonButtonText>🍔 Kebab</SummonButtonText>
                        </SummonButton>
        
                        <SummonButton color = "#DDA0DD" onPress = {() => sendPushNotification(token.token, '👋 Trưa nay ăn gì???', '🥖 Bánh mì cho lẹ!!!') }>
                            <SummonButtonText>🥖 Bánh mì</SummonButtonText>
                        </SummonButton>
        
                        <SummonButton color = "#ff99bb" onPress = {() => sendPushNotification(token.token, '👋 Trưa nay ăn gì???', '🍛 Cơm đi cho no tới chiều!!!') }>
                            <SummonButtonText>🍛 Cơm tấm</SummonButtonText>
                        </SummonButton>
        
                        <SummonButton color = "#F4A460" onPress = {() => sendPushNotification(token.token, '👋 Trưa nay ăn gì???', '🥘 Bún riêu cũng được!!!') }>
                            <SummonButtonText>🥘 Bún riêu</SummonButtonText>
                        </SummonButton>
                        
        
                    </ButtonContainer>
                    </View>
                }
                </SummonScrollView>
       </Page>
   </View> 
   )
}

export default ip12promax

function setPushNotification(token: string, arg1: string, arg2: string): void {
    throw new Error('Function not implemented.')
}
