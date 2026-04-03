import { createContext, useContext, useState } from 'react';

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [items, setItems] = useState([
    {
      id: '1',
      name: 'Ethiopian Yirgacheffe',
      description: 'LIGHT ROAST • FLORAL NOTES',
      price: 18.50,
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcUX1qPcjYiSUp5oZmj6pPLbGVSLzjGJi1AOTKBF0GRODYi2ucTIyGwkNbGpGFOt15OHMIjmdbLcI4IIMe9lBJ1EeDTrzVKO50Vr-yKp9AQHZnCECC4Q0PUB9xX6SuxxNMuLenJqYEpe2S0jIr-vJsvf8AJULSJsV6rqWmJuEAjNVgTHZ1Ae9-Bw0j6lkfDyyXYcgEpNS_WUS388EFC4KzaRQmOwu-kQkFIoAUjsb2fw5jnAALQJzAvuRI6rIWPIn2lbiX3R7lmVjo'
    },
    {
      id: '2',
      name: 'Aura Signature Cold Brew',
      description: '12-HOUR STEEP • NUTTY FINISH',
      price: 12.00,
      quantity: 2,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8FuxyobUvBJOrTv7aNzUW7-i_S7lOY2RYRxfcmTCbX2THhBOePd5uKqTr6BABsEea_RTngGxgNKdvB6jjdgNE1Kn8OWtg7OqP9VDqcu_r8tAPKdOvnqATqlamh7HIGbRaThy9lFonkmNbR2eEpydtOQWaK8b3_AwLBxXBnFri_auAzQwVm2vGo2kXaAkr1NwzDzYj2HWQcnBoodO7_evSBt7g8Bq6TgmvVm-umxB_G8gXwdBcLPe6_RHiepPC2DXd6o1hqSX4DhSD'
    }
  ]);

  const addItem = (newItem) => {
    setItems(current => {
      const existing = current.find(i => i.id === newItem.id);
      if (existing) {
        return current.map(i => 
          i.id === newItem.id ? { ...i, quantity: i.quantity + newItem.quantity } : i
        );
      }
      return [...current, newItem];
    });
  };

  const removeItem = (id) => {
    setItems(current => current.filter(i => i.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setItems(current => 
      current.map(i => i.id === id ? { ...i, quantity } : i)
    );
  };

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, total, itemCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
