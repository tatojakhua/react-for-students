import React, { useState, useEffect } from "react";
import './App.css';

// App Component
const App = () => {
  // State for posts, modal visibility, and selected post to delete
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);

  // Fetch posts from the API on initial load
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  // Handle delete button click, shows modal
  const handleDeleteClick = (postId) => {
    setPostToDelete(postId);
    setShowModal(true);
  };

  // Confirm deletion, remove post from state
  const handleConfirmDelete = () => {
    setPosts(posts.filter((post) => post.id !== postToDelete));
    setShowModal(false);
    setPostToDelete(null);
  };

  // Cancel deletion, close modal without deleting
  const handleCancelDelete = () => {
    setShowModal(false);
    setPostToDelete(null);
  };

  return (
    <div className="app-container">
      <h1>Post List</h1>
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button className="delete-btn" onClick={() => handleDeleteClick(post.id)}>
              Delete Post
            </button>
          </li>
        ))}
      </ul>

      {/* Modal for delete confirmation */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Are you sure you want to delete this post?</h3>
            <div className="modal-buttons">
              <button className="confirm-btn" onClick={handleConfirmDelete}>
                Yes, Delete
              </button>
              <button className="cancel-btn" onClick={handleCancelDelete}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

