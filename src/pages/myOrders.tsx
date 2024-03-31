import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export const MyOrders = () => {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);

    return (
        <div>
            {cartItems.length > 0 ? (
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartItems.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>${item.price}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell>
                                    <IconButton aria-label="add" onClick={() => addToCart(item)}>
                                        <AddIcon fontSize="small" />
                                    </IconButton>
                                    <IconButton aria-label="delete" onClick={() => removeFromCart(item)}>
                                        <RemoveIcon fontSize="small" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            ) : (
                <h1>Your cart is empty</h1>
            )}
            {cartItems.length > 0 && (
                <div>
                    <h1>Total: ${getCartTotal()}</h1>
                    <Button variant="contained" onClick={() => clearCart()}>
                        Clear cart
                    </Button>
                </div>
            )}
        </div>
    );
};
