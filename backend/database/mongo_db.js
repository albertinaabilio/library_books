//Need to privatise all public details
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("library_books").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    library_books = getLibraryBooks("library_books","");
    console.log("Retrieved collection: " + library_books.collectionName);
} finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

function getLibraryBooks(dbName,collectionName){
    console.log("Getting collection: " + collectionName + " from database: " + dbName);
    return client.db(dbName).collection(collectionName);
}
