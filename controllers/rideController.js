import asyncHandler from "express-async-handler";
import Ride from '../models/rideModel.js'

//@desc Fetch all rides
//@route GET /api/rides
//@access public 
const getRides = asyncHandler(async(req, res) => {
    const rides = await Ride.find({})

    res.json(rides)
})

//@desc Fetch ride by id
//@route GET /api/rides/:id
//@access public 
const getRideById = asyncHandler(async(req, res) => {
    const ride = await Ride.findById(req.params.id)

    if (ride) {
        res.json(ride)
    } else {
        res.status(404)
        throw new Error('Ride not found')
    }
})

export {getRides, getRideById}