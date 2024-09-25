import { httpClient } from "../httpClient"

export const getAuth = async () => {
    return (await httpClient.get('https://api-endpoint')).data
}