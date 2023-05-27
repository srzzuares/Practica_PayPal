const payCtll = {}

payCtll.orderCreate = (req,res) => {res.send('this in Order Created')}
payCtll.orderCapture = (req,res) => {res.send('This in Capture Order')}
payCtll.orderCanceled = (req,res) => {res.send('This in Order Canceled')}
export default payCtll