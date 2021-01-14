/**
 * Create and Deploy Your First Cloud Functions
 * https://firebase.google.com/docs/functions/write-firebase-functions
 * exports.helloWorld = functions.https.onRequest((request, response) => {
 * functions.logger.info("Hello logs!", {structuredData: true});
 * response.send("Hello from Firebase!");
 * });
 */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51HRhFfGcxHRCwZ4MlkcIIsAyXfKFQiLZQA1qRDuDjuvuAIEQv9hiLkin2QyUqPM287iSuVTxtrYUK5kKRIbh3NVD00B9q60d6T"
);
//API

// - App config

const app = express();

// - Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request recieved BOOM!!! for this amount >>>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // sub units of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

/** Example End point
 *
 * http://localhost:5001/shadow-d1cf4/us-central1/api
 *
 */
