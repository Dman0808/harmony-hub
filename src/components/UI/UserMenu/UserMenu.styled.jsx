import styled from "styled-components";
import { primaryFont } from "../../fonts";

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const SpanName = styled.span`
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-family: ${primaryFont};
  text-transform: capitalize;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
