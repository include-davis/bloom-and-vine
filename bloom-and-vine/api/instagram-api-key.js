import axios from "axios"

const dataType = "instagram-api-key"

const headers = {
    headers: {
        Authorization: `Bearer ${process.env.STRAPI_ADMIN_KEY}`,
        'Content-Type': 'application/json',
    },
}

export default async function handler(req, res) {
    const method = req.method;
    if (method !== 'PUT' && method !== 'GET') {
        res.json({
            success: false,
            error: "request type forbidden",
        })
    }

    let body;
    try {
        switch (method) {
            case 'GET':
                body = await axios.get(`${process.env.STRAPI_BASE_URL}/api/${dataType}`, {
                    headers: {
                        Authorization:
                        `Bearer ${process.env.STRAPI_ADMIN_KEY}`,
                    },
                })
                if (body.data.data) {
                    const key = body.data.data.attributes.key
                    res.json({
                        key
                    })
                } else {
                    res.json({
                        success: false,
                        error: "error within strapi",
                    })
                }
                break;

            case 'PUT':
                const key = req.body.key
                if (!key) {
                    res.json({
                        success: false,
                        error: "no key specified",
                    })
                }
                body = await axios.put(`${process.env.STRAPI_BASE_URL}/api/${dataType}`, { data: { key } } , headers)
                if (body.data.data) {
                    const key = body.data.data.attributes.key
                    res.json({
                        key
                    })
                } else {
                    res.json({
                        success: false,
                        error: "error within strapi",
                    })
                }
                break;

        }
        
    } catch(error) {
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