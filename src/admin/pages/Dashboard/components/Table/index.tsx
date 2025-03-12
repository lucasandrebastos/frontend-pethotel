import { Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { User } from "../../../../service/userService";

interface ITableProps {
  rows: User[] | undefined;
}

export const Table = ({ rows }: ITableProps) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "email", headerName: "Email", width: 130 },
    { field: "phone_number", headerName: "Telefone", width: 70 },
    {
      field: "emergency_phone_number",
      headerName: "Telefone secundário",
      width: 70,
    },
    { field: "cpf", headerName: "CPF", width: 70 },
    { field: "address", headerName: "Endereço", width: 130 },
  ];
  const paginationModel = { page: 0, pageSize: 5 };
  console.log(rows);

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        columns={columns}
        rows={rows}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
};
