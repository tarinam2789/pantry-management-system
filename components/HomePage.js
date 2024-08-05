// components/HomePage.js
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Card, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [itemToAdd, setItemToAdd] = useState('');
  const [quantityToAdd, setQuantityToAdd] = useState('');

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdd = () => {
    if (itemToAdd && quantityToAdd) {
      setItems([...items, { name: itemToAdd, quantity: quantityToAdd, id: Date.now() }]);
      setItemToAdd('');
      setQuantityToAdd('');
    } else {
      alert('Please enter both item name and quantity.');
    }
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        bgcolor: '#F6F5F2' // Light neutral background
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: 600,
          padding: 4,
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '8px',
          bgcolor: '#F0EBE3' // Soft beige background
        }}
      >
        {/* Title with background color */}
        <Box
          sx={{
            width: '100%',
            backgroundColor: '#F3D0D7', // Pale pink background
            color: '#6E6E6E', // Dark grey color for text
            padding: 2,
            borderRadius: '8px 8px 0 0',
            textAlign: 'center',
            marginBottom: 2
          }}
        >
          <Typography variant="h4">Pantry Management System</Typography>
        </Box>

        {/* Form for adding items */}
        <Box sx={{ width: '100%', mb: 2 }}>
          <TextField
            label="Search items..."
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ 
              mb: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#F3D0D7' // Pale pink border for the search bar
                },
                '&:hover fieldset': {
                  borderColor: '#F3D0D7' // Pale pink border on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#F3D0D7' // Pale pink border when focused
                },
                '& .MuiInputBase-input': {
                  color: '#6E6E6E' // Dark grey color for text input
                },
                '& .MuiFormLabel-root': {
                  color: '#6E6E6E', // Dark grey color for label text
                  transition: 'color 0.3s ease-in-out', // Smooth transition for color change
                },
                '&.Mui-focused .MuiFormLabel-root': {
                  color: '#F3D0D7' // Pale pink color for label text when focused
                },
                '& .MuiInputLabel-shrink': {
                  color: '#6E6E6E' // Dark grey color for shrunk label text
                }
              }
            }}
          />
          <TextField
            label="Item name"
            variant="outlined"
            fullWidth
            value={itemToAdd}
            onChange={(e) => setItemToAdd(e.target.value)}
            sx={{ 
              mb: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#F3D0D7' // Pale pink border for the item name input
                },
                '&:hover fieldset': {
                  borderColor: '#F3D0D7' // Pale pink border on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#F3D0D7' // Pale pink border when focused
                },
                '& .MuiInputBase-input': {
                  color: '#6E6E6E' // Dark grey color for text input
                },
                '& .MuiFormLabel-root': {
                  color: '#6E6E6E', // Dark grey color for label text
                  transition: 'color 0.3s ease-in-out', // Smooth transition for color change
                },
                '&.Mui-focused .MuiFormLabel-root': {
                  color: '#F3D0D7' // Pale pink color for label text when focused
                },
                '& .MuiInputLabel-shrink': {
                  color: '#6E6E6E' // Dark grey color for shrunk label text
                }
              }
            }}
          />
          <TextField
            label="Quantity"
            type="number"
            variant="outlined"
            fullWidth
            value={quantityToAdd}
            onChange={(e) => setQuantityToAdd(e.target.value)}
            sx={{ 
              mb: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#F3D0D7' // Pale pink border for the quantity input
                },
                '&:hover fieldset': {
                  borderColor: '#F3D0D7' // Pale pink border on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#F3D0D7' // Pale pink border when focused
                },
                '& .MuiInputBase-input': {
                  color: '#6E6E6E' // Dark grey color for text input
                },
                '& .MuiFormLabel-root': {
                  color: '#6E6E6E', // Dark grey color for label text
                  transition: 'color 0.3s ease-in-out', // Smooth transition for color change
                },
                '&.Mui-focused .MuiFormLabel-root': {
                  color: '#F3D0D7' // Pale pink color for label text when focused
                },
                '& .MuiInputLabel-shrink': {
                  color: '#6E6E6E' // Dark grey color for shrunk label text
                }
              }
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAdd}
            sx={{ 
              mb: 2, 
              backgroundColor: '#FFEFEF', // Light pink button background
              color: '#6E6E6E', // Dark grey color for text
              ':hover': {
                backgroundColor: '#F3D0D7' // Pale pink hover color
              }
            }}
          >
            Add Item
          </Button>
        </Box>

        {/* Display filtered items */}
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {filteredItems.map(item => (
            <Box
              key={item.id}
              sx={{
                padding: '10px',
                backgroundColor: '#FFFFFF', // White background for items
                borderRadius: '8px',
                border: '1px solid #F0EBE3', // Soft beige border
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Box>
                <Typography variant="h6" color="#6E6E6E">{item.name}</Typography>
                <Typography variant="body1" color="#6E6E6E">Quantity: {item.quantity}</Typography>
              </Box>
              <IconButton
                sx={{ color: '#6E6E6E' }} // Dark grey color for icon
                onClick={() => handleDelete(item.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
        </Box>
      </Card>
    </Box>
  );
};

export default HomePage;
