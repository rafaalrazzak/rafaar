import generatedTables from "@/libs/generatedTables"

export default function Table({ data }) {
  return (
    <table className="table-auto text-base text-gray-300 ">
      <tbody className="w-64">
        {generatedTables(data).map((row) => (
          <tr key={row[0]}>
            <td>{row[0]}</td>
            <td className="px-2">:</td>
            <td>{row[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
