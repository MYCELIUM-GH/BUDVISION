import React from "react";
import styled from 'styled-components';

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  background: linear-gradient(0deg, #121117 19.68%, #160f17 89.55%);
  width: 100%;
`;
