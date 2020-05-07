import * as React from 'react';
import { Suspense, lazy } from 'react';
import 'assets/global.scss';

const MyComponent = lazy(() => import('./Button'));

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => {
  return (
    <div className="cla">
      <h1>Example {props.compiler}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <MyComponent />
      </Suspense>
    </div>
  );
};
