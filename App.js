/* import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [fileName, setFileName] = useState('');
  const [fileContent, setFileContent] = useState('');

  const handleInputChange = (e) => {
    setFileName(e.target.value);
  };

  const createFile = async () => {
    try {
      const response = await axios.post('http://localhost:5000/create-file', { fileName });
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const deleteFile = async () => {
    try {
      const response = await axios.delete('http://localhost:5000/delete-file', { data: { fileName } });
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const readFile = async () => {
    try {
      const response = await axios.post('http://localhost:5000/read-file', { fileName });
      setFileContent(response.data.content);
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="App">
      <h1>File System Operations</h1>
      <input
        type="text"
        placeholder="Enter file name"
        value={fileName}
        onChange={handleInputChange}
      />
      <button onClick={createFile}>Create File</button>
      <button onClick={deleteFile}>Delete File</button>
      <button onClick={readFile}>Read File</button>

      {fileContent && (
        <div>
          <h2>File Content:</h2>
          <p>{fileContent}</p>
        </div>
      )}
    </div>
  );
}

export default App;
 */

// after ui

/* import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { TextField, Button, Container, Typography, Box, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

function App() {
  const [fileName, setFileName] = useState('');
  const [fileContent, setFileContent] = useState('');
  const [open, setOpen] = useState(false); // For dialog control

  const handleInputChange = (e) => {
    setFileName(e.target.value);
  };

  const showAlert = (title, message, icon) => {
    Swal.fire({
      title: title,
      text: message,
      icon: icon,
      confirmButtonText: 'OK',
      customClass: {
        popup: 'swal-wide',
      },
    });
  };

  const createFile = async () => {
    try {
      const response = await axios.post('http://localhost:5000/create-file', { fileName });
      showAlert('Success', response.data.message, 'success');
    } catch (error) {
      showAlert('Error', error.response.data.message, 'error');
    }
  };

  const deleteFile = async () => {
    try {
      const response = await axios.delete('http://localhost:5000/delete-file', { data: { fileName } });
      showAlert('Success', response.data.message, 'success');
    } catch (error) {
      showAlert('Error', error.response.data.message, 'error');
    }
  };

  const readFile = async () => {
    try {
      const response = await axios.post('http://localhost:5000/read-file', { fileName });
      setFileContent(response.data.content);
      setOpen(true); // Open the dialog to display file content
    } catch (error) {
      showAlert('Error', error.response.data.message, 'error');
    }
  };

  const handleClose = () => {
    setOpen(false); // Close the dialog
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          File System Operations
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Enter file name"
            variant="outlined"
            value={fileName}
            onChange={handleInputChange}
            fullWidth
          />

          <Button variant="contained" color="primary" onClick={createFile} fullWidth>
            Create File
          </Button>

          <Button variant="contained" color="secondary" onClick={deleteFile} fullWidth>
            Delete File
          </Button>

          <Button variant="contained" color="info" onClick={readFile} fullWidth>
            Read File
          </Button>
        </Box>

//         {/* Material-UI Dialog for displaying file content */ //}
//         <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
//           <DialogTitle>File Content</DialogTitle>
//           <DialogContent>
//             <Typography variant="body1">
//               {fileContent ? fileContent : 'No content available.'}
//             </Typography>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose} color="primary">
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Box>
//     </Container>
//   );
// }

// export default App; */
// append to a file content or write/* 


// ////* 
// response: This contains the full response object returned by Axios, which includes:

// data: The actual response data sent by the server.
// status: The HTTP status code (e.g., 200, 404).
// statusText: The status message corresponding to the status code (e.g., "OK", "Not Found").
// headers: The response headers sent by the server.
// config: The configuration used for the request.
// request: The request object. */


