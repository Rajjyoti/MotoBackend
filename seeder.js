import mongoose from 'mongoose'
import colors from 'colors'
import dotenv from 'dotenv'
import users from './data/users.js'
import drivers from './data/drivers.js'
import User from './models/userModel.js'
import Driver from './models/driverModel.js'
// import Ride from './models/rideModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        // await Ride.deleteMany()
        await Driver.deleteMany()
        await User.deleteMany()

        await User.insertMany(users)

        await Driver.insertMany(drivers)

        console.log('Data Imported!'.green.inverse)
        process.exit()
    } catch (error) {
            console.error(`${error}`.red.inverse)
            process.exit(1)
    }
}

const destroyData = async () => {
    try {
        // await Ride.deleteMany()
        await Driver.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit()
    } catch (error) {
            console.error(`${error}`.red.inverse)
            process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}