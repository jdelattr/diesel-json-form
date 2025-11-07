import { JsonValue } from '../JsonValue';
import { Model } from '../Model';
import { JsPath } from '../JsPath';
import { Dispatcher } from 'tea-cup-fp';
import { Msg } from '../Msg';
import { RendererFactory } from './Renderer';
import { RenderOptions } from '../RenderOptions';
import * as React from 'react';

export interface ViewValueProps<T extends JsonValue> {
  readonly model: Model;
  readonly path: JsPath;
  readonly value: T;
  readonly rendererFactory: RendererFactory;
  readonly dispatch: Dispatcher<Msg>;
  readonly language: string;
  readonly renderOptions?: RenderOptions;
  readonly children?: React.ReactNode;
}
