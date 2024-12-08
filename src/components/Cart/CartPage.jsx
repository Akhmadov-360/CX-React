import { Box, Button, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { useCart } from "../../core/context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <Box sx={{ padding: 4, maxWidth: 600, margin: "auto", boxShadow: 3, borderRadius: 2, backgroundColor: "#f9f9f9" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Your Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">Your cart is empty.</Typography>
      ) : (
        <>
          <List>
            {cart.map((item) => (
              <React.Fragment key={item.id}>
                <ListItem
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <ListItemText primary={item.name} secondary={`${item.price} x ${item.quantity}`} />
                  <Button variant="outlined" color="error" size="small" onClick={() => removeFromCart(item.id)}>
                    Remove One
                  </Button>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
          <Box sx={{ textAlign: "center", marginTop: 2 }}>
            <Button variant="contained" color="primary" onClick={clearCart} sx={{ marginTop: 2 }}>
              Clear Cart
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CartPage;
