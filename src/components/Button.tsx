import clsx from "clsx";

function Button({ children, size, ...props }) {
    const sizes = {
        xs: "text-xs p-1",
        small: "text-sm py-2 px-4",
        normal: "px-3 py-2",
    };

    return (
        <button
            type="button"
            className={clsx(size ? sizes[size] : sizes.normal, "group rounded-full  shadow-lg ring-1 backdrop-blur transition bg-primary-800/90 ring-white/10 hover:ring-white/20")}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
