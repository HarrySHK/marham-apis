// // npm run dev to run script
// const express = require('express');
// const app = express();


// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

// //rotas
// app.use(require('./routes/index'));

// app.listen(4000);
// console.log('Server on port 4000');


const express = require('express');
const app = express();
const cors = require('cors'); // Import the 'cors' middleware

app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(require('./routes/index'));

app.listen(4000, () => {
  console.log('Server on port 4000');
});