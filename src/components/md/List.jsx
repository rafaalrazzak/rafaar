export default function List({ data }) {
  return (
    <ul className="list-disc space-y-4 text-base text-gray-300">
      {data.map((content) => (
        <li key={content} className="ml-4 ">
          {content}
        </li>
      ))}
    </ul>
  )
}
