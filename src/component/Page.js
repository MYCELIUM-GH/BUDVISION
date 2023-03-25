import React from 'react';
import styled from 'styled-components';

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  width: 100%;
`;
