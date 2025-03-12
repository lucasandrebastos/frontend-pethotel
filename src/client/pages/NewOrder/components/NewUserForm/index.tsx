import { Box, Button, TextField } from "@mui/material";
import { createNewUser } from "../../../../../admin/service/userService";
import { useState } from "react";
export const NewUserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    emergency_phone_number: "",
    cpf: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const newUser = await createNewUser(formData);
      console.log(newUser);
      setFormData({
        name: "",
        email: "",
        phone_number: "",
        emergency_phone_number: "",
        cpf: "",
        address: "",
      });
    } catch (e) {
      throw e;
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          m: 1,
          width: "25ch",
          display: "flex",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          name="name"
          value={formData.name}
          onChange={handleChange}
          label="Nome"
          variant="standard"
        />
        <TextField
          name="email"
          value={formData.email}
          onChange={handleChange}
          label="Email"
          variant="standard"
        />
        <TextField
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          label="Telefone"
          variant="standard"
        />
        <TextField
          name="emergency_phone_number"
          value={formData.emergency_phone_number}
          onChange={handleChange}
          label="Telefone de Emergência"
          variant="standard"
        />
        <TextField
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          label="CPF"
          variant="standard"
        />
        <TextField
          name="address"
          value={formData.address}
          onChange={handleChange}
          label="Endereço"
          variant="standard"
        />
        <Button type="submit" variant="contained">
          Criar novo usuário
        </Button>
      </Box>
    </>
  );
};
