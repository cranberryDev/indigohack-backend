const {env} = require('process')
const {Pool} = require('pg')

const pool = new Pool()


const addFlights = (req,res)=>{
    var flightname = req.header.flight_name
    var flight_origin = req.header.flightorigin
    var flight_destination = req.header.flightdestination
    var booking_date = req.header.bookingdate
    var departure_date = req.header.departuredate


    pool.query("insert into tbl_flight (flightcode,origin,destination,departure,bookingdate) values ($1,$2,$3,$4,$5) returning *",[flightname,flight_origin,flight_destination,booking_date,departure_date],(error,result)=>{
        if(err){
            throw err
        }
        res.status(200).send({'flight added':result})
    })
}

const viewFlights = (req,res)=>{
    
    pool.query("select * from tbl_flight returning *",(err,result)=>{
        if(err){
            throw err
        }
        return res.status(200).send({'listed fligt':result})
    })
}

module.exports = { addFlights,viewFlights}
