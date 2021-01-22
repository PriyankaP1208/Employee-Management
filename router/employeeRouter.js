const express=require('express');
const router=express.Router();
const EmpController=require('../controller/employeeController');
console.log("router running");
router.post('/register',EmpController.create);
router.get('/getList',EmpController.read);
router.put('/update/:id',EmpController.update);
router.delete('/delete/:id',EmpController.delete);
module.exports=router;