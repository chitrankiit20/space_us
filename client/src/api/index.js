import axios from 'axios';

const API =axios.create({ baseURL: 'https://space-us.herokuapp.com' })
// const API = axios.create({ baseURL: 'http://localhost:5000' })

// const url = 'https://space-us.herokuapp.com/posts'

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`,updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signin = (formData) => API.post('/user/signin', formData)
export const signup = (formData) => API.post('/user/signup', formData)
