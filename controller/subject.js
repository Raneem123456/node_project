import subject from "../models/subject.js";
import department from "../models/department.js";
export const index = async(req,res) =>{
    const subjects = await subject.find({},{name: 1}).lean();
    console.log(subjects);
    res.render('subjects/index',{subjects});
};

export const create =async (req , res) =>{
    const departments =await department.find().lean();
    console.log(departments);
res.render('subjects/create',{departments});
};
export const store = async(req,res) => {
    
    const {name,code,department} = req.body;
    await subject.create({
      name,
      code,
      department  
    });
    res.redirect('/subjects');
};

export const show =async (req,res)=>{
// 1- grab the id
const {_id} =req.params;

// 2- use the id to get the subject
const singlesubject = await ( subject.findById(_id)).populate('department').lean();
console.log(singlesubject);
// 3- render show template
res.render('subjects/show',{subject:singlesubject});
};
