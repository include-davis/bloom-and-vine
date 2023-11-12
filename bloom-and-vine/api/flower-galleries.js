import axios from "axios"

const dataType = "flower-galleries"
function getImageUrl(img) {
    const formats = img.formats
    if (formats.large) {
        return formats.large.url
    } else if(formats.medium) {
        return formats.medium.url
    } else {
        return img.url
    }
}
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
                        images: eventAtts.Images.data? eventAtts.Images.data.map((img) => {
                            return {
                                url: getImageUrl(img.attributes),
                                altText: img.attributes.alternativeText,
                            }
                        }) : [],
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