const express = require('express');
const router = express.Router();
const MenuItem=require('../models/MenuItem');


router.post('/', async(req, res)=>{
  try{

    const data= req.body;
    const newItem= new MenuItem(data);
    const response=await newItem.save();
    console.log('data saved');
    res.status(200).json(response);

  }catch(err){
console.log(err);
res.status(500).json({err:'internal server error'});
  }
});


router.get('/', async(req, res)=>{
  try{
    const data= await MenuItem.find();
console.log('data fetched');
res.status(200).json(data);
  }catch(err){
console.log(err);
  res.status(500).json({err:'internal server error'});
  }
  
});




router.get('/:tasteType', async(req, res)=>{
  try{

    const tasteType= req.params.tasteType;
    
    if(tasteType=='Sour' || tasteType=='Spicy' || tasteType=='Sweet' ){
const response=await MenuItem.find({
    taste:tasteType
  });
  console.log('response fetched');
  res.status(200).json(response);

    }else{
  res.status(404).json({error: 'invalid work type'});
  }
  }catch(err){
console.log(err);
  res.status(500).json({err:'internal server error'});
  }
  
});


router.put('/:id', async (req, res) => {
 try {
const menuId=req.params.id;
 const updatedPersonData = req.body; // Updated data for the person
 // Assuming you have a Person model
 
 const response=  await MenuItem.findByIdAndUpdate(menuId, updatedPersonData, {
 new: true, // Return the updated document
 runValidators: true, // Run Mongoose validation
});
 if (!response) {
 return res.status(404).json({ err: 'Person not found'
 });
 }
 // Send the updated person data as a JSON response
 console.log('data updated');
 res.status(200).json(response);
 } catch (err) {
 console.error('Error updating person:', err);
 res.status(500).json({ err: 'Internal server error' });
 }
 });

router.delete('/:id', async (req, res) => {
 try {
 const menuId = req.params.id; // Extract the person's IDfrom the URL parameter
 // Assuming you have a Person model
const deletedPerson = await MenuItem.findByIdAndDelete(menuId);
 if (!deletedPerson) {
 return res.status(404).json({ error: 'Person not found' });
 }
 // Send a success message as a JSON response
 res.json({ message: 'Person deleted successfully' });
 } catch (err) {
 console.error('Error deleting person:', err);
 res.status(500).json({ err: 'Internal server error' });
 }
 });

module.exports = router;