const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Sample menu data
const menuData = [
    {
        id: 1,
        title: "Jollof Rice",
        category: "main",
        price: 12.0,
        desc: "West African spiced rice cooked with tomatoes, onions, and peppers.",
        img: "https://images.unsplash.com/photo-1563805042-7684f0edb82b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    },
    {
        id: 2,
        title: "Moambé Chicken",
        category: "main",
        price: 15.0,
        desc: "A rich African chicken stew with palm nut sauce, from Central Africa.",
        img: "https://images.unsplash.com/photo-1577404489505-7037cc4a9b5f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    },
    {
        id: 3,
        title: "Fufu with Groundnut Soup",
        category: "main",
        price: 13.0,
        desc: "Traditional starchy side paired with a creamy peanut soup, popular in many African countries.",
        img: "https://images.unsplash.com/photo-1626670262487-7d3456a1f06c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    },
    {
        id: 4,
        title: "Plantain Chips",
        category: "side",
        price: 5.0,
        desc: "Crispy fried plantain slices seasoned to perfection.",
        img: "https://images.unsplash.com/photo-1600718375814-0e7abe7180c9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    },
    {
        id: 5,
        title: "Chapati",
        category: "side",
        price: 4.0,
        desc: "East African flatbread, thin and soft, perfect to scoop stews and sauces.",
        img: "https://images.unsplash.com/photo-1639266761353-a04f42446f05?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    },
    {
        id: 6,
        title: "Malva Pudding",
        category: "dessert",
        price: 6.0,
        desc: "Sweet and spongy South African dessert soaked in syrup.",
        img: "https://images.unsplash.com/photo-1563805042-738a8cbf6aab?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    },
    {
        id: 7,
        title: "Ginger Beer",
        category: "drinks",
        price: 3.5,
        desc: "Refreshing, spicy sweet fermented drink popular across Africa.",
        img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    },
    {
        id: 8,
        title: "Hibiscus Iced Tea (Bissap)",
        category: "drinks",
        price: 3.0,
        desc: "A tangy and sweet iced tea made from dried hibiscus flowers.",
        img: "https://images.unsplash.com/photo-1564518098558-601ce3b9f228?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    }
];

// Get menu endpoint
app.get('/api/menu', (req, res) => {
    res.json(menuData);
});

// Handle order submission
app.post('/api/order', (req, res) => {
    const order = req.body;

    if (!order || !order.items || order.items.length === 0) {
        return res.status(400).json({ message: 'Order items are required' });
    }

    console.log('New Order Received:');
    console.log(order);

    // In real app: save order to database, send email, etc.

    res.json({ message: 'Order received successfully', orderId: Date.now() });
});

app.listen(PORT, () => {
    console.log(\`Server running on http://localhost:\${PORT}\`);
});
