import express from 'express';
import cors from 'cors';
import payRoute from './Routers/paypal.routes.js'
import dotenv from 'dotenv'
dotenv.config()

const RunApp = express()

RunApp.set('PORT', process.env.TZ_PORT || 3000)
RunApp.set('run', () => console.log(`Running Server in http://localhost:${RunApp.get('PORT')}`))

RunApp.use(cors())
RunApp.use(payRoute)

export default RunApp