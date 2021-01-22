const mongoose = require('mongoose');
const EmployeeScheme=mongoose.Schema({
    FirstName:String,
    LastName:String,
    EmailId:String,
    Sallary:String,
    Department:String
},{
    timestamps:true
});
const employee=mongoose.model('employee',EmployeeScheme);
class EmployeeModel
{
    create=(req)=>
    {
        console.log("calling model",req);
        return new Promise((resolve,reject)=>
        {
            employee.create(req).then(data=>
                {
                    console.log("successfull",data);
                    resolve(data);
                }).catch(err=>{
                    console.log(err);
                    reject(err);
                })
        })
    }
    read=()=>
    {
        console.log("req in model");
        return new Promise((resolve,reject)=>{
            employee.find().then(data=>{
                console.log("Display:",data);
                resolve(data);
            }).catch(err=>{
                console.log(err);
                reject(err);
            })
        })
    }
    update=(id)=>{
        return new Promise((resolve,reject)=>{
            employee.findByIdAndUpdate(id).then(data=>{
                resolve(data);
            }).catch(err=>{
                reject(err);
            })
        })
    }
    delete=(id)=>{
        return new Promise((resolve,reject)=>{
            employee.findByIdAndDelete(id).then(data=>{
                resolve(data);
            }).catch(err=>{
                reject(err);
            })
        })
    }
}
module.exports=new EmployeeModel();