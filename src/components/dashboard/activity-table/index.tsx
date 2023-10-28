import { Activity, columns } from "./columns"
import { DataTable } from "./data-table"

const data: Activity[] = [
  {
    id: "1",
    date: new Date("01-01-2023"),
    description: "Pagamento de conta de luz",
    value: 250.95,
    type: "expanse"
  },
  {
    id: "2",
    date: new Date("07-25-2023"),
    description: "Pagamento de conta de internet",
    value: 50.95,
    type: "expanse"
  },
  {
    id: "3",
    date: new Date("07-10-2023"),
    description: "Pagamento de conta de agua",
    value: 580.95,
    type: "expanse"
  },
  {
    id: "4",
    date: new Date("05-07-2023"),
    description: "Pagamento de salário",
    value: 3000.00,
    type: "revenue"
  },
]

 function getData(): Activity[] {
  // Fetch data from your API here.
  return data;
}

export function ActivityTable() {
  const data = getData()

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
