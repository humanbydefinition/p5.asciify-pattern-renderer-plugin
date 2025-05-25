import { PatternRendererPlugin } from './PatternRendererPlugin';

if (typeof window !== 'undefined') {
  window.PatternRendererPlugin = PatternRendererPlugin;
}

export * from './renderer/gradients';

export { P5AsciifyPatternRenderer } from './renderer/PatternAsciiRenderer';

export { PatternRendererPlugin } from './PatternRendererPlugin';

