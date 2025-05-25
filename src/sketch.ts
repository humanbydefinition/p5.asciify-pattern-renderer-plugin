import p5 from 'p5';
import { p5asciify } from 'p5.asciify';

import { PatternRendererPlugin } from './plugin/PatternRendererPlugin';
import { P5AsciifyPatternRenderer } from './plugin/renderer/PatternAsciiRenderer';
import { P5AsciifyBrightnessRenderer } from 'p5.asciify/dist/types/renderers/2d/feature';
import { renderers } from 'p5.asciify';

const sketch = new p5((p) => {

<<<<<<< HEAD:src/sketch.js
    let asciifier;

    let patternRenderer;
=======
    let brightnessRenderer: renderers.renderer2d.feature.P5AsciifyBrightnessRenderer;
    let patternRenderer: P5AsciifyPatternRenderer;

    let linearPattern;
>>>>>>> 7e65950811656edcaf346282f79f74110b10e362:src/sketch.ts

    let linearGradient, spiralGradient, radialGradient,
        zigzagGradient, conicalGradient;

        let gridRows = 3;
    let gridCols = 3;
    let fillColors = [
        [150, 160, 170],
        [180, 190, 200],
        [210, 220, 230],
    ];

    const getFillColor = (row, col) => {
        return fillColors[row][col];
    };

    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);

        p5asciify.registerPlugin(PatternRendererPlugin);
    };

    p.setupAsciify = () => {

<<<<<<< HEAD:src/sketch.js
        asciifier = p5asciify.asciifier();
        asciifier.backgroundMode("sampled");

        asciifier.renderers().get("brightness").update({
            enabled: true,
=======
        brightnessRenderer = p5asciify.asciifier().renderers().get("brightness") as P5AsciifyBrightnessRenderer;
        brightnessRenderer.update({
            enabled: false,
>>>>>>> 7e65950811656edcaf346282f79f74110b10e362:src/sketch.ts
            brightnessRange: [0, 255],
            characters: ".",
        });

<<<<<<< HEAD:src/sketch.js
        patternRenderer = asciifier.renderers().add("pattern", "pattern", { enabled: true });
=======
        patternRenderer = p5asciify.asciifier().renderers().add("pattern", "pattern", { enabled: true }) as P5AsciifyPatternRenderer;
>>>>>>> 7e65950811656edcaf346282f79f74110b10e362:src/sketch.ts

        linearGradient = patternRenderer.add("linear", 150, 150, "patterns ", {
            direction: 1,
            angle: 0,
            speed: 0.1,
        });
        
        spiralGradient = patternRenderer.add("spiral", 160, 160, "now  ", {
            direction: 1,
            speed: 0.01,
            density: 0.5,
        });

        radialGradient = patternRenderer.add("radial", 170, 170, "available ", {
            direction: -1,
            radius: 1.0,
        });

        zigzagGradient = patternRenderer.add("linear", 180, 180, "in ", {
            direction: 1,
            speed: 0.2,
            zigzag: true,
        });

        conicalGradient = patternRenderer.add("conical", 190, 190, "p5.asciify ", {
            speed: 0.01,
        });

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
            zigzagGradient.enabled = !zigzagGradient.enabled;
        }

        if (p.frameCount === 120) {
            radialGradient.characters = "finally ";
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