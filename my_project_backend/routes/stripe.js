const express = require("express");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const router = express.Router();
router.use(express.json());

const storeItems = new Map([
  [1, { priceInCents: 10000, name: "Ticket" }],
  [2, { priceInCents: 20000, name: "Ticket" }],
  [3, { priceInCents: 30000, name: "Ticket" }],
  [4, { priceInCents: 40000, name: "Ticket" }],
  [5, { priceInCents: 50000, name: "Ticket" }],
  [6, { priceInCents: 60000, name: "Ticket" }],
  [7, { priceInCents: 70000, name: "Ticket" }],
  [8, { priceInCents: 80000, name: "Ticket" }],
]);

router.post("/", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        const storeItem = storeItems.get(item.id);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `${process.env.SERVER_URL}`,
      cancel_url: `${process.env.SERVER_URL_FAIL}`,
    });
    res.json({ url: session.url });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
