const journalSchema = require("../model/journalSchema");

exports.addJournal = async (req, res) => {
  let image = req.body.image;
  let type = req.body.type;
  let size = req.body.size;
  let name = req.body.fileName;
  console.log(req.body);

  try {
    journalSchema.findOne({name:name}).then((result)=>{
        if(result===null){
            journalSchema
            .create({ journal: image, type: type, size: size, name: name })
            .then((data) => {
              res.status(200).json(data);
            });
        }else{
            res.status(400).json("NAME OR IMAGE ALREADY EXISTS")
        }
       })
      } catch (error) {}
};



exports.getJournals = async(req,res)=>{
    try {
        journalSchema.find({}).then((data)=>{
            res.status(200).json(data)
        })
    } catch (error) {
        
    }
}



exports.getGraph = async(req,res)=>{
    try {
        journalSchema.find({}).then((result)=>{
            let journals = result;
            let numberofJPG=0;
            let numberofPNG=0;
            
            for(let i =0 ; i< journals.length;i++){
                if(journals[i].type==='image/jpeg'){
                    numberofJPG=numberofJPG+1;
                }else{
                    numberofPNG=numberofPNG+1;
                }
            }

            let data = {
                numberofJPG,
                numberofPNG
            }
            

            res.status(200).json(data)
        })
    } catch (error) {
        
    }
}