const express = require('express');
const router = express.Router();
const { handleGetRequest, handlePostRequest, handleGetRequestById, handleDeleteRequest, handlePatchRequest } = require('../Controllers/user');


router.get('/',handleGetRequest);
router.get('/:id',handleGetRequestById);
router.post('/',handlePostRequest);
router.patch('/:id',handlePatchRequest);
router.delete('/:id',handleDeleteRequest);


module.exports = router;