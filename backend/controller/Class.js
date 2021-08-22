//const router = express.Router();
const ClassSchedule = require('../models/Class');
const shortid = require('shortid');
const slugify = require('slugify');

exports.createClass = async (req, res) => {
    if (req.body) {
        try {
            const newschedule = new ClassSchedule(req.body);
            await newschedule.save();
            res.status(201).json({ id: newschedule._id });
        } catch (error) {
            res.status(406).json({ error: error.message });
        }
    }
    //hhh
};
// exports.getclassfees=(req,res)=>
// {
//     Classfees.find({}).exec((error,fees)=>
//     {
//         if(error) return res.status(400).json({error});
//         if(fees){
//             const feeslist=createCatogories(fees)
//             return res.status(201).json({feeslist});
//         }
//     });
// }

exports.getall = async (req, res) => {
    await ClassSchedule.find({})
        .then((data) => {
            res.status(200).send({ data: data });
        })
        .catch((err) => {
            res.status(500).send({ error: err.massage });
            console.log(err);
        });
};

// exports.getproductsbyId = (req, res) => {

//     console.log('hey')
//     //res.status(200).json({file: req.files , body:req.body});
//     const { productid } = req.params;
//     console.log("pro id", productid)
//     if (productid) {
//         Product.findOne({ _id: productid })
//             .exec((error, product) => {
//                 console.log('error');
//                 if (error)
//                     return res.status(400).json({ error });
//                 console.log(error)
//                 if (product) {
//                     res.status(200).json({ product });
//                     console.log(product);
//                 }
//             });

//     } else {
//         return res.status(400).json({ error: 'params required' });
//     }
// };

// exports.deleteProduct = (req, res) => {
//     const { productid } = req.body.payload;
//     if (productid) {

//         Product.deleteOne({ _id: productid }).exec((error, product) => {
//             if (error)
//                 return res.status(400).json({ error });
//             console.log(error)
//             if (product) {
//                 res.status(200).json({ product });
//                 console.log(product);
//             }
//         });

//     } else {
//         return res.status(400).json({ error: 'params required' });
//     }
// };
// exports.editproduct = async (req, res) => {
//     const { productid } = req.params;
//     if (productid) {
//         const { _id, name, price, quatity, description, offer } = req.body;
//         const updatedproduct = {
//             name, price, quatity, description, offer
//         }
//         await Product.findByIdAndUpdate(productid, updatedproduct, { new: true });
//         res.json(updatedproduct);

//     }

// }
exports.getAllTeachers = async (req, res) => {
    try {
        const getAllTeachers = await Teacher.find({}).select('name');
        res.status(200).json({ Teachers: getAllTeachers });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
