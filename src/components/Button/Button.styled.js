import styled from "styled-components";

export const StyledButton = styled.button`
  width: 90px;
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.bold};
  color: ${(p) => p.theme.colors.muted};
  margin: ${(p) => p.theme.space[3]}px;
  padding-top: ${(p) => p.theme.space[3]}px;
  padding-bottom: ${(p) => p.theme.space[3]}px;
  border: ${(p) => p.theme.borders.normal};
  border-color: ${(p) => p.theme.colors.muted};
  border-radius: ${(p) => p.theme.radii.normal};
  background-color: ${(p) => p.theme.colors.background};
  cursor: pointer;

  :hover {
    border-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.primary};
  }
`;
