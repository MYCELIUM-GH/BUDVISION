import React from 'react';
import styled from 'styled-components';

export default function Header({ name }) {
  return (
    <HeaderTag>
      <LogoTag>{name}</LogoTag>
    </HeaderTag>
  );
}
const HeaderTag = styled.div`
  background: #27271b;
  color: #d0ed57;
  border-bottom: 2px solid;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;
const LogoTag = styled.div`
  color: #d0ed57;
  font-family: pacific-sans-light;
  font-size: 32px;
  line-height: 0.8;
  text-shadow: #d0ed57 -1px -2px 0.7em;
  user-select: none;
`;
