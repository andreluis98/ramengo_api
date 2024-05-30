import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.API_KEY;

let proteins = [
    { 
        id: 1, 
        imageInactive: 'https://tech.redventures.com.br/icons/chicken/inactive.svg',
        imageActive: 'https://tech.redventures.com.br/icons/chicken/active.svg',
        name: "Chicken", 
        description: "A delicious chicken protein", 
        price: 20 
    },
    { 
        id: 2,
        imageInactive: 'https://tech.redventures.com.br/icons/pork/inactive.svg',
        imageActive: 'https://tech.redventures.com.br/icons/pork/active.svg', 
        name: "Beef", 
        description: "A delicious beef", 
        price: 30
    },
    { 
        id: 3,
        imageInactive: 'https://tech.redventures.com.br/icons/pork/inactive.svg',
        imageActive: 'https://tech.redventures.com.br/icons/pork/active.svg', 
        name: "Pork", 
        description: "A delicious pork protein", 
        price: 40 
    }
];

let broths = [
    { 
        id: 1,
        imageInactive: 'https://tech.redventures.com.br/icons/miso/inactive.svg',
        imageActive: 'https://tech.redventures.com.br/icons/miso/active.svg', 
        name: "Miso", 
        description: "Miso Soup",
        price: 10 
     },
    { 
        id: 2, 
        imageInactive: 'https://tech.redventures.com.br/icons/miso/inactive.svg',
        imageActive: 'https://tech.redventures.com.br/icons/miso/active.svg',  
        name: "Chicken", 
        description: "Chicken Broth", 
        price: 5
    },
    { 
        id: 3,
        imageInactive: 'https://tech.redventures.com.br/icons/miso/inactive.svg',
        imageActive: 'https://tech.redventures.com.br/icons/miso/active.svg', 
        name: "Bean", 
        description: "Bean Soup", 
        price: 2 
    }
];

const validateApiKey = (req, res) => {
    const apiKeyHeader = req.headers['x-api-key'];
    if (!apiKeyHeader || apiKeyHeader !== apiKey) {
        return res.status(400).json({ error: "x-api-key header missing or invalid" });
    }
};

export const getProteins = (req, res) => {
    const apiKeyError = validateApiKey(req, res);
    if (apiKeyError) return apiKeyError;
    
    res.json(proteins);
};

export const getBroths = (req, res) => {
    const apiKeyError = validateApiKey(req, res);
    if (apiKeyError) return apiKeyError;

    res.json(broths);
};

export const createOrder = async (req, res) => {
    let body;

    if (req.headers['content-type'] === 'text/plain;charset=UTF-8') {
        try {
            body = JSON.parse(req.body);
        } catch (error) {
            return res.status(400).json({ error: 'Invalid JSON in request body' });
        }
    } else {
        body = req.body;
    }

    const { brothId, proteinId } = body;

    // Verifica a existencia dos ids
    if (!brothId || !proteinId) {
        return res.status(400).json({ error: 'Broth and Protein are required' });
    }

    const apiKeyError = validateApiKey(req, res);
    if (apiKeyError) return apiKeyError;

    try {
        const response = await axios.post(
            'https://api.tech.redventures.com.br/orders/generate-id',
            {},
            {
                headers: {
                    'x-api-key': apiKey
                }
            }
        );

        const orderId = response.data.orderId;
        res.send({ orderId });
    } catch (error) {
        res.status(500).json({ error: 'Failed to generate order ID' });
    }
};
