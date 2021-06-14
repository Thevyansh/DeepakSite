import { css } from 'styled-components';

const Shadow = css`
  box-shadow: 0 12px 28px 0 var(--shadow-2), 0 2px 4px 0 var(--shadow-1),
    inset 0 0 0 1px var(--shadow-inset);
`;
export const ShadowSoft = css`
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.07), 0 0 4px rgba(0, 0, 0, 0.07),
    0 0 8px rgba(0, 0, 0, 0.07), 0 0 16px rgba(0, 0, 0, 0.07);
`;

export default Shadow;
