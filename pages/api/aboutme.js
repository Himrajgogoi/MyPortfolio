import { ObjectId } from "bson";
import { v2 as cloudinary } from "cloudinary";
import nextConnect from "next-connect";
import { connectToDatabase } from "../../lib/mongodb";

const handler = nextConnect()

handler.put(async(req, res) => {
    const { db } = await connectToDatabase();

    if (req.body.resume) {

        
        if (req.body.public_id) {
            await cloudinary.uploader.destroy(req.body.public_id);
        }

        const resm = await cloudinary.uploader.upload(req.body.resume, { folder: 'Portfolio', public_id:"himrajgogoi_resume"});
        const resume = resm.secure_url;
        const public_id = resm.public_id;

        db.collection('AboutMe').updateOne({ _id: ObjectId(req.body.id) }, { $set: { description: req.body.description, public_id: public_id, ...(resume && { resume }) } })
            .then(data => res.json(data))
            .catch(error => res.status(500).json({message: "an error occured"}));

    } else {
        db.collection('AboutMe').updateOne({ _id: ObjectId(req.body.id) }, { $set: { description: req.body.description } })
            .then(data => res.json(data))
            .catch(error => res.status(500).json({message: "an error occured"}));

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