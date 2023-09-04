import React from "react";

const CartItem = (props) => {
    const { price, title, qty } = props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: "#777" }}>Rs {price} </div>
                <div style={{ color: "#777" }}>Qty: {qty} </div>
                <div className="cart-item-actions">
                    {/* Buttons */}
                    <img alt="increase" className="action-icons" src="https://img.icons8.com/?size=512&id=114100&format=png" onClick={() => onIncreaseQuantity(product)} />
                    <img alt="decrease" className="action-icons" src="https://img.icons8.com/?size=512&id=114091&format=png" onClick={() => onDecreaseQuantity(product)} />
                    <img alt="delete" className="action-icons" src="https://img.icons8.com/?size=512&id=11705&format=png" onClick={() => onDeleteProduct(product.id)} />
                </div>
            </div>
        </div>
    );
};

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: "#ccc",
    },
};

export default CartItem;
