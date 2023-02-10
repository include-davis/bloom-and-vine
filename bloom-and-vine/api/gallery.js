export default async function handler(req, res) { 
    const { method } = req

    switch(method) {
        case 'GET':
            let gallery = []


            res.send(gallery)

        default:
            return {
                success: false,
                error: `${method} not allowed.`
            }
    }
    


}

