import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config()
const payCtll = {}
const PALPAL_API= process.env.PAYPAL_API

payCtll.orderCreate = (req,res) => {
    const order = {
        intent: "CAPTURE",
        purchase_units:[
            {
                amount: {
                    currecy_code:"USD",
                    value: "100.00"
                }
            },
            {
                amount: {
                    currecy_code:"EUR",
                    value: "100.00"
                }
            }
        ],
        application_context:{
            brand_name: "CrySuar",
            landing_page: "NO_REFERENCE",
            user_action: "PAY_NOW",
            return_url: `http://localhost:3033/capture`,
            cancel_url: `http://localhost:3033/canceled`
        }
    }
    axios.post(`${PALPAL_API}/v2/checkout/orders`)

}
payCtll.orderCapture = (req,res) => {res.send('This in Capture Order')}
payCtll.orderCanceled = (req,res) => {res.send('This in Order Canceled')}
export default payCtll