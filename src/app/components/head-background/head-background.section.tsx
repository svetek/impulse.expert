'use client';

import { ReactP5Wrapper } from '@p5-wrapper/react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './head-background.section.css';

export default function HeadBackgroundSection() {
  const { theme } = useContext(ThemeContext);
  const isFirefox =
    typeof navigator !== 'undefined' && navigator.userAgent.includes('Firefox');
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 1000;
  const sketch = (p5: any) => {
    const timeouts: any = [];
    let mouseGroup: any = [];
    let maxParticles = 350;
    let backgroundCanvas: any;

    let settings = {
      damping: 0.25,
      stroke_alpha: 0.05,
      bg_alpha: 0.05,
      gravity: 0.0051,
      lifespan: 10,
      velocity: 0.005,
      maxConnectionDistance: 25,
    };

    p5.setup = () => {
      p5.pixelDensity(1);
      backgroundCanvas = p5.createCanvas(
        document.body.clientWidth,
        document.body.scrollHeight - 300
      );
      backgroundCanvas.parent('background');

      p5.rectMode(p5.CENTER);
      p5.blendMode(p5.BLEND);
      p5.colorMode(p5.HSB);
    };

    function createAgent(x = 0, y = 0, vx = 0, vy = 0, generation?: any) {
      let temp = {
        position: p5.createVector(x, y),
        velocity: p5.createVector(vx, vy),
        acceleration: p5.createVector(),
        lifespan: p5.random(settings.lifespan / 2, settings.lifespan),
        generation: generation ? generation : 1,
      };

      return temp;
    }

    p5.draw = () => {
      if (p5.mouseIsPressed && mouseGroup.length < maxParticles) {
        if (
          p5.mouseX >= 0 &&
          p5.mouseX <= p5.width &&
          p5.mouseY >= 0 &&
          p5.mouseY <= p5.height
        ) {
          timeouts.push(
            setTimeout(() => {
              const gap = 50;
              let newParticle = createAgent(
                p5.mouseX + p5.random(-gap, gap),
                p5.mouseY + p5.random(-gap, gap),
                p5.random(-1, 1),
                p5.random(-1, 1)
              );
              mouseGroup.push(newParticle);
            }, 300)
          );

          let gravity = p5.createVector(0, settings.gravity);

          mouseGroup.forEach((agent: any) => {
            moveAgent(agent);
            applyForce(agent, gravity);
            twitch(agent);
          });

          theme == 'dark'
            ? p5.stroke(255, p5.random(0, settings.stroke_alpha))
            : p5.stroke(227, 96, 27, p5.random(0, settings.stroke_alpha));

          connectNearbyParticles();
        }
      }

      p5.mouseReleased = () => {
        timeouts.forEach((timeout: any) => clearTimeout(timeout));

        const interval = setInterval(() => {
          theme == 'dark'
            ? p5.background(229, 91, 9, settings.bg_alpha)
            : p5.background(214, 6, 100, settings.bg_alpha);
        }, 1);

        setTimeout(() => {
          backgroundCanvas.clear();
          mouseGroup = [];
          clearInterval(interval);
        }, 500);

        cleanUp();
      };
    };

    function connectNearbyParticles() {
      for (let i = 0; i < mouseGroup.length; i++) {
        for (let j = i + 1; j < mouseGroup.length; j++) {
          let d = p5.dist(
            mouseGroup[i].position.x,
            mouseGroup[i].position.y,
            mouseGroup[j].position.x,
            mouseGroup[j].position.y
          );
          if (d < 3 * settings.maxConnectionDistance) {
            p5.line(
              mouseGroup[i].position.x,
              mouseGroup[i].position.y,
              mouseGroup[j].position.x,
              mouseGroup[j].position.y
            );
          }
        }
      }
    }

    function moveAgent(agent: any) {
      agent.velocity.add(agent.acceleration);
      agent.velocity.mult(settings.damping);
      agent.position.add(agent.velocity);
      agent.acceleration.mult(0);
      agent.lifespan--;
    }

    function applyForce(agent: any, force: any) {
      agent.acceleration.add(force);
    }

    function twitch(agent: any) {
      agent.velocity.rotate(p5.random(0, settings.velocity));
    }

    function cleanUp() {
      mouseGroup = mouseGroup.filter((agent: any) => agent.lifespan > 0);
    }
  };

  return !isFirefox && !isMobile ? <ReactP5Wrapper sketch={sketch} /> : <></>;
}
