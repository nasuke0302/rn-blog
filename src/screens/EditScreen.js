import React, { useContext } from 'react'

import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(Context);
    const id = navigation.getParam('id');
    const blogPost = state.find(blogPost => blogPost.id === id);

    return <BlogPostForm
        initialValues={blogPost}
        onSubmit={(title, content) => {
            editBlogPost(id, title, content, () => navigation.pop());
        }}
        buttonText='Save Changes'
    />
}


export default EditScreen;