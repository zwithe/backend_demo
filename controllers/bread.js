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
        if (!req.body.image) req.body.image = undefined
        await new Bread(req.body).save()
        res.status(201).json({ 'message': 'bread created' })
    } catch (error) {
        console.log('error creating bread:', error)
        res.json({ 'message': 'error creating bread' })
    }
}

async function updateBreadById(req, res) {
    try {
        const { id } = req.params
        if (!req.body.image) req.body.image = undefined
        await Bread.findByIdAndUpdate(id, req.body)
        res.status(204).json({ 'message': 'bread updated' })
    } catch (error) {
        console.log('error updating bread:', error)
        res.json({ 'message': 'error updating bread' })
    }
}

async function deleteBreadById(req, res) {
    try {
        const { id } = req.params
        await Bread.findByIdAndDelete(id)
        res.status(204).json({ 'message': 'bread deleted' })
    } catch (error) {
        console.log('error deleting bread:', error)
        res.json({ 'message': 'error deleting bread' })
    }
}

module.exports = {
    getAllBread,
    getBreadById,
    createBread,
    updateBreadById,
    deleteBreadById
}