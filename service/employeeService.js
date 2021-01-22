const model=require('../model/employeeModel');
class EmployeeService{
    createServices=(req)=>{
        console.log("Request data in service->",req);
        const empdata={
            FirstName:req.FirstName,
            LastName:req.LastName,
            EmailId:req.EmailId,
            Sallary:req.Sallary,
            Department:req.Department
        }
        return model.create(empdata).then(data=>{
            return({
                message:"register successfully",
                data:data
            });
        }).catch(err=>{
            return ({
                message:"failed to register",
                err:err
            });
        });
    }
    getEmpService=(req)=>{
        return model.read(req).then(data=>{
            return data;
        }).catch(err=>{
            return err;
        })
    }
    updateService=(id)=>{
        return model.update(id).then(data=>{
            return ({
                message:"data updated",
                data:data})
        }).catch(err=>{
            return err;
        })
    }

    deleteService=(id)=>{
        return model.delete(id).then(data=>{
            return ({
                message:"data deleted",
                data:data})
        }).catch(err=>{
            return err;
        })
    }
}
module.exports=new EmployeeService();