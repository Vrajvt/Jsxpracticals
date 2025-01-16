import React, { useState } from "react";
import "./CommentSection.css"; 

const Comment = ({ comment, onDelete }) => {
    return (
        <div className="comment">
            <p>
                {comment.author}: {comment.text}
            </p>
            <button onClick={() => onDelete(comment.id)}>Delete</button>
        </div>
    );
};

const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const addComment = () => {
        if (newComment.trim()) {
            setComments([
                ...comments,
                {
                    id: Date.now(),
                    author: "User",
                    text: newComment,
                },
            ]);
            setNewComment("");
        }
    };

    const deleteComment = (id) => {
        setComments(comments.filter((comment) => comment.id !== id));
    };

    return (
        <div className="comment-section">
            <h2>Comments</h2>
            <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
            />
            <br />
            <br />
            <button onClick={addComment}>Submit Comment</button>
            <div>
                <br />
                <br />
                {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} onDelete={deleteComment} />
                ))}
            </div>
        </div>
    );
};

export default CommentSection;