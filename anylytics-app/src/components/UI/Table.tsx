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
    accessorKey: "type",
    accessorFn: (row) => row.type,
    header: "Type",
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
        <thead class="border flex px-4">
          <For each={table.getHeaderGroups()}>
            {(headerGroup) => (
              <tr>
                <For each={headerGroup.headers}>
                  {(header) => (
                    <th class="">
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
        <tbody class="border">
          <For each={table.getRowModel().rows}>
            {(row) => (
              <tr class="border flex">
                <For each={row.getVisibleCells()}>
                  {(cell) => (
                    <td class="border flex">
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
