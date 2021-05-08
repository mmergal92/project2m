//Dependencies
const express = require('express');
const router = express.Router();
const brandData = require('../models/brands.js');

//INDEX
// router.get('/', (req, res) =>{
//         brandData.find({}, (err, allData)=>{
//         res.render('index.ejs',{
//         allData: allData,
//         })
//     })
// })

//Create a new brand
router.get('/new', (req, res) => {
    console.log("testing users get route")
    res.render('users/new.ejs')
})

//POST - new brand
router.post('/', async (req, res)=>{
    brandData.create(req.body, (error, createdLog) => {
        console.log(req.body)
        console.log("testing users post route " + createdLog)
        res.redirect('/')
    })
})

//Show route
router.get('/:id', (req, res)=>{
    brandData.findById(req.params.id, (error, oneFound) => {
        console.log("show route works " + oneFound)
        res.render('show.ejs',{
            brandShow: oneFound,
        })
    });
})

//UPDATE LAB - EDIT
router.get('/:id/edit', async(req, res)=>{
    brandData.findById(req.params.id, (err, oneLogs)=>{
      console.log(oneLogs)
      res.render('edit.ejs',{
        brandShow: oneLogs,
      })
      console.log('edit route shows')
    })
  })

//UPDATE LAB - PUT
router.put('/:id', (req, res) => { 
	brandData.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateLog) =>{
        if (err){
          res.send(err)
          console.log("did not work")
        }else{
          res.redirect('/users/' + req.params.id); 
        }
      })
})

// DELETE
// router.delete('/:id', (req,res) =>{
//     brandData.findByIdAndRemove({_id:req.params.id}, (err, deletedLog)=>{
//       if (err){
//         res.send(err)
//       }else{
//       // console.log(logsData);
//       res.redirect('/');
//     }
//     });
//   })

//export
module.exports = router;