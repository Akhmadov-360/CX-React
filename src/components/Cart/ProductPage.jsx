import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { useCart } from "../../core/context/CartContext";

const ProductPage = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Book",
      price: "200000",
    },
    {
      id: 2,
      name: "Phone",
      price: "10000000",
    },
    {
      id: 3,
      name: "Laptop",
      price: "9000000",
    },
  ];
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" gutterBottom textAlign="center">
        Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Price: {product.price} UZS
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary" fullWidth onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductPage;
