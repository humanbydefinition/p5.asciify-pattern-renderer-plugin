import p5 from 'p5';
import { p5asciify } from 'p5.asciify';

import { PatternRendererPlugin } from './plugin/PatternRendererPlugin';

const sketch = new p5((p) => {

    let patternRenderer;

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);

        p5asciify.registerPlugin(PatternRendererPlugin);
    };

    p.setupAsciify = () => {
        p5asciify.asciifier().renderers().get("brightness").update({
            enabled: false,
            brightnessRange: [0, 255],
        });

        patternRenderer = p5asciify.asciifier().renderers().add("pattern", "pattern", { enabled: true });

        patternRenderer.add("linear", 0, 255, " .:-=+*%@#", {
            direction: 1,
            angle: 0,
            speed: 0.1,
            zigzag: true,
        });

        console.log(p5asciify.asciifier().renderers().getAvailableRendererTypes());
    };

    p.draw = () => {
        p.background(0);
        p.rotateX(p.frameCount * 0.02);
        p.rotateY(p.frameCount * 0.02);
        p.normalMaterial();
        p.box(400);
    };

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
});

export default sketch;