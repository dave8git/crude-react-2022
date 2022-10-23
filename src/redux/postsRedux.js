import shortid from 'shortid';

//selectors
export const getAllPosts = state => state.posts;

export const getPostsById = ({posts}, id) => posts.find(post => post.id === id);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const DELETE_POST = createActionName('DELETE_POST');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');

// action creators
export const deletePost = payload => ({type: DELETE_POST, payload: payload});
export const addPost = payload => ({type: ADD_POST, payload: payload })
export const editPost = payload => ({ type: EDIT_POST, payload: payload });

const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        case DELETE_POST: 
            console.log('działa', statePart);
            const wynik = statePart.filter(post => { console.log(post.id !== action.payload); return post.id !== action.payload});
            console.log(wynik);
            return wynik;
        case ADD_POST: 
            console.log('action', action);
            return [...statePart, {...action, id: shortid()}];
        case EDIT_POST:
            return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
        default: 
            return statePart;
    };
};

export default postsReducer;