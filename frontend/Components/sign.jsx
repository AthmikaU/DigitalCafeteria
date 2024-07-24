import React, { useState } from 'react';
import { Modal, Button, Form, Tabs, Tab, Alert } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const allowedAdminCredentials = [
    { username: 'admin1', password: 'Admin1@Cafeteria' },
    { username: 'admin2', password: 'Admin2@Cafeteria' },
];

const LoginModal = () => {
    const [show, setShow] = useState(false);
    const [key, setKey] = useState('student');
    const [formData, setFormData] = useState({
        name: '',
        studentEmail: '',
        studentPassword: '',
        adminUsername: '',
        adminEmail: '',
        adminPassword: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleClose = () => {
        setShow(false);
        setError('');
        setSuccess('');
    };
    const handleShow = () => setShow(true);

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

    const validateAdminCredentials = (username, password) => {
        return allowedAdminCredentials.some(
            (cred) => cred.username === username && cred.password === password
        );
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        
        let endpoint = '';
        let data = {};

        if (key === 'student') {
            endpoint = 'http://localhost:3000/student/signup'; 
            data = {
                name: formData.name,
                email: formData.studentEmail,
                password: formData.studentPassword
            };
        } else if (key === 'admin') {
            const isValidAdmin = validateAdminCredentials(formData.adminUsername, formData.adminPassword);
            if (!isValidAdmin) {
                setError('Invalid admin credentials.');
                return;
            }
            endpoint = 'http://localhost:3000/admin/signup'; 
            data = {
                username: formData.adminUsername,
                email: formData.adminEmail,
                password: formData.adminPassword
            };
        }

        try {
            const response = await axios.post(endpoint, data);
            if (response && response.data) {
                console.log('Login successful:', response.data);
                setSuccess('Login successful!');
                setFormData({
                    name: '',
                    studentEmail: '',
                    studentPassword: '',
                    adminUsername: '',
                    adminEmail: '',
                    adminPassword: ''
                });
                handleClose();
            } else {
                setError('Login failed: No data received');
            }
        } catch (error) {
            setError(error.response ? error.response.data.message : 'Login failed: ' + error.message);
        }
    };

    return (
        <>
            <Button onClick={handleShow} variant="danger">
                <i className='bi bi-person fs-3'></i>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {success && <Alert variant="success">{success}</Alert>}
                    <Tabs
                        id="login-tabs"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="student" title="Student">
                            <Form onSubmit={handleLogin}>
                                <Form.Group controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="studentEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={formData.studentEmail}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                <Form.Group controlId="studentPassword" className="mt-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={formData.studentPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Button variant="success" type="submit" className="mt-3">
                                    Login as Student
                                </Button>
                            </Form>
                        </Tab>
                        <Tab eventKey="admin" title="Admin">
                            <Form onSubmit={handleLogin}>
                                <Form.Group controlId="adminUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter username"
                                        value={formData.adminUsername}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="adminEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={formData.adminEmail}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="adminPassword" className="mt-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={formData.adminPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Button variant="danger" type="submit" className="mt-3">
                                    Login as Admin
                                </Button>
                            </Form>
                        </Tab>
                    </Tabs>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default LoginModal;



// // import React, { useState } from 'react';
// // import { Modal, Button, Form, Tabs, Tab } from 'react-bootstrap';
// // import axios from 'axios';
// // import 'bootstrap-icons/font/bootstrap-icons.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // const LoginModal = () => {
// //     const [show, setShow] = useState(false);
// //     const [key, setKey] = useState('student');
// //     const [formData, setFormData] = useState({
// //         name: '',
// //         studentEmail: '',
// //         studentPassword: '',
// //         adminUsername: '',
// //         adminEmail: '',
// //         adminPassword: ''
// //     });

// //     const handleClose = () => setShow(false);
// //     const handleShow = () => setShow(true);

// //     const handleChange = (event) => {
// //         const { id, value } = event.target;
// //         setFormData({ ...formData, [id]: value });
// //     };

// //     const handleLogin = async (event) => {
    
// //         let endpoint = '';
// //         let data = {};
    
// //         if (key === 'student') {
// //             endpoint = 'http://localhost:3000/student/signup'; // Backend endpoint for student login
// //             data = {
// //                 name: formData.name,
// //                 email: formData.studentEmail,
// //                 password: formData.studentPassword
// //             };
// //         } else if (key === 'admin') {
// //             endpoint = 'http://localhost:3000/admin/signup'; // Backend endpoint for admin login
// //             data = {
// //                 username: formData.adminUsername,
// //                 email: formData.adminEmail,
// //                 password: formData.adminPassword
// //             };
// //         }
    
// //         try {
// //             const response = await axios.post(endpoint, data);
// //             if (response && response.data) {
// //                 console.log('Login successful:', response.data);
// //                 handleClose();
// //             } else {
// //                 console.error('Login failed: No data received');
// //             }
// //         } catch (error) {
// //             console.error('Login failed:', error.response ? error.response.data.message : error.message);
// //         }
// //     };
    

// //     return (
// //         <>
// //             <Button onClick={handleShow} variant="danger">
// //                 <i className='bi bi-person fs-3'></i>
// //             </Button>

// //             <Modal show={show} onHide={handleClose}>
// //                 <Modal.Header closeButton>
// //                     <Modal.Title>Login</Modal.Title>
// //                 </Modal.Header>
// //                 <Modal.Body>
// //                     <Tabs
// //                         id="login-tabs"
// //                         activeKey={key}
// //                         onSelect={(k) => setKey(k)}
// //                         className="mb-3"
// //                     >
// //                         <Tab eventKey="student" title="Student">
// //                             <Form onSubmit={handleLogin}>
// //                                 <Form.Group controlId="name">
// //                                     <Form.Label>Name</Form.Label>
// //                                     <Form.Control
// //                                         type="text"
// //                                         placeholder="Enter Name"
// //                                         value={formData.name}
// //                                         onChange={handleChange}
// //                                         required
// //                                     />
// //                                 </Form.Group>
// //                                 <Form.Group controlId="studentEmail">
// //                                     <Form.Label>Email address</Form.Label>
// //                                     <Form.Control
// //                                         type="email"
// //                                         placeholder="Enter email"
// //                                         value={formData.studentEmail}
// //                                         onChange={handleChange}
// //                                         required
// //                                     />
// //                                 </Form.Group>
// //                                 <Form.Group controlId="studentPassword" className="mt-3">
// //                                     <Form.Label>Password</Form.Label>
// //                                     <Form.Control
// //                                         type="password"
// //                                         placeholder="Password"
// //                                         value={formData.studentPassword}
// //                                         onChange={handleChange}
// //                                         required
// //                                     />
// //                                 </Form.Group>

// //                                 <Button variant="success" type="submit" className="mt-3">
// //                                     Login as Student
// //                                 </Button>
// //                             </Form>
// //                         </Tab>
// //                         <Tab eventKey="admin" title="Admin">
// //                             <Form onSubmit={handleLogin}>
// //                                 <Form.Group controlId="adminUsername">
// //                                     <Form.Label>Username</Form.Label>
// //                                     <Form.Control
// //                                         type="text"
// //                                         placeholder="Enter username"
// //                                         value={formData.adminUsername}
// //                                         onChange={handleChange}
// //                                         required
// //                                     />
// //                                 </Form.Group>

// //                                 <Form.Group controlId="adminEmail">
// //                                     <Form.Label>Email address</Form.Label>
// //                                     <Form.Control
// //                                         type="email"
// //                                         placeholder="Enter email"
// //                                         value={formData.adminEmail}
// //                                         onChange={handleChange}
// //                                         required
// //                                     />
// //                                 </Form.Group>

// //                                 <Form.Group controlId="adminPassword" className="mt-3">
// //                                     <Form.Label>Password</Form.Label>
// //                                     <Form.Control
// //                                         type="password"
// //                                         placeholder="Password"
// //                                         value={formData.adminPassword}
// //                                         onChange={handleChange}
// //                                         required
// //                                     />
// //                                 </Form.Group>

// //                                 <Button variant="danger" type="submit" className="mt-3">
// //                                     Login as Admin
// //                                 </Button>
// //                             </Form>
// //                         </Tab>
// //                     </Tabs>
// //                 </Modal.Body>
// //                 <Modal.Footer>
// //                     <Button variant="secondary" onClick={handleClose}>
// //                         Close
// //                     </Button>
// //                 </Modal.Footer>
// //             </Modal>
// //         </>
// //     );
// // };

// // export default LoginModal;
// import React, { useState } from 'react';
// import { Modal, Button, Form, Tabs, Tab, Alert } from 'react-bootstrap';
// import axios from 'axios';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const LoginModal = () => {
//     const [show, setShow] = useState(false);
//     const [key, setKey] = useState('student');
//     const [formData, setFormData] = useState({
//         name: '',
//         studentEmail: '',
//         studentPassword: '',
//         adminUsername: '',
//         adminEmail: '',
//         adminPassword: ''
//     });
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');

//     const handleClose = () => {
//         setShow(false);
//         setError('');
//         setSuccess('');
//     };
//     const handleShow = () => setShow(true);

//     const handleChange = (event) => {
//         const { id, value } = event.target;
//         setFormData({ ...formData, [id]: value });
//     };

//     const handleLogin = async (event) => {
//         event.preventDefault();
        
//         let endpoint = '';
//         let data = {};

//         if (key === 'student') {
//             endpoint = 'http://localhost:3000/student/signup'; 
//             data = {
//                 name: formData.name,
//                 email: formData.studentEmail,
//                 password: formData.studentPassword
//             };
//         } else if (key === 'admin') {
//             endpoint = 'http://localhost:3000/admin/signup'; 
//             data = {
//                 username: formData.adminUsername,
//                 email: formData.adminEmail,
//                 password: formData.adminPassword
//             };
//         }

//         try {
//             const response = await axios.post(endpoint, data);
//             if (response && response.data) {
//                 console.log('Login successful:', response.data);
//                 setSuccess('Login successful!');
//                 setFormData({
//                     name: '',
//                     studentEmail: '',
//                     studentPassword: '',
//                     adminUsername: '',
//                     adminEmail: '',
//                     adminPassword: ''
//                 });
//                 handleClose();
//             } else {
//                 setError('Login failed: No data received');
//             }
//         } catch (error) {
//             setError(error.response ? error.response.data.message : 'Login failed: ' + error.message);
//         }
//     };

//     return (
//         <>
//             <Button onClick={handleShow} variant="danger">
//                 <i className='bi bi-person fs-3'></i>
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Login</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     {error && <Alert variant="danger">{error}</Alert>}
//                     {success && <Alert variant="success">{success}</Alert>}
//                     <Tabs
//                         id="login-tabs"
//                         activeKey={key}
//                         onSelect={(k) => setKey(k)}
//                         className="mb-3"
//                     >
//                         <Tab eventKey="student" title="Student">
//                             <Form onSubmit={handleLogin}>
//                                 <Form.Group controlId="name">
//                                     <Form.Label>Name</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Enter Name"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </Form.Group>
//                                 <Form.Group controlId="studentEmail">
//                                     <Form.Label>Email address</Form.Label>
//                                     <Form.Control
//                                         type="email"
//                                         placeholder="Enter email"
//                                         value={formData.studentEmail}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </Form.Group>
//                                 <Form.Group controlId="studentPassword" className="mt-3">
//                                     <Form.Label>Password</Form.Label>
//                                     <Form.Control
//                                         type="password"
//                                         placeholder="Password"
//                                         value={formData.studentPassword}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </Form.Group>

//                                 <Button variant="success" type="submit" className="mt-3">
//                                     Login as Student
//                                 </Button>
//                             </Form>
//                         </Tab>
//                         <Tab eventKey="admin" title="Admin">
//                             <Form onSubmit={handleLogin}>
//                                 <Form.Group controlId="adminUsername">
//                                     <Form.Label>Username</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         placeholder="Enter username"
//                                         value={formData.adminUsername}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </Form.Group>

//                                 <Form.Group controlId="adminEmail">
//                                     <Form.Label>Email address</Form.Label>
//                                     <Form.Control
//                                         type="email"
//                                         placeholder="Enter email"
//                                         value={formData.adminEmail}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </Form.Group>

//                                 <Form.Group controlId="adminPassword" className="mt-3">
//                                     <Form.Label>Password</Form.Label>
//                                     <Form.Control
//                                         type="password"
//                                         placeholder="Password"
//                                         value={formData.adminPassword}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </Form.Group>

//                                 <Button variant="danger" type="submit" className="mt-3">
//                                     Login as Admin
//                                 </Button>
//                             </Form>
//                         </Tab>
//                     </Tabs>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// };

// export default LoginModal;
