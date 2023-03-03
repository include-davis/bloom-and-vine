import axios from 'axios'

const searchLimit = 10
const QUERY_FIELDS = 'id, username, caption, media_type, media_url, thumbnail_url, permalink, timestamp'

async function getAPIKey() {
    const API_KEY = await axios.get(`${process.env.VERCEL_URL}/api/instagram-api-key`).then(data => data.data.key)
    return API_KEY
}

export default async function handler(req, res) {
    const { method } = req

    switch(method) {
        case 'GET':
            const USER_TOKEN = await getAPIKey();
            
            const query = `${process.env.INSTAGRAM_URL}/me/media?fields=${QUERY_FIELDS}&limit=${searchLimit}&access_token=${USER_TOKEN}`
        
            const options = {
                method: 'GET',
                mode: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        
            const posts = await axios.get(query, options)
            .then(res => {
                const posts = res.data.data
                return ({
                    success: true,
                    data: posts.map(post => {
                        return {
                            'user': post.username,
                            'caption': post.caption,
                            'urls': {
                                'permalink': post.permalink,
                                'mediaURL': post.media_url,
                                'thumbnailURL': post.media_type == 'VIDEO' ? post.thumbnail_url : null,
                            },
                            'postInfo': {
                                'mediaType': post.media_type,
                                'createdAt': post.timestamp,
                                'id': post.id,
                            },
                        }
                    })
                })
            })
            .catch(err => {
                return ({
                    success: false,
                    error: {
                        message: err.message,
                        code: err.code,
                        status: err.status,
                    }
                })
            })

            res.json(posts)
            break

        default:
            // Implement invalid call display
            res.setHeader("Allow", ["GET"])
            res.status(405).end(`${method} is not allowed.`)
    }
}