import * as dotenv from 'dotenv'
import * as axios from 'axios'

dotenv.config()

export default async function handler(req, res) {
    const { method } = req

    switch(method) {
        case 'GET':
            const fields = 'id,caption,media_type,media_url,permalink,timestamp,username'
            const url = 'https://graph.instagram.com/me/media'
            const query = `${url}?fields=${fields}&limit=10&access_token=${process.env.USER_TOKEN}`
        
            const options = {
                method: 'GET',
                mode: 'same-origin',
                redirect: 'error',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        
            const posts = await axios.get(query, options)
            .then(res => {
                return ({
                    success: true,
                    data: res.data.data,
                })
            })
            .catch(err => {
                return ({
                    success: false,
                    error: {
                        status: err.response?.status,
                        statusText: err.response?.statusText
                    }
                })
            })

            res.send(posts)

        default:
            // Implement error status display
            return ({
                success: false,
                error: `${method} not allowed.`
            })
    }
}