import p5 from 'p5';
import { p5asciify, renderers } from 'p5.asciify';

import { PatternRendererPlugin } from '../src/plugin/PatternRendererPlugin';
import { P5AsciifyConicalGradient, P5AsciifyLinearGradient, P5AsciifyRadialGradient, P5AsciifySpiralGradient } from '../src/plugin/renderer/gradients';
import { P5AsciifyPatternRenderer } from '../src/plugin/renderer/PatternAsciiRenderer';

const sketch = new p5((p) => {

    let asciifier;

    let brightnessRenderer;
    let patternRenderer;

    let linearGradient: P5AsciifyLinearGradient;
    let spiralGradient: P5AsciifySpiralGradient;
    let radialGradient: P5AsciifyRadialGradient;
    let zigzagGradient: P5AsciifyLinearGradient;
    let conicalGradient: P5AsciifyConicalGradient;

    let gridRows = 3;
    let gridCols = 3;
    let fillColors = [
        [150, 160, 170],
        [180, 190, 200],
        [210, 220, 230],
    ];

    const getFillColor = (row: number, col: number) => {
        return fillColors[row][col];
    };

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);

        p5asciify.registerPlugin(PatternRendererPlugin);
    };

    p.setupAsciify = () => {

        asciifier = p5asciify.asciifier();
        asciifier.backgroundMode("sampled");

        brightnessRenderer = asciifier.renderers().get("brightness") as renderers.renderer2d.feature.P5AsciifyBrightnessRenderer;

        brightnessRenderer.update({
            enabled: true,
            brightnessRange: [0, 255],
            characters: ".",
        });

        patternRenderer = asciifier.renderers().add("pattern", "pattern", { enabled: true }) as P5AsciifyPatternRenderer;

        linearGradient = patternRenderer.add("linear", 150, 150, "patterns ", {
            direction: 1,
            angle: 0,
            speed: 0.1,
            zigzag: false,
        }) as P5AsciifyLinearGradient;

        spiralGradient = patternRenderer.add("spiral", 160, 160, "now  ", {
            direction: 1,
            speed: 0.01,
            density: 0.5,
        }) as P5AsciifySpiralGradient;

        radialGradient = patternRenderer.add("radial", 170, 170, "available ", {
            direction: -1,
            radius: 1.0,
        }) as P5AsciifyRadialGradient;

        zigzagGradient = patternRenderer.add("linear", 180, 180, "in ", {
            direction: 1,
            speed: 0.2,
            zigzag: true,
        }) as P5AsciifyLinearGradient;

        conicalGradient = patternRenderer.add("conical", 190, 190, "p5.asciify ", {
            speed: 0.01,
        }) as P5AsciifyConicalGradient;

        console.log(p5asciify.asciifier().renderers().getAvailableRendererTypes());
    };

    p.draw = () => {
        p.background(0);
        p.noStroke();

        const rectWidth = p.windowWidth / gridCols;
        const rectHeight = p.windowHeight / gridRows;

        for (let row = 0; row < gridRows; row++) {
            for (let col = 0; col < gridCols; col++) {
                let fillColor = getFillColor(row, col);
                p.fill(fillColor);
                p.rect(
                    -p.windowWidth / 2 + col * rectWidth,
                    -p.windowHeight / 2 + row * rectHeight,
                    rectWidth,
                    rectHeight
                );
            }
        }

        if (p.frameCount % 60 == 0) {
            zigzagGradient.toggle();
        }

        linearGradient.angle += 0.5;
        spiralGradient.centerX = p.map(p.mouseX, 0, p.windowWidth, 0, 1);
        spiralGradient.centerY = p.map(p.mouseY, 0, p.windowHeight, 0, 1);
        radialGradient.centerX = p.map(p.mouseX, 0, p.windowWidth, 0, 1);
        radialGradient.centerY = p.map(p.mouseY, 0, p.windowHeight, 0, 1);
        conicalGradient.centerX = p.map(p.mouseX, 0, p.windowWidth, 0, 1);
        conicalGradient.centerY = p.map(p.mouseY, 0, p.windowHeight, 0, 1);
    };

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
});

export default sketch;