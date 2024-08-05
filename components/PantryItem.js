// components/PantryItem.js
import React from 'react';
import { Card, Typography, Box, Button } from '@mui/material';

const PantryItem = ({ item, onAdd, onDelete }) => {
  return (
    <Card sx={{ padding: '10px', backgroundColor: '#fff', borderRadius: '8px' }}>
      <Typography variant="h6">{item.name}</Typography>
      <Typography variant="body1">Quantity: {item.quantity}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
        <Button variant="contained" color="primary" onClick={() => onAdd(item)}>Add</Button>
        <Button variant="outlined" color="secondary" onClick={() => onDelete(item)}>Delete</Button>
      </Box>
    </Card>
  );
};

export default PantryItem;
