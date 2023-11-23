const express = require('express');
const cors = require('cors');
const axios = require('axios');
// const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();
const port = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ origin: true }));

app.post('/authenticate', async (req, res) => {
  console.log(req.body)
  const username = req.body.username;
  console.error(username)
  try {
    const r = await axios.put(
      process.env.CHAT_API_URL,
      { username: username, secret: username, first_name: username, },
      { headers: { "private-key": process.env.CHAT_API_PRIVATE_KEY } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
})

// app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));


app.listen(port, () => console.log(`App listening on port http://127.2.1.1:${port}`));