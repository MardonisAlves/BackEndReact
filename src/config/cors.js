module.exports = function(req ,res , next){
    res.header('Access-Control-Origin' , '*')
    res.header('Access-Control-Methods' , 'GET , POST , OPTIONS , PUT , PATH , DELETE')
    res.header('Access-Control-Allow-Headers' , 'Origin, X-Requested-With , Content-Type, Accept ')
    next()
}