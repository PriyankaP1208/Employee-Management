const service=require('../service/employeeService');
class Employee{
    create=(req,res)=>
    {
        console.log(req.body)
        service.createServices(req.body).then(data=>{
            return res.status(200).send(data);
        }).catch(err=>{
            return res.status(400).send(err);
        })
    }
    read=(req,res)=>
    {
        console.log(req.body);
        service.getEmpService(req.body).then(data=>{
            return res.status(200).send(data);
        }).catch(err=>
            {
                return res.status(400).send(err);
            })
    }
    update=(req,res)=>{
        console.log(req);
        service.updateService(req.params.id).then(data=>{
            return res.send(data)
        }).catch(err=>{
            return res.send(err)
        })
    }
    delete=(req,res)=>{
        console.log(req);
        service.deleteService(req.params.id).then(data=>{
            return res.send(data);
        }).catch(err=>{
            return res.send(err);
        })
    }
}
module.exports=new Employee();