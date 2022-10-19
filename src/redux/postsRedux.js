//selectors
export const getAllPosts = state => state.posts;

export const getPostsById = ({posts}, id) => posts.find(post => post.id === id);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const DELETE_POST = createActionName('DELETE_POST');

// action creators
export const deletePost = payload => ({type: DELETE_POST, payload: payload});

const postsReducer = (statePart = [], action) => {
    console.log('payload', action);
    switch (action.type) {
        case DELETE_POST: 
            console.log('działa', statePart);
            const wynik = statePart.filter(post => { console.log(post.id !== action.payload); return post.id !== action.payload});
            console.log(wynik);
            return wynik;
        default: 
            return statePart;
    };
};

export default postsReducer;