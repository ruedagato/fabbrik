import * as React from 'react';
import { Button } from 'primereact/button';
import 'assets/global.scss';

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <div className="cla">
    <h1>Example {props.compiler}</h1>
    <Button label="click" />
    <Button label="Secondary" className="p-button-secondary" />
  </div>
);
