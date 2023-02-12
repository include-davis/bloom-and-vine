import * as dotenv from 'dotenv'
import * as axios from 'axios'

dotenv.config()

export default async function handler(req, res) {
    const { method } = req

    switch(method) {
        case 'GET':
            const url = 'https://graph.instagram.com/me/media'
            const fields = 'id, caption, media_type, media_url, thumbnail_url, permalink, timestamp, username'
            const searchLimit = 10
            const query = `${url}?fields=${fields}&limit=${searchLimit}&access_token=${process.env.USER_TOKEN}`
        
            const options = {
                method: 'GET',
                mode: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        
            const posts = await axios.get(query, options)
            .then(res => {
                return ({
                    success: true,
                    data: res.data.data.map(post => {
                        return({
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
                        })
                    })
                })
            })
            .catch(err => {
                return ({
                    success: false,
                    error: {
                        status: err.response?.status || "Error fetching Instagram data.",
                        statusText: err.response?.statusText || null,
                    }
                })
            })

            res.send(posts)
            break

        default:
            // Implement invalid call display
            res.setHeader("Allow", ["GET"])
            res.status(405).end(`${method} is not allowed.`)
    }
}