const Bread = require('../models/Bread')

async function getAllBread(req, res) {
    try {
        const bread = await Bread.find()
        res.json(bread)
    } catch (error) {
        console.log('error fetching bread:', error)
        res.json({ 'message': 'error fetching bread' })
    }
}

async function getBreadById(req, res) {
    try {
        const { id } = req.params
        const bread = await Bread.findById(id)
        res.json(bread)
    } catch (error) {
        console.log('error fetching bread by id:', error)
        res.json({ 'message': 'error fetching bread' })
    }
}

async function createBread(req, res) {
    try {
        await new Bread(req.body).save()
        res.status(201).json({ 'message': 'bread created' })
    } catch (error) {
        console.log('error creating bread:', error)
        res.json({ 'message': 'error creating bread' })
    }
}

module.exports = {
    getAllBread,
    getBreadById,
    createBread
}