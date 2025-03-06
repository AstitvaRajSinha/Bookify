const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
}
connectDB();

const booksCollection = client.db("BookInventory").collection("books");

// Routes

// Test Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Upload a new book
app.post("/upload-book", async (req, res) => {
  try {
    const data = req.body;
    const result = await booksCollection.insertOne(data);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).json({ message: "Error uploading book", error });
  }
});

// Get all books (with optional category filter)
app.get("/all-books", async (req, res) => {
  try {
    let query = {};
    if (req.query?.category) {
      query = { category: req.query.category };
    }
    const result = await booksCollection.find(query).toArray();
    res.send(result);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books", error });
  }
});

// Get a single book by ID
app.get("/book/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await booksCollection.findOne({ _id: new ObjectId(id) });
    if (!result) return res.status(404).json({ message: "Book not found" });
    res.send(result);
  } catch (error) {
    res.status(500).json({ message: "Error fetching book", error });
  }
});

// Update a book
app.patch("/book/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateBookData = req.body;
    const filter = { _id: new ObjectId(id) };
    const updateDoc = { $set: { ...updateBookData } };
    const result = await booksCollection.updateOne(filter, updateDoc, { upsert: true });

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.send(result);
  } catch (error) {
    res.status(500).json({ message: "Error updating book", error });
  }
});

// Delete a book
app.delete("/book/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await booksCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.send({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting book", error });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
