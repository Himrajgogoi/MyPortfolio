import { ObjectId } from "bson";
import nextConnect from "next-connect";
import { connectToDatabase } from "../../lib/mongodb";
import { v2 as cloudinary } from "cloudinary";

const handler = nextConnect()

handler.post(async(req, res) => {
    const { db } = await connectToDatabase();

    if(req.body.image){
        const img = await cloudinary.uploader.upload(req.body.image, { folder: 'Portfolio' });
        const image = img.secure_url;
        const public_id = img.public_id;

        db.collection('Websites_and_Apps').insertOne({ url: req.body.url, image: image, public_id: public_id  })
        .then(data => res.json(data))
        .catch(error => res.status(500).json({message: "an error occured"}))
    }

    else{
        db.collection('Websites_and_Apps').insertOne({ url: req.body.url })
        .then(data => res.json(data))
        .catch(error => res.status(500).json({message: "an error occured"}))
    }
})

handler.delete(async(req, res) => {
    const { db } = await connectToDatabase();

    if (req.body.image) {
        await cloudinary.uploader.destroy(req.body.image);
        console.log("called")
    }

    db.collection('Websites_and_Apps').deleteOne({ _id: ObjectId(req.body.id) })
        .then(resp => res.json(resp))
        .catch(error => res.status(500).json({message: "an error occured"}));
})

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '3mb',

        }
    }
}
export default handler;;