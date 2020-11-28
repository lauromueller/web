import { navigate } from 'gatsby';

const NotFound = (): Promise<void> | void => {
  if (typeof window !== 'undefined') {
    navigate('/');
  }
};

export default NotFound;
