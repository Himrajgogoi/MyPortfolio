import { ObjectId } from "bson";
import { connectToDatabase } from "../../lib/mongodb";
import nextConnect from "next-connect";
import { v2 as cloudinary } from "cloudinary";

const handler = nextConnect();

handler.patch(async(req, res) => {

    const { db } = await connectToDatabase();


    if (req.body.image) {

        const img = await cloudinary.uploader.upload(req.body.image, { folder: 'Portfolio' });
        const image = img.secure_url;
        const public_id = img.public_id;

        if (req.body.public_id) {
            await cloudinary.uploader.destroy(req.body.public_id);
        }
        db.collection('Database_technologies').updateOne({ _id: ObjectId(req.body.id) }, { $set: { technology: req.body.technology, experience: req.body.experience, public_id: public_id, ...(image && { image }) } })
            .then(data => res.json(data))
            .catch(error => res.status(500).json({message: "an error occured"}));
    } else {
        db.collection('Database_technologies').updateOne({ _id: ObjectId(req.body.id) }, { $set: { technology: req.body.technology, experience: req.body.experience } })
            .then(data => res.json(data))
            .catch(error => res.status(500).json({message: "an error occured"}));
    }
})

handler.post(async(req, res) => {
    const { db } = await connectToDatabase();

    if (req.body.image) {
        const img = await cloudinary.uploader.upload(req.body.image, { folder: 'Portfolio' });
        const image = img.secure_url;
        const public_id = img.public_id;

        db.collection('Database_technologies').insertOne({ technology: req.body.technology, experience: req.body.experience, image: image, public_id: public_id })
            .then(data => res.json(data))
            .catch(error => res.status(500).json({message: "an error occured"}));
    } else {
        db.collection('Database_technologies').insertOne({ technology: req.body.technology, experience: req.body.experience, public_id: null })
            .then(data => res.json(data))
            .catch(error => res.status(500).json({message: "an error occured"}));
    }

})

handler.delete(async(req, res) => {
    const { db } = await connectToDatabase();

    if (req.body.image) {
        await cloudinary.uploader.destroy(req.body.image);
    }

    db.collection('Database_technologies').deleteOne({ _id: ObjectId(req.body.id) })
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