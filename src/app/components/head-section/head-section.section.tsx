'use client';

import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Image from 'next/image';
import { ReactP5Wrapper, Sketch, SketchProps } from '@p5-wrapper/react';
import './head-section.section.css';

export default function HeadSection() {
  const { theme } = useContext(ThemeContext);

  const [state, setState] = useState({
    rotation: 160,
    unmount: false,
  });

  const onMountStateChange = useCallback(() => {
    setState((state) => ({ ...state, unmount: !state.unmount }));
  }, []);

  useEffect(() => () => onMountStateChange(), []);

  const isFirefox =
    typeof navigator !== 'undefined' && navigator.userAgent.includes('Firefox');
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 1000;

  const sketch = useMemo(
    () => (p5: any) => {
      let group: any = [];
      let maxParticles = 350;
      let img: any;

      let settings = {
        damping: 0.25,
        bg_alpha: 0.05,
        stroke_alpha: 0.2,
        gravity: 0.0051,
        lifespan: 10,
        velocity: 0.005,
        maxConnectionDistance: 25,
      };

      p5.setup = () => {
        p5.pixelDensity(1);

        const parentElement = document.getElementById('welcome-logo');
        const existingCanvas = parentElement?.querySelector('canvas');

        if (existingCanvas) {
          existingCanvas.remove();
        }

        const canvas = p5.createCanvas(650, 650);
        canvas.parent('welcome-logo');

        p5.rectMode(p5.CENTER);
        p5.blendMode(p5.BLEND);
        p5.colorMode(p5.HSB);

        theme == 'dark'
          ? p5.background(229, 91, 9)
          : p5.background(214, 6, 100);
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
        while (group.length < maxParticles) {
          const [x, y] = getImgCoords();
          if (x >= 0) {
            let newParticle = createAgent(
              x,
              y,
              p5.random(-1, 1),
              p5.random(-1, 1)
            );
            group.push(newParticle);
          }
        }

        let gravity = p5.createVector(0, settings.gravity);

        group.forEach((agent: any) => {
          moveAgent(agent);
          applyForce(agent, gravity);
          twitch(agent);
        });

        if (theme === 'dark') {
          p5.background(229, 91, 9, settings.bg_alpha);
          p5.stroke(255, settings.stroke_alpha);
        } else {
          p5.background(214, 6, 100, settings.bg_alpha);
          p5.stroke(227, 96, 27, settings.stroke_alpha);
        }

        connectNearbyParticles();
        cleanUp();
      };

      function connectNearbyParticles() {
        for (let i = 0; i < group.length; i++) {
          for (let j = i + 1; j < group.length; j++) {
            let d = p5.dist(
              group[i].position.x,
              group[i].position.y,
              group[j].position.x,
              group[j].position.y
            );
            if (d < settings.maxConnectionDistance) {
              p5.line(
                group[i].position.x,
                group[i].position.y,
                group[j].position.x,
                group[j].position.y
              );
            }
          }
        }
      }

      p5.preload = () => {
        img = p5.loadImage('./images/head/head.png');
      };

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
        group = group.filter(
          (agent: any) =>
            isAgentInsideBox(agent, -50, -50, p5.width + 50, p5.height + 50) &&
            agent.lifespan > 0 &&
            img.get(agent.position.x, agent.position.y)[0] >= 200
        );
      }

      function isAgentInsideBox(agent: any, x: any, y: any, w: any, h: any) {
        let ax = agent.position.x;
        let ay = agent.position.y;

        if (ax > x && ax < x + w && ay > y && ay < y + h) {
          return true;
        }

        return false;
      }

      function getImgCoords() {
        let maxTries = 20;
        let x;
        let y;

        for (let i = 0; i < maxTries; i++) {
          x = p5.random(0, p5.width);
          y = p5.random(0, p5.height);

          let col = img.get(x, y);
          if (col[0] > 50) {
            return [x, y];
          }
        }

        return [-9999, -9999];
      }
    },
    [theme]
  );

  if (isFirefox || isMobile) {
    return (
      <Image
        priority={true}
        className='gif low-quality-image pointer-events-none select-none'
        style={{
          backgroundImage: `${
            theme === 'dark'
              ? 'url(/images/head/dark_img.png)'
              : 'url(/images/head/light_img.png)'
          }`,
        }}
        width={600}
        height={600}
        src={
          theme === 'dark'
            ? './images/head/dark.gif'
            : './images/head/light.gif'
        }
        alt='Welcome to Impulse'
      ></Image>
    );
  }

  return <ReactP5Wrapper sketch={sketch} />;
}
