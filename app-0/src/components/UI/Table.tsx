import {
  ColumnDef,
  createSolidTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/solid-table";
import { For } from "solid-js";

type TableProp = {
  data: any[];
};

const columns: ColumnDef<any>[] = [
  {
    accessorKey: "timestamp",
    accessorFn: (row) => row.timestamp,
    header: "Time",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "type",
    accessorFn: (row) => row.type,
    header: "Type",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "nonce",
    accessorFn: (row) => row.nonce,
    header: "Nonce",
    cell: (info) => info.getValue(),
  },
];

export default function Table({ data = [] }: TableProp) {
  const table = createSolidTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div class="container mx-auto font-mono">
      <table class="border">
        <thead class="border">
          <For each={table.getHeaderGroups()}>
            {(headerGroup) => (
              <tr class="border ">
                <For each={headerGroup.headers}>
                  {(header) => (
                    <th class="border ">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  )}
                </For>
              </tr>
            )}
          </For>
        </thead>
        <tbody class="border text-sm">
          <For each={table.getRowModel().rows}>
            {(row) => (
              <tr class="border ">
                <For each={row.getVisibleCells()}>
                  {(cell) => (
                    <td class="border px-2">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )}
                </For>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
}
