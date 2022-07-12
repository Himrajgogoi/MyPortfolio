import { ObjectId } from "bson";
import nextConnect from "next-connect";
import { connectToDatabase } from "../../lib/mongodb";

const handler = nextConnect()

handler.post(async(req, res) => {
    const { db } = await connectToDatabase();

    db.collection('Websites_and_Apps').insertOne({ url: req.body.url })
        .then(data => res.json(data))
        .catch(error => res.json(error.message))
})

handler.delete(async(req, res) => {
    const { db } = await connectToDatabase();

    db.collection('Websites_and_Apps').deleteOne({ _id: ObjectId(req.body.id) })
        .then(resp => res.json(resp))
        .catch(error => res.json(error.message));
})

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '3mb',

        }
    }
}
export default handler;;