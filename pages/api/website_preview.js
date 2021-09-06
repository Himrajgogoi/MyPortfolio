import nextConnect from "next-connect";
const ogs = require('open-graph-scraper');

const handler = nextConnect();

handler.post(async (req,res)=>{

    let link_preview=[];
    let counter = 0;
    const links = req.body.links;
    
    const web_scrapper = new Promise(async (resolve,reject)=>{
        try{
            for (const link of links){
                counter +=1
                const options = {url: link.url};
                const {error,result,response} =await ogs(options);
                link_preview.push(result);
                if(counter === links.length)resolve();

           }
        }
        catch(error){
            reject(error);
        }
    })

    web_scrapper.then(()=>{
        res.json(link_preview);
    })
    

})

export default handler;
