const bookSchema = require("../model/bookSchema");

exports.addBook = async (req, res) => {
  let image = req.body.image;
  let type = req.body.type;
  let size = req.body.size;
  let name = req.body.fileName;
  console.log(req.body);

  try {
   bookSchema.findOne({name:name}).then((result)=>{
    if(result===null){
        bookSchema
        .create({ book: image, type: type, size: size, name: name })
        .then((data) => {
          res.status(200).json(data);
        });
    }else{
        res.status(400).json("NAME OR IMAGE ALREADY EXISTS")
    }
   })
  } catch (error) {}
};



exports.getBooks = async(req,res)=>{
    try {
        bookSchema.find({}).then((data)=>{
            res.status(200).json(data)
        })
    } catch (error) {
        
    }
}



exports.getGraph = async(req,res)=>{
    try {
        bookSchema.find({}).then((result)=>{
            let books = result;
            let numberofJPG=0;
            let numberofPNG=0;
            
            for(let i =0 ; i< books.length;i++){
                if(books[i].type==='image/jpeg'){
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