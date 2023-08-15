import clsx from "clsx";

interface IconTextProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: React.ReactNode;
    text: string;
}

export default function IconText({ icon, text, className: addClassName, ...props }: IconTextProps) {
    return (
        <div className={clsx("flex items-center gap-2 rounded-xl px-4 py-2 bg-primary-800")} {...props}>
            {icon}
            <p className="text-sm font-semibold text-primary-300">{text}</p>
        </div>
    );
}
