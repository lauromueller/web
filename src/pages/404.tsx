import { navigate } from 'gatsby';

const NotFound = (): Promise<void> | null => {
  if (typeof window !== 'undefined') {
    navigate('/');
  }

  return null;
};

export default NotFound;
