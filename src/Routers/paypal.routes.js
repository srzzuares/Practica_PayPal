import {Router} from 'express';
import payCtll from '../Controllers/paypal.controller.js'

const RPay = Router()

RPay.get('/orderCreate', payCtll.orderCreate )
RPay.get('/capture', payCtll.orderCapture )
RPay.get('/canceled', payCtll.orderCanceled )

export default RPay