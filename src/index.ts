import { P5AsciifyRendererPlugin } from 'p5.asciify/dist/types/plugins';
import { PatternRendererPlugin } from './PatternRendererPlugin';

declare global {
  interface Window {
    PatternRendererPlugin: P5AsciifyRendererPlugin;
  }
}

if (typeof window !== 'undefined') {
  window.PatternRendererPlugin = PatternRendererPlugin;
}

export * from './renderer/gradients';

export { P5AsciifyPatternRenderer } from './renderer/PatternAsciiRenderer';

export { PatternRendererPlugin } from './PatternRendererPlugin';

