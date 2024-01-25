const pool = require('../../db');
const queries = require('./queries')

const initialDocument = '{ "technicalAbilities": ["SCRUM", "Java"], "functionalAbilities": ["Banking", "CMS", "CRM & ERP"], "languages": ["français", "anglais"], "certifications": [{"year": 2021, "title": "CISCO"}, {"year": 2018, "title": "CNA5"}], "bref": "lorem ipsum dolor", "experiences": [], "projects": [], "skills": { "environments": "Java JEE", "languages": "Java JEE", "databases": "PostgreSQL, MySQL", "tools": "Zabbix, Nagios", "systems": "Linux RHEL8" }}';
const initialTags = ''
const getDCs = (req, res) => {
    pool.query(queries.getDCs, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

const getDCById = (req, res) => {
    const id = req.params.id;
    pool.query(queries.getDCById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addDC= (req, res) => {
    const { familyname, firstname, email } = req.body;

    //check if DC exists
    pool.query(queries.checkDCExists, [familyname, firstname,], (error, results) => {
        if (results.rows.length) {
            res.send("Candidat already exists.");
        }
        else {
            //add DC to db
            pool.query(queries.addDC, [familyname, firstname, email, 2, initialDocument ], (error, results) => {
                if (error) throw error;
                res.status(201).send("Candidat created Successfully!");
            })
        }

    });
};

const deleteDCById = (req, res) => {
    const id = req.params.id;
    pool.query(queries.getDCById, [id], (error, results) => {
        const noDCFound = !results.rows.length;
        if (noDCFound) {
            res.send("Candidat does not exist in the database");
        }
        else {
            pool.query(queries.deleteDCById, [id], (error, results) => {
                if (error) throw error;
                res.status(200).send("Candidat deleted Successfully!");
            });
        }
    });
};

const updateDC = (req, res) => {
    const id = req.params.id;
    const { tags, document } = req.body;
    pool.query(queries.getDCById, [id], (error, results) => {
        const noDCFound = !results.rows.length;
        if (noDCFound) {
            res.send("Candidat does not exist in the database");
        }
        else {
            pool.query(queries.updateDC, [id, tags, document], (error, results) => {
                if (error) throw error;
                res.status(200).send("Candidat updated Successfully!");
            });
        }
    });
};


module.exports = {
    getDCs,
    getDCById,
    addDC,
    updateDC,
    deleteDCById,
};