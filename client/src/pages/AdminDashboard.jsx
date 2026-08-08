import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaTrash, FaSignOutAlt } from 'react-icons/fa';

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessages = async () => {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        navigate('/admin/login');
        return;
      }

      try {
        const res = await axios.get('http://localhost:5000/api/contacts', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setMessages(res.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('adminToken');
          navigate('/admin/login');
        } else {
          toast.error('Failed to load messages');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [navigate]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        const token = localStorage.getItem('adminToken');
        await axios.delete(`http://localhost:5000/api/contacts/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setMessages(messages.filter(msg => msg.id !== id));
        toast.success('Message deleted');
      } catch (error) {
        console.error(error);
        toast.error('Failed to delete message');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-vh-100 d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 pt-5 mt-5 pb-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className="fw-bold">Admin <span className="text-gradient">Dashboard</span></h2>
          <button onClick={handleLogout} className="btn btn-outline-danger d-flex align-items-center gap-2">
            <FaSignOutAlt /> Logout
          </button>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card-custom p-4">
              <h4 className="mb-4">Contact Messages ({messages.length})</h4>
              <div className="table-responsive">
                <table className="table table-hover table-borderless text-inherit align-middle">
                  <thead className="border-bottom border-secondary">
                    <tr>
                      <th>Date</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Subject</th>
                      <th>Message</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {messages.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="text-center py-4">No messages found.</td>
                      </tr>
                    ) : (
                      messages.map(msg => (
                        <tr key={msg.id} className="border-bottom border-secondary border-opacity-25">
                          <td>{new Date(msg.created_at).toLocaleDateString()}</td>
                          <td className="fw-medium">{msg.name}</td>
                          <td><a href={`mailto:${msg.email}`} className="text-primary text-decoration-none">{msg.email}</a></td>
                          <td>{msg.subject}</td>
                          <td style={{ maxWidth: '300px' }} className="text-truncate">{msg.message}</td>
                          <td>
                            <button onClick={() => handleDelete(msg.id)} className="btn btn-sm btn-danger rounded-circle">
                              <FaTrash />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
