import { ObjectId } from "bson";
import nextConnect from "next-connect";
import { connectToDatabase } from "../../lib/mongodb";

const handler = nextConnect();

handler.put(async(req, res) => {

    const { db } = await connectToDatabase();

    db.collection('Projects').updateOne({ _id: ObjectId(req.body.id) }, { $push: { projects: req.body.url } })
        .then(data => res.json(data))
        .catch(error => res.status(500).json({message: "an error occured"}));
})

handler.post(async(req, res) => {
    const { db } = await connectToDatabase();

    db.collection('Projects').insertOne({ framework: req.body.framework, projects: [req.body.url] })
        .then(data => res.json(data))
        .catch(error => res.status(500).json({message: "an error occured"}));
})


handler.patch(async(req, res) => {

    const { db } = await connectToDatabase();

    db.collection('Projects').updateOne({ _id: ObjectId(req.body.id) }, { $pull: { projects: req.body.url } })
        .then(data => res.json(data))
        .catch(error => res.status(500).json({message: "an error occured"}));
})

handler.delete(async(req, res) => {
    const { db } = await connectToDatabase();

    db.collection('Projects').deleteOne({ _id: ObjectId(req.body.id) })
        .then((resp) => res.json(resp))
        .catch((err) => res.json(err.message));
})

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '3mb',

        }
    }
}
export default handler;;