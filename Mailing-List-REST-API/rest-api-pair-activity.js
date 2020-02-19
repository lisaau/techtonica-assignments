const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.json());
app.use(morgan()); // logs request details
// app.use(morgan('tiny')); // condensed message

// pre-set data to work with
const lists = new Map();
const staffList = {
    "name": "staff",
    "members": [ "talea@techtonica.org", "michelle@techtonica.org" ]
  }
lists.set(staffList.name, staffList)

app.get('/', (req, res) => {
    res.send('hello'); 
});

// gets name of the mailing lists in lists Map
app.get('/lists', (req, res) => {
    const listsArray = Array.from(lists.keys());
    res.send(listsArray);
})

// get a the mailing list of a specifed name
app.get('/lists/:name', (req, res) => {
    const mailingListName = req.params.name;
    const list = lists.get(mailingListName);
    if (list) {
        res.send(list);
    } else {
        res.status(404).send("Mailing list not found");
    }
})

// deletes a mailing list of a specified name, 404 if the mailing list by that name doesn't exist
app.delete('/lists/:name', (req, res) => {
    const mailingListName = req.params.name;
    if (lists.delete(mailingListName)) {
        res.status(200).end();
    } else {
        res.sendStatus(404);
    }
})

// Add new mailing list (201) or update existing one (200)
app.put('/lists/:mailingListName', (req, res) => {
    const {mailingListName} = req.params;
    console.log(req.body);

    // check if URL param matches body name
    if (mailingListName !== req.body.name) {
        res.status(400).send(`Mailing list name '${req.body.name}' does not match URL parameter '${mailingListName}'`)
    }

    if (!lists.has(mailingListName)) {
        res.status(201);
    }
    lists.set(mailingListName, req.body);
    console.log(lists.size)
    res.end()
})

const port = 5000;
app.listen(port, () => {
    console.log(`The application is running on localhost:${port}`);
})