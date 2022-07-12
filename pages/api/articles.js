import { ObjectId } from "bson";
import nextConnect from "next-connect";
import { connectToDatabase } from "../../lib/mongodb";

const handler = nextConnect()

handler.post(async(req, res) => {
    const { db } = await connectToDatabase();

    db.collection('Articles').insertOne({ article: req.body.article })
        .then(data => res.json(data))
        .catch(error => res.json(error.message))
})

handler.delete(async(req, res) => {
    const { db } = await connectToDatabase();

    db.collection('Articles').deleteOne({ _id: ObjectId(req.body.id) })
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