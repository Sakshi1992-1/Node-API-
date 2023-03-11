// /login  :post : check email and password  :brcypt to compares
// const express = require("express"); //init the npm and installed express in same folder.

// const app = express() //using app as functions of all express.

// const port = 3456; //creating local port.

// app.use(express.json()) //using json language in same server.

const express = require("express");
const app = express();
const port = 3456;

const products = [
  {
    id: 01,
    name: "Pro1",
    total_quantity: 10,
    type_of_product: "Tshirt",
    price: 600,
  },
  {
    id: 02,
    name: "Pro2",
    total_quantity: 15,
    type_of_product: "Jacket",
    price: 800,
  },
  //more items
];
app.use(express.json());

// Get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// Get product by id
app.get("/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = products.find((p) => p.id === Number(productId));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "something going wrong" });
  }
});

// Get product by name
app.get("/products/name/:name", (req, res) => {
  const productName = req.params.name;
  const product = products.find((p) => p.name === productName);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "something going wrong" });
  }
});

// Add product
app.post("/addproduct", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  //   res.json(newProduct);
  console.log(req.body);
  res.send(newProduct);
});

// Start server
app.listen(3000, () => console.log("Server started on port 3000"));
