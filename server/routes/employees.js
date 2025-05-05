const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const { auth, adminAuth } = require('../middleware/auth');

router.use(auth);

router.get('/', employeeController.getAllEmployees);

router.get('/search', employeeController.searchEmployees);

router.get('/:id', employeeController.getEmployee);

router.post('/', adminAuth, employeeController.createEmployee);

router.put('/:id', adminAuth, employeeController.updateEmployee);

router.delete('/:id', adminAuth, employeeController.deleteEmployee);

module.exports = router; 