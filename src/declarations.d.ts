import { plugins } from 'p5.asciify';

declare global {
  interface Window {
    PatternRendererPlugin: plugins.P5AsciifyRendererPlugin;
  }
}