import axios from 'axios'

const requestUrl = `${process.env.VERCEL_URL}/api/instagram-api-key`
const refreshURL = `${process.env.INSTAGRAM_URL}/refresh_access_token?grant_type=ig_refresh_token`

const headers = {
    headers: {
        'Content-Type': 'application/json',
    },
}
async function getAPIKey() {
    const API_KEY = await axios.get(requestUrl)
        .then(data => data.data.key)
    return API_KEY
}

async function updateAPIKey(key) {
    const API_KEY = await axios.put(requestUrl, { key }, headers)
        .then(data => data.data.key)
    return API_KEY
}

export default async function handler(req, res) {
    try {
        const CURRENT_TOKEN = await getAPIKey();
        
        const UPDATED_TOKEN = await axios.get(`${refreshURL}&access_token=${CURRENT_TOKEN}`)
            .then(res => res.data.access_token)
    
        await updateAPIKey(UPDATED_TOKEN)
    
        res.json({
            success: true,
        })
    }
    catch(error) {
        res.json({
            success: false,
            error: {
                message: error.message,
                code: error.code,
                status: error.status,
            }
        })
    }
}