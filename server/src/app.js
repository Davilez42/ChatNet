import express from "express";
import { createServer } from 'http'
import mainSocket from "./sockets/mainSocket.js";
import 'dotenv'

//ROUTES
const server_express = express()

//SocketConfig
const app_server = createServer(server_express)
mainSocket(app_server)

//CORS
server_express.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next()
})

server_express.disable('x-powered-by');
server_express.use(express.json());


server_express.get('/', (req, res) => {
    res.send('Welcome to server')
})


export default app_server;

