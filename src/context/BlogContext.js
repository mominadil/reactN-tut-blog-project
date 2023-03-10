import createDataContext from './createDataContext';
let blogCount = 0;


const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            blogCount++;
            return [...state, { id: Math.floor(Math.random() * 99999), title: `Blog Post #${blogCount++}` }];
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        default:
            return state;
    }
};
const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_blogpost' });
    };
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id });
    };
};



export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, []);