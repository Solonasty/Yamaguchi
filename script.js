gsap.registerEffect({
    name: "up",
    effect: (targets, config) => {
        return gsap.from(targets, {
            duration: config.duration,
            opacity: 0,
            y: 1000,
        });
    },
    defaults: {duration: 2},
});

gsap.registerEffect({
    name: "levitation",
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            y: 20,
            yoyo: true,
            repeat: -1,
            ease: "linear",
        });
    },
    defaults: {duration: 1.5},
});

gsap.registerEffect({
    name: "wide",
    effect: (targets, config) => {
        return gsap.from(targets, {
            duration: config.duration,
            opacity: 0,
            scale: .3,
        });
    },
    defaults: {duration: .3},
    extendTimeline: true,
});

gsap.registerEffect({
    name: "small",
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            opacity: 1,
            scale: .5,
        });
    },
    defaults: {duration: .5},
});

function init() {
    let animation = gsap.timeline()
    animation.add(gsap.effects.wide(".hole"))
    .add(gsap.effects.up(".girl"))
    .add(gsap.effects.small(".hole"))
    .add(gsap.effects.levitation(".girl"));
};

init();