const pool = require('../../db');
const queries = require('./queries')

const getAuthentification = (req, res) => {
    const { login_name, pass_word } = req.body;
    pool.query(queries.getAuthentification, [login_name, pass_word], (error, results) => {
        if (error) throw error;
        const noAccountFound = !results.rows.length;
        if(noAccountFound){
            res.send("Login failed");
        }               
        res.status(200).send("Login success!");
    });
};

const getAccounts = (req, res) => {
    pool.query(queries.getAccounts, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

const getAccountById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getAccountById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addAccount = (req, res) => {
    const { login_name, diplay_name, pass_word } = req.body;

    //check if login name exists
    pool.query(queries.checkLoginExists, [login_name], (error, results) => {
        if (results.rows.length) {
            res.send("Login already exists.");
        }
        //add account to db
        pool.query(queries.addAccount, [login_name, diplay_name, pass_word], (error, results) => {
            if (error) throw error;
            res.status(201).send("Account created Successfully!");
            //console.log("Account created");
        })

    });
};

const deleteAccountById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getAccountById, [id], (error, results) => {
        const noAccountFound = !results.rows.length;
        if(noAccountFound){
            res.send("Account does not exist in the database");
        }
        pool.query(queries.deleteAccountById, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Account deleted Successfully!");
        });
    });
};

const updateAccount = (req, res) => {
    const id = parseInt(req.params.id);
    const { diplay_name, pass_word } = req.body;
    pool.query(queries.getAccountById, [id], (error, results) => {
        const noAccountFound = !results.rows.length;
        if(noAccountFound){
            res.send("Account does not exist in the database");
        }

        pool.query(queries.updateAccount, [id, diplay_name, pass_word], (error, results) => {
            if (error) throw error;
            res.status(200).send("Account updated Successfully!");
        });
    });
};


module.exports = { 
    getAuthentification,   
    getAccounts,
    getAccountById,
    addAccount,
    deleteAccountById,
    updateAccount,
};