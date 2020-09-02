import post from './Post';

// Get

// Post
const postGenerateToken = (data) => post('auth?remember=true', data);

// Put

// Delete

const CoreServices = {
  postGenerateToken
};

export default CoreServices;
