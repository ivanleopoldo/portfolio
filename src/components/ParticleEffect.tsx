import React from "react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleEffect() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  if (init) {
  }

  return (
    <div className="-z-10 absolute">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            autoPlay: true,
            background: {
              color: {
                value: "#262626",
              },
              opacity: 1,
            },
            fpsLimit: 120,
            interactivity: {
              detectsOn: "window",
              events: {
                onHover: {
                  enable: true,
                  mode: "attract",
                },
                resize: {
                  delay: 0.5,
                  enable: true,
                },
              },
              modes: {
                trail: {
                  delay: 0.005,
                  pauseOnStop: true,
                  quantity: 5,
                  particles: {
                    color: {
                      value: "#716a6a",
                      animation: {
                        enable: true,
                        speed: 1000,
                        sync: true,
                      },
                    },
                  },
                },
              },
            },
            particles: {
              color: {
                value: "#494949",
              },
              effect: {
                close: true,
                fill: true,
                options: {},
                type: [],
              },
              move: {
                angle: {
                  offset: 0,
                  value: 90,
                },
                attract: {
                  distance: 300,
                  enable: true,
                  rotate: {
                    x: 3000,
                    y: 3000,
                  },
                },
                center: {
                  x: 50,
                  y: 50,
                  mode: "percent",
                  radius: 0,
                },
                decay: 0,
                distance: {},
                direction: "none",
                drift: 0,
                enable: true,
                outModes: {
                  default: "out",
                  bottom: "out",
                  left: "out",
                  right: "out",
                  top: "out",
                },
                random: false,
                size: false,
                speed: 2,
                spin: {
                  acceleration: 0,
                  enable: false,
                },
                straight: false,
                trail: {
                  enable: false,
                  length: 10,
                  fill: {},
                },
                vibrate: false,
                warp: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 1920,
                  height: 1080,
                },
                limit: {
                  mode: "delete",
                  value: 0,
                },
                value: 200,
              },
              opacity: {
                value: {
                  min: 0.3,
                  max: 0.8,
                },
                animation: {
                  count: 0,
                  enable: true,
                  speed: 0.2,
                  decay: 0,
                  delay: 0,
                  sync: false,
                  mode: "auto",
                  startValue: "random",
                  destroy: "none",
                },
              },
              shape: {
                close: true,
                fill: true,
                options: {},
                type: "circle",
              },
              size: {
                value: {
                  min: 1,
                  max: 3,
                },
                animation: {
                  count: 0,
                  enable: true,
                  speed: 3,
                  decay: 0,
                  delay: 0,
                  sync: false,
                  mode: "auto",
                  startValue: "random",
                  destroy: "none",
                },
              },
              links: {
                blink: false,
                color: {
                  value: "random",
                },
                consent: false,
                distance: 100,
                enable: true,
                frequency: 1,
                opacity: 1,
                shadow: {
                  blur: 5,
                  color: {
                    value: "#000",
                  },
                  enable: false,
                },
                triangles: {
                  enable: false,
                  frequency: 1,
                },
                width: 1,
                warp: false,
              },
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,
            smooth: true,
          }}
        />
      )}
    </div>
  );
}
