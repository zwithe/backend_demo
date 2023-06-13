const router = require('express').Router()
const {
    getAllBread,
    getBreadById,
    createBread
} = require('../controllers/bread')

// GET / get all breads
router.get('/', getAllBread)

// GET /:id get bread by id
router.get('/:id', getBreadById)

// POST / create bread
router.post('/', createBread)

// PUT /:id update bread by id

// DELETE /:id delete bread by id

module.exports = router