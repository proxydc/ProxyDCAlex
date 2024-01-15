const getAccounts = "select * from account";
const getAccountById = "select * from account where id = $1";
const checkLoginExists = "select a from account a where a.login_name = $1";
const addAccount = "insert into account(login_name, diplay_name, pass_word) values ($1, $2, $3)";
const updateAccount ="update account set diplay_name = $2, pass_word = $3 where id = $1";
const deleteAccountById = "delete from account where id = $1";
const getAuthentification = "select a from account a where a.login_name = $1 and a.pass_word = $2";


module.exports = {
    getAuthentification,
    getAccounts,
    getAccountById,
    checkLoginExists,
    addAccount,
    updateAccount,
    deleteAccountById,    
};