import axios from 'axios';

const EXPO_SERVICE_URL = 'https://exp.host/--/api/v2/push/send'
const TOKEN_SERVICE_URL = 'https://gau-server.glitch.me/notifications'

export const sendPushNotification = async(token: string, title: string, body: string) => {
    const message = {
        to: token,
        sound: 'default',
        title,
        body,
    }
    await axios.post(EXPO_SERVICE_URL, message)
    alert('Đã gửi thông báo cho 💩')
}

export interface Token {
    id: number
    token: string
}

export const submitToken = async (token: string) => {
    const response = await axios.post(TOKEN_SERVICE_URL, { token})
    const result = response.data as Token
    return result
}

export const getToken = async (id: number | string) => {
    const response = await axios.get(`${TOKEN_SERVICE_URL}/${id}`)
    const result = response.data as Token
    return result
}