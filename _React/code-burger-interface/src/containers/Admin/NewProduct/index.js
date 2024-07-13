import React, { useEffect } from "react";
import { useForm } from "react-hook-form"

import { Container, Label, Input } from "./styles";
import api from "../../../services/api";
import ReactSelect from "react-select";
import { Button } from "../../../components"


function NewProduct() {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)


  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get("products")

    };
    loadOrders()
  }, [])

  return (
    <Container>
      <form noValidate>
        <Label>Nome</Label>
        <Input type="text" {...register("name")} />

        <Label>Preço</Label>
        <Input type="number" {...register("price")} />

        <Label>Upload da imagem</Label>
        <Input type="file" accept="image/png, image/jpeg" />

        <ReactSelect />
        <Button>Adicionar produto</Button>
      </form>
    </Container>
  );
}

export default NewProduct 
