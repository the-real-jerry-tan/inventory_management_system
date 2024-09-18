/**
 * © 2024 Jerry Tan. All Rights Reserved.
 *
 * This software is the confidential and proprietary information of Jerry Tan
 * ("Confidential Information"). You shall not disclose such Confidential Information
 * and shall use it only in accordance with the terms under which this software
 * was distributed or otherwise published, and solely for the prior express purposes
 * explicitly communicated and agreed upon, and only for those specific permissible purposes.
 *
 * This software is provided "AS IS," without a warranty of any kind. All express or implied
 * conditions, representations, and warranties, including any implied warranty of merchantability,
 * fitness for a particular purpose, or non-infringement, are disclaimed, except to the extent
 * that such disclaimers are held to be legally invalid.
 */

import { Request, Response } from 'express';
import { writeFileSync } from 'fs';
import { v4 as uuidv4 } from 'uuid';

// In-memory storage for inventory
let inventory = [];

// Add a new item to the inventory
export const addItem = (req: Request, res: Response) => {
    const { name, quantity, price } = req.body;
    const item = { id: uuidv4(), name, quantity, price };
    inventory.push(item);
    res.status(201).json({ message: 'Item added', item });
};

// Update an existing item in the inventory
export const updateItem = (req: Request, res: Response) => {
    const itemId = req.params.id;
    const { name, quantity, price } = req.body;
    const itemIndex = inventory.findIndex(i => i.id === itemId);
    if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found' });
    }
    inventory[itemIndex] = { ...inventory[itemIndex], name, quantity, price };
    res.json({ message: 'Item updated', item: inventory[itemIndex] });
};

// Get all items in the inventory
export const getInventory = (req: Request, res: Response) => {
    res.json({ inventory });
};

// Export the inventory to a CSV file
export const exportInventory = (req: Request, res: Response) => {
    const csv = inventory.map(item => `${item.id},${item.name},${item.quantity},${item.price}`).join('\n');
    writeFileSync('inventory.csv', csv);
    res.download('inventory.csv');
};
