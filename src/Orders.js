import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();

  /** State with initial value empty array [] */
  const [orders, setOrders] = useState([]);

  /** it runs only one time to load user's order
   * snapshot give real time response from the database
   */
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map(
              (doc) => (
                console.log(doc.id),
                {
                  id: doc.id,
                  data: doc.data(),
                }
              )
            )
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Orders Page</h1>
      <div className="orders__order">
        {orders.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
