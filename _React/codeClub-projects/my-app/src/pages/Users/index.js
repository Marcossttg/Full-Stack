//Add react hooks ou ferramentas auxiliares
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import ImgPeople01 from "../../assets/image-bg_people-01.svg";
import ArrowLeft from "../../assets/Arrow-left.svg";
import ImgLixeira from "../../assets/img-lixeira.svg";

import { H1 } from "../../components/Title/styles";
import { ContainerItens } from "../../components/ConteinerItens/styles";
import { Button } from "../../components/Button/styles";

import { Container, Image, User } from "./styles";

const Users = () => {
  const [users, setUsers] = useState([]);

  const history = useHistory(); //react-router-dom

  useEffect(() => {
    //React Hook => com useEffect (Efeito Colateral)
    //A minha aplicação inicia ( Quando a pagina e carregado, o useEffect é chamado)
    //Quando um estado que está no array de dependencia do useEffect é alterado
    async function fetchUsers() {
      const { data: newUsers } = await axios.get(
        "http://localhost:3001/projectNode-01"
      );

      setUsers(newUsers);
    }
    fetchUsers();
  }, []);

  //deleta user utilizando filter
  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/projectNode-01/${userId}`);

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  function goBackPage() {
    history.push("/");
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={ImgPeople01} />
      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={ImgLixeira} />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
          <img alt="arrow" src={ArrowLeft} />
          Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Users;
