import { ObjectId } from "bson";
import { v2 as cloudinary } from "cloudinary";
import nextConnect from "next-connect";
import { connectToDatabase } from "../../lib/mongodb";

const handler = nextConnect()

handler.put(async(req, res) => {
    const { db } = await connectToDatabase();

    if (req.body.resume) {

        const resm = await cloudinary.uploader.upload(req.body.resume, { folder: 'Portfolio' });
        const resume = resm.secure_url;
        const public_id = resm.public_id;

        if (req.body.public_id) {
            await cloudinary.uploader.destroy(req.body.public_id);
        }
        db.collection('AboutMe').updateOne({ _id: ObjectId(req.body.id) }, { $set: { description: req.body.description, public_id: public_id, ...(resume && { resume }) } })
            .then(data => res.json(data))
            .catch(error => res.json(error.message));

    } else {
        db.collection('AboutMe').updateOne({ _id: ObjectId(req.body.id) }, { $set: { description: req.body.description } })
            .then(data => res.json(data))
            .catch(error => res.json(error.message));

    }
})


export const config = {
    api: {
        bodyParser: {
            sizeLimit: '3mb',

        }
    }
}
export default handler;;