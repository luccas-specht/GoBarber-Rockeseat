import React from 'react';
import { Transition } from 'react-transition-group';
import { Animation } from './fade-animation.style';

interface FadeProps {
  duration: number;
  when: boolean;
  children: any;
}

const Fade = ({ duration, when, children }: FadeProps) => (
    <Transition in={when} timeout={duration} unmountOnExit mountOnEnter>
      {state => <Animation state={state}>{children}</Animation>}
    </Transition>
  );

export { Fade };