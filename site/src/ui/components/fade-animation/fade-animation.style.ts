import styled from 'styled-components';

const handleAnimationState = (state: any) => {
  switch (state) {
    case 'entering':
      return 'opacity: 0; transform: translateY(-5px)';
    case 'entered':
      return 'opacity: 1; transform: translateY(0)';
    case 'exiting':
      return 'opacity: 1; transform: translateY(0)';
    case 'exited':
      return 'opacity: 0; transform: translateY(-5px)';
    default:
      return 'opacity: 1; transform: translateY(0)';
  }
};

interface AnimationProps {
  state: string;
}

const Animation = styled.div<AnimationProps>`
  transition: 0.3s;
  ${({ state }) => handleAnimationState(state)};

  display: ${({ state }) => (state === 'exited' ? 'none' : 'flex')};
`;

export { Animation };