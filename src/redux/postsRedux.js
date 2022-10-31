import shortid from 'shortid';

//selectors
export const getAllPosts = state => state.posts;

export const getPostsById = ({posts}, id) => posts.find(post => post.id === id);

export const getPostByCategory = ({ posts }, postCategory) => posts.filter((post) => post.category === postCategory);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const DELETE_POST = createActionName('DELETE_POST');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');

// action creators
export const deletePost = payload => ({type: DELETE_POST, payload: payload});
export const addPost = payload => ({type: ADD_POST, payload: payload })
export const editPost = payload => ({ type: EDIT_POST, payload });

const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        case DELETE_POST: 
            const wynik = statePart.filter(post => { console.log(post.id !== action.payload); return post.id !== action.payload});
            return wynik;
        case ADD_POST: 
            return [...statePart, {...action.payload, id: shortid()}];
        case EDIT_POST:
            return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
        default: 
            return statePart;
    };
};

export default postsReducer;