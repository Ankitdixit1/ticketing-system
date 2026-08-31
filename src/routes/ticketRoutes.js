import express from "express";
import ticketsData from '../../MOCK_DATA.json' assert { type: 'json' };
import fs from 'fs';
const router = express.Router();

router.route('/tickets').get((req, res) => {
    const { id } = req.body;
    res.status(200).json(ticketsData);
}).post(async (req, res) => {

    const { name, title, description, priority } = req.body;
    if (!title || !description) {
        res.status(400).json({ error: "Please add title and description" });
        return;
    }
    try {
        const newticket = {
            id: Date.now(),
            name: name,
            title: title,
            description: description,
            priority: priority,
            status: 'open',
            createdAt: new Date(),
        };
        ticketsData.push(newticket);

        await fs.writeFile('../MOCK_DATA.json', JSON.stringify(ticketsData, null, 2));
        res.status(201).json({
            status: "success",
            data: {
                ticket: newticket,
            },
        });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create ticket" });
    }
});

export default router
