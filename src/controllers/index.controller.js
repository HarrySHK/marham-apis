const {Pool } = require('pg');

const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: 'WaJId@ArAIn1225',
    database: 'Verde',
    port: '5432'
});

const get_doctors = async (req, res) => {
    const response = await pool.query('SELECT * FROM doctors');
    console.log(response.rows);
    res.status(200).json(response.rows);
}

const post_doctors = async (req, res) => {
    const { doc_name, doc_email, doc_password } = req.body;
  
    try {
      const response = await pool.query(
        'INSERT INTO doctors (doc_name, doc_email, doc_password) VALUES ($1, $2, $3) RETURNING *',
        [doc_name, doc_email, doc_password]
      );
  
      res.status(201).json(response.rows[0]); // Return the created doctor
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating a doctor');
    }
  };


const get_users = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    console.log(response.rows);
    res.status(200).json(response.rows);
}


const post_users = async (req, res) => {
    const { user_name, user_email, user_password } = req.body;
  
    try {
      const response = await pool.query(
        'INSERT INTO users (user_name,user_email,user_password) VALUES ($1, $2, $3) RETURNING *',
        [user_name, user_email, user_password]
      );
  
      res.status(201).json(response.rows[0]); // Return the created doctor
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating a doctor');
    }
  };



module.exports = {
    get_doctors, post_doctors,get_users,post_users
}