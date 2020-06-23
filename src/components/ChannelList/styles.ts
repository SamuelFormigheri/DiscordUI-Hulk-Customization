import styled from 'styled-components';
import {Add} from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CL;
  display:flex;
  flex-direction:column;
  padding: 24px 9.5px 0 16px;
  background-color: var(--secondary);
`;

export const Category = styled.h2`
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:12px;

  >span{
    text-transform:uppercase;
    font-size:12px;
    font-weight:500;
    color:var(--gray);
  }
`;

export const Separator = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--quaternary);

  margin-bottom: 4px;
`;

export const AddCategoryIcon = styled(Add)`
width: 21px;
height: 21px;

color: var(--gray);
cursor: pointer;
`;