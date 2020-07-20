import React from 'react';
import { navigate } from 'gatsby';

export default function NotFound() {
  if (typeof window !== 'undefined') {
    navigate('/');
  }

  return null;
}
