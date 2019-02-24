const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');

//Retrieveing Contacts
router.get('/contacts', function(req,res,next){
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
});

//Add contacts
router.post('/contacts', function(req,res,next){
    let newContact = new Contact({
        to_do: req.body.to_do
    });

    newContact.save(function(err, contacts){
        if(err){
            res.json({msg: 'Failed to add data'});
        }
        else{
            res.json({msg: 'Data added successfully'});
        }
    })
});

//Delete contacts
router.delete('/contacts/:id', function(req,res,next){
    Contact.remove({_id: req.params.id}, function(err,result){
        if(err){
            res.json(err);
        } else {
            res.json(result);
        }
    });

});
module.exports = router;