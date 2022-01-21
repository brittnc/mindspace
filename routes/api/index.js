const router = require('express').Router();
const symptomRoutes = require('./symptoms');
const doctorRoutes = require('./doctors');
const clinicRoutes = require('./clinics');
const logRoutes = require('./logs');

module.exports = function(passport){
    // Symptoms 
    router.use('/symptoms', symptomRoutes());
    // Doctors
    router.use('/doctors', doctorRoutes());
    // Logs
    router.use('/logs', logRoutes());
    // Clinics
    router.use('/clinics', clinicRoutes());
    

    return router;
}

