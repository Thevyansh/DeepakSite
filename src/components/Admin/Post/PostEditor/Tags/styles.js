import { motion } from 'framer-motion';
import styled from 'styled-components';
import { rgba } from 'polished';
import Button from '../../../../shared/Button/Button';

export const StyledTags = styled.div`
  ${'.rs'} {
    &__input {
      color: ${(props) => props.theme.text};
    }
    &__clear-indicator {
      border-radius: 5px;
      color: ${(props) => props.theme.text};

      &:hover {
        cursor: pointer;
        background-color: #ffbdad;
        color: #de350b;
      }
    }
    &__dropdown-indicator {
      border-radius: 5px;
      color: ${(props) => props.theme.text};
      &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.text};
        background-color: ${(props) => props.theme.highlight};
      }
    }
    &__indicator-separator {
      display: none;
    }
    &__placeholder {
      color: ${(props) => rgba(props.theme.text, 0.5)};
    }
    &__option {
      cursor: pointer;
      color: ${(props) => props.theme.text};
      background-color: ${(props) => props.theme.background};
      &--is-focused {
        color: ${(props) => props.theme.text};
        background-color: ${(props) => props.theme.highlight};
      }
      &:active {
        background-color: ${(props) => props.theme.body};
      }
    }
    &__menu {
      font-size: 1.4rem;
      color: ${(props) => props.theme.text};
      background-color: ${(props) => props.theme.background};

      /* background-color: transparent; */
    }
    &__control {
      &:hover {
        cursor: pointer;
      }
      font-size: 1.4rem;
      color: ${(props) => props.theme.text};
      background-color: ${(props) => rgba(props.theme.highlight, 0.4)};

      border: none;
      &--is-focused {
        outline: none;
        border: none;
        box-shadow: none;
      }
    }
    &__multi-value {
      font-size: 1.4rem;

      color: ${(props) => props.theme.text};
      background-color: ${(props) => props.theme.background};

      padding: 5px;
      border-radius: 5px;
      &__label {
        color: ${(props) => props.theme.text};
        margin-right: 5px;
      }
      &__remove {
        cursor: pointer;
      }
    }
    &__value-container {
      padding: 5px;
    }
  }
`;

export const ScrollContainer = styled.div`
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  padding-bottom: 40px;
`;
export const ScrollItemsContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  transition-duration: 0.15s;
  transition-timing-function: cubic-bezier(0.05, 0, 0, 1);
  will-change: transform;
`;

export const ScrollItem = styled.div`
  display: inline-block;
  margin: 5px;

  ${Button} {
    font-weight: bold;
    font-size: 1.4rem;
    padding: 5px 15px;
    color: ${(props) => props.theme.text};
    @media (max-width: 1630px) {
      font-size: 1.2rem;
    }
  }
`;
