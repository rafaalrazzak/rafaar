import * as Icons from "@/icons";

interface DynamicIconProps extends React.SVGProps<SVGSVGElement> {
    name: string;
}

const DynamicIcon = ({ name, ...props }: DynamicIconProps) => {
    const newName = name.replace(" ", "").replace(".", "");

    const Icon = Icons[newName + "Icon"];
    return <Icon {...props} />;
};
export default DynamicIcon;
