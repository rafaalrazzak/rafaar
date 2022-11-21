import * as Icons from '@/icons'
const DynamicIcon = ({ name, ...props }) => {
  const newName = name.replace(" ", "")
  const Icon = Icons[newName + "Icon"]
  return <Icon {...props} />
}
export default DynamicIcon