/// without  csss
// console.log('Response:', response); // Log the entire response object
// console.log('Data:', response.data); // Log the data field specifically
/* 
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [fileName, setFileName] = useState('');
  const [fileContent, setFileContent] = useState('');
  const [newContent, setNewContent] = useState(''); // New state to input content

  const handleInputChange = (e) => {
    setFileName(e.target.value);
  };

  const handleContentChange = (e) => {
    setNewContent(e.target.value);
  };

  const createFile = async () => {
    try {
      const response = await axios.post('http://localhost:5000/create-file', { fileName });
      console.log('Response:', response); // Log the entire response object
      console.log('Data:', response.data); // Log the data field specifically
      
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const deleteFile = async () => {
    try {
      const response = await axios.delete('http://localhost:5000/delete-file', { data: { fileName } });
      console.log('Response:', response); // Log the entire response object
      console.log('Data:', response.data); // Log the data field specifically
      
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const readFile = async () => {
    try {
      const response = await axios.post('http://localhost:5000/read-file', { fileName });
      setFileContent(response.data.content);
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const writeFile = async () => {
    try {
      const response = await axios.post('http://localhost:5000/write-file', { fileName, content: newContent });
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const appendToFile = async () => {
    try {
      const response = await axios.post('http://localhost:5000/append-file', { fileName, content: newContent });
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="App">
      <h1>File System Operations</h1>
      <input
        type="text"
        placeholder="Enter file name"
        value={fileName}
        onChange={handleInputChange}
      />
      <br />
      <textarea
        placeholder="Enter content here..."
        value={newContent}
        onChange={handleContentChange}
      />
      <br />
      <button onClick={createFile}>Create File</button>
      <button onClick={deleteFile}>Delete File</button>
      <button onClick={readFile}>Read File</button>
      <button onClick={writeFile}>Write to File</button>
      <button onClick={appendToFile}>Append to File</button>

      {fileContent && (
        <div>
          <h2>File Content:</h2>
          <p>{fileContent}</p>
        </div>
      )}
    </div>
  );
}

export default App;
 */

// // with css 

import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Box, Button, TextField, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

function App() {
  const [fileName, setFileName] = useState('');
  const [fileContent, setFileContent] = useState('');
  const [newContent, setNewContent] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleInputChange = (e) => {
    setFileName(e.target.value);
  };

  const handleContentChange = (e) => {
    setNewContent(e.target.value);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const createFile = async () => {
    try {
      const response = await axios.post('http://localhost:5000/create-file', { fileName });
      console.log('Response:', response); // Log the entire response object
      console.log('Data:', response.data); // Log the data field specifically
      
      Swal.fire('Success', response.data.message, 'success');
    } catch (error) {
      Swal.fire('Error', error.response.data.message, 'error');
    }
  };

  const deleteFile = async () => {
    try {
      const response = await axios.delete('http://localhost:5000/delete-file', { data: { fileName } });
      console.log('Response:', response); // Log the entire response object
      console.log('Data:', response.data); // Log the data field specifically
      
      Swal.fire('Success', response.data.message, 'success');
    } catch (error) {
      Swal.fire('Error', error.response.data.message, 'error');
    }
  };

  const readFile = async () => {
    try {
      const response = await axios.post('http://localhost:5000/read-file', { fileName });
      console.log('Response:', response); // Log the entire response object
      console.log('Data:', response.data); // Log the data field specifically
      
      setFileContent(response.data.content);
      Swal.fire('Success', response.data.message, 'success');
      setDialogOpen(true); // Open dialog to show file content
    } catch (error) {
      Swal.fire('Error', error.response.data.message, 'error');
    }
  };

  const writeFile = async () => {
    try {
      const response = await axios.post('http://localhost:5000/write-file', { fileName, content: newContent });
      Swal.fire('Success', response.data.message, 'success');
    } catch (error) {
      Swal.fire('Error', error.response.data.message, 'error');
    }
  };

  const appendToFile = async () => {
    try {
      const response = await axios.post('http://localhost:5000/append-file', { fileName, content: newContent });
      Swal.fire('Success', response.data.message, 'success');
    } catch (error) {
      Swal.fire('Error', error.response.data.message, 'error');
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>File System Operations</Typography>

      <TextField
        label="File Name"
        variant="outlined"
        value={fileName}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="File Content"
        variant="outlined"
        value={newContent}
        onChange={handleContentChange}
        fullWidth
        multiline
        rows={4}
        margin="normal"
        placeholder="Enter content here..."
      />

      <Box sx={{ mt: 2 }}>
        <Button variant="contained" color="primary" onClick={createFile} sx={{ mr: 2 }}>Create File</Button>
        <Button variant="contained" color="error" onClick={deleteFile} sx={{ mr: 2 }}>Delete File</Button>
        <Button variant="contained" color="info" onClick={readFile} sx={{ mr: 2 }}>Read File</Button>
        <Button variant="contained" color="warning" onClick={writeFile} sx={{ mr: 2 }}>Write to File</Button>
        <Button variant="contained" color="secondary" onClick={appendToFile}>Append to File</Button>
      </Box>

      {/* Dialog for displaying file content */}
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>File Content</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {fileContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default App;
