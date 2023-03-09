import axios from "axios"

const dataType = "flower-galleries"

export default async function handler(req, res) {
    try {
        const body = await axios.get(`${process.env.STRAPI_BASE_URL}/api/${dataType}?populate=*`, {
            headers: {
                Authorization:
                `Bearer ${process.env.STRAPI_ADMIN_KEY}`,
            },
        })
        if (body.data.data) {
            const events = body.data.data;
            res.json({
                success: true,
                data: events.map((eventRaw) => {
                    const eventAtts = eventRaw.attributes
                    return {
                        title: eventAtts.Title,
                        date: eventAtts.Date,
                        description: eventAtts.Description,
                        images: eventAtts.Images.data.map((img) => {
                            return {
                                url: `${process.env.STRAPI_BASE_URL}${img.attributes.url}`,
                                altText: img.attributes.alternativeText,
                            }
                        }),
                        createdAt: eventAtts.createdAt,
                        updatedAt: eventAtts.updatedAt,
                        publishedAt: eventAtts.publishedAt,    
                    }
                })
            })
        } else {
            res.json({
                success: false,
                error: "error within strapi",
            })
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