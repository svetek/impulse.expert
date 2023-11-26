'use client';

import P5 from 'p5';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Image from 'next/image';
import './head-section.section.css';

export default function HeadSection() {
  const { theme } = useContext(ThemeContext);
  const isFirefox =
    typeof navigator !== 'undefined' && navigator.userAgent.includes('Firefox');
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 1000;

  useEffect(() => {
    let sketchInstance: P5;

    if (!isFirefox && !isMobile) {
      const sketch = (p5: P5) => {
        let group: any = [];
        let maxParticles = 350;
        let img: any;

        let settings = {
          damping: 0.25,
          bg_alpha: 0.05,
          stroke_alpha: 0.2,
          gravity: 0.0051,
          lifespan: 2,
          velocity: 0.005,
          maxConnectionDistance: 25,
        };

        p5.setup = () => {
          p5.pixelDensity(1);
          const canvas = p5.createCanvas(600, 600);
          canvas.parent('head');

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
          theme == 'dark'
            ? p5.background(229, 91, 9, settings.bg_alpha)
            : p5.background(214, 6, 100, settings.bg_alpha);

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

          p5.stroke(theme == 'dark' ? 255 : 10, settings.stroke_alpha);
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
              isAgentInsideBox(
                agent,
                -50,
                -50,
                p5.width + 50,
                p5.height + 50
              ) &&
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

          return [-999, -999];
        }
      };

      sketchInstance = new P5(sketch);
    }

    return () => {
      sketchInstance?.remove();
    };
  }, [theme, isFirefox, isMobile]);

  if (isFirefox || isMobile) {
    return (
      <Image
        className='gif px-10 lg:px-0'
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

  return <></>;
}
