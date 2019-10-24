import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_post':
            return [
                ...state,
                {
                    id: (state.length + 1).toString(),
                    ...action.payload
                }
            ];
        case 'edit_post':
            return state.map(blogPost => {
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            })
        case 'delete_post':
            return state.filter(blogPost => blogPost.id !== action.payload);
        default:
            return state;
    }
}

const addBlogPost = dispatch => {
    return (title, content, callback) => {
        dispatch({ type: 'add_post', payload: { title, content } });
        if (callback) callback();
    };
}

const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({ type: 'edit_post', payload: { id, title, content } });
        if (callback) callback();
    }
}

const deleteBlogPost = dispatch => {
    return (id, callback) => {
        dispatch({ type: 'delete_post', payload: id })
        if (callback) callback();
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, editBlogPost, deleteBlogPost },
    [{ title: 'Blog Post #1', content: 'The Content of the shit', id: '1' }]
);