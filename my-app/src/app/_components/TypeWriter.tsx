'use client';
import Typewriter from 'typewriter-effect';

export default function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          'Daan',
          'a full-stack developer',
          'a machine learning engineer',
          'a data scientist',
          'a data engineer',
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
}
