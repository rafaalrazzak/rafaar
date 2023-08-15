const hidden = {
    y: 15,
    opacity: 0,
};

const visible = {
    y: 0,
    opacity: 1,
};

const variants = () => ({
    hidden,
    visible: {
        ...visible,
        transition: {
            type: "tween",
            duration: 0.15,
        },
    },
});
export default variants;
