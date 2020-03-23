const Express = require('express');
const BodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

let app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

const CONNECTION_URL = 'mongodb+srv://admin:2qZUDSJ7p3@practicedb-nyda2.mongodb.net/test?retryWrites=true&w=majority';
const DATABASE_NAME = 'test';
let database, collection;

app.listen(3001, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if (error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection('people');
        console.log(`Connected to ${DATABASE_NAME}!`);
    })
});

app.post('/person', (request, response) => {
    collection.insert(request.body, (error, result) => {
        if (error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    })
})

app.get('/person', (request, response) => {
    collection.find({}).toArray((error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    })
})

app.get('/person/:id', (request, response) => {
    collection.findOne({'_id': new ObjectId(request.params.id)}, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        return response.send(result);
    });
})

app.get('/dupa', (request, response) => {
    response.send('dupa');
})