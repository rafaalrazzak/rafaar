import React from 'react';

import * as Icons from '@/icons';

// Define a more flexible type for the icons
type IconsType = {
  [key: string]: React.ComponentType<any>;
};

// Explicitly type the imported icons
const typedIcons: IconsType = Icons;

// Define props for the DynamicIcon component
interface DynamicIconProps extends Omit<React.SVGProps<SVGSVGElement>, 'name'> {
  name: keyof typeof typedIcons;
  size?: number;
}

// DynamicIcon component
const DynamicIcon: React.FC<DynamicIconProps> = ({
  name,
  size = '24',
  ...props
}) => {
  // Normalize the name to match the key in the typedIcons object
  const normalizedIconName =
    `${String(name).replace(/\s|\./g, '')}Icon` as keyof typeof typedIcons;

  // Get the corresponding Icon component
  const Icon = typedIcons[normalizedIconName];

  // If the Icon component doesn't exist, return null or handle the error as needed
  if (!Icon) {
    console.error(`Icon "${normalizedIconName}" does not exist.`);
    return null;
  }

  // Render the Icon component with the given props and size
  return <Icon width={size} height={size} {...props} />;
};

export default DynamicIcon;
