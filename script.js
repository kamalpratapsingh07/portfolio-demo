console.log("Portfolio animation script loaded!");

(() => {
    "use strict";

    const hero = document.querySelector(".hero");
    const canvas = hero?.querySelector(".hero-particles");

    if (!hero || !canvas) {
        console.warn("Hero section or particle canvas was not found.");
        return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
        console.warn("Canvas 2D context is unavailable.");
        return;
    }

    const desktopPointer = window.matchMedia(
        "(hover: hover) and (pointer: fine)"
    );
    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    const MAX_DPR = 2;
    const CONNECTION_DISTANCE = 125;
    const INTERACTION_RADIUS = 145;

    let canvasWidth = 0;
    let canvasHeight = 0;
    let particles = [];
    let animationFrameId = null;

    const mouse = { x: -1000, y: -1000 };

    class Particle {
        constructor() {
            this.x = Math.random() * canvasWidth;
            this.y = Math.random() * canvasHeight;
            this.radius = Math.random() * 1.4 + 1;
            this.vx = (Math.random() - 0.5) * 0.42;
            this.vy = (Math.random() - 0.5) * 0.42;
            this.opacity = Math.random() * 0.35 + 0.2;
            this.color = Math.random() < 0.55
                ? [139, 92, 246]
                : [96, 165, 250];
            this.pushX = 0;
            this.pushY = 0;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (desktopPointer.matches) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const distance = Math.hypot(dx, dy);

                if (distance > 0 && distance < INTERACTION_RADIUS) {
                    const strength =
                        (INTERACTION_RADIUS - distance) / INTERACTION_RADIUS;
                    const force = strength * 0.7;

                    this.pushX += (dx / distance) * force;
                    this.pushY += (dy / distance) * force;
                }
            }

            this.x += this.pushX;
            this.y += this.pushY;
            this.pushX *= 0.88;
            this.pushY *= 0.88;

            const margin = this.radius + 3;

            if (this.x < -margin) this.x = canvasWidth + margin;
            if (this.x > canvasWidth + margin) this.x = -margin;
            if (this.y < -margin) this.y = canvasHeight + margin;
            if (this.y > canvasHeight + margin) this.y = -margin;
        }

        draw() {
            const [red, green, blue] = this.color;

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle =
                `rgba(${red}, ${green}, ${blue}, ${this.opacity})`;
            ctx.fill();
        }
    }

    function createParticles() {
        const isMobile = window.innerWidth < 768;
        const count = isMobile ? 24 : 72;

        particles = Array.from(
            { length: count },
            () => new Particle()
        );
    }

    function drawConnections() {
        for (let i = 0; i < particles.length; i += 1) {
            for (let j = i + 1; j < particles.length; j += 1) {
                const first = particles[i];
                const second = particles[j];
                const distance = Math.hypot(
                    first.x - second.x,
                    first.y - second.y
                );

                if (distance < CONNECTION_DISTANCE) {
                    const opacity =
                        (1 - distance / CONNECTION_DISTANCE) * 0.18;

                    ctx.beginPath();
                    ctx.moveTo(first.x, first.y);
                    ctx.lineTo(second.x, second.y);
                    ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
                    ctx.lineWidth = 0.7;
                    ctx.stroke();
                }
            }
        }
    }

    function drawFrame(shouldUpdate = true) {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        if (shouldUpdate) {
            particles.forEach((particle) => particle.update());
        }

        drawConnections();
        particles.forEach((particle) => particle.draw());
    }

    function animate() {
        drawFrame(true);
        animationFrameId = window.requestAnimationFrame(animate);
    }

    function resizeCanvas() {
        const rect = hero.getBoundingClientRect();
        const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);

        canvasWidth = Math.max(1, rect.width);
        canvasHeight = Math.max(1, rect.height);

        canvas.width = Math.round(canvasWidth * dpr);
        canvas.height = Math.round(canvasHeight * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

        createParticles();

        if (reducedMotion.matches) {
            drawFrame(false);
        }
    }

    function handlePointerMove(event) {
        if (!desktopPointer.matches) return;

        const rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
    }

    function resetPointer() {
        mouse.x = -1000;
        mouse.y = -1000;
    }

    function startAnimation() {
    if (animationFrameId !== null) return;

    animationFrameId = window.requestAnimationFrame(animate);
    }
    
    function stopAnimation() {
        if (animationFrameId === null) return;

        window.cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }

    resizeCanvas();

    startAnimation();

    hero.addEventListener("pointermove", handlePointerMove, {
        passive: true
    });
    hero.addEventListener("pointerleave", resetPointer);
    window.addEventListener("resize", resizeCanvas, { passive: true });

    if (typeof reducedMotion.addEventListener === "function") {
        reducedMotion.addEventListener("change", () => {
            if (reducedMotion.matches) {
                stopAnimation();
                drawFrame(false);
            } else {
                startAnimation();
            }
        });
    }

    if ("ResizeObserver" in window) {
        const resizeObserver = new ResizeObserver(resizeCanvas);
        resizeObserver.observe(hero);
    }
})();

// Typewriter animation — retained as a separate feature.
const typingText = document.getElementById("typing-text");

const messages = [
    "Hello, I'm Kamal Pratap Singh.",
    "I am a Software Engineer",
    "I love coding and solving problems.",
    "I build user-friendly, scalable web applications."
];

let messageIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!typingText) return;

    const currentMessage = messages[messageIndex];

    if (!isDeleting) {
        typingText.textContent =
            currentMessage.substring(0, characterIndex + 1);
        characterIndex += 1;

        if (characterIndex === currentMessage.length) {
            isDeleting = true;
            window.setTimeout(typeEffect, 1800);
            return;
        }
    } else {
        typingText.textContent =
            currentMessage.substring(0, characterIndex - 1);
        characterIndex -= 1;

        if (characterIndex === 0) {
            isDeleting = false;
            messageIndex = (messageIndex + 1) % messages.length;
        }
    }

    const speed = isDeleting ? 35 : 75;
    window.setTimeout(typeEffect, speed);
}

if (typingText) {
    typeEffect();
}
