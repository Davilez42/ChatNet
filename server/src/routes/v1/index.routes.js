import { Router } from 'express'
const routesV1 = Router()
const chatNet = Router()

//? Routes
routesV1.get('/test', (req, res) => {
    res.json({ "test": "approved" })
})

chatNet.use('/chatNet/api/v1/', routesV1)
export default chatNet