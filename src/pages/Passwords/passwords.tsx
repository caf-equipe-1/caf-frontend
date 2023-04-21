import { useEffect, useState } from "react";
import { FlexBody } from "../../components/flexBody";
import { Title } from "../../components/title";
import { HttpResponse } from "../../domain/types/http/httpResponse-dto";
import { makePasswordRouterFactory } from "../../infra/api/factories/password/password-router-factory";
import { Password } from "../../domain/entities/password/password-entity";
import { Card } from "../../components/card";

export function Passwords() {
  const [passwords, setPasswords] = useState<Password[]>([]);

  function getPasswordsFromApi() {
    const router = makePasswordRouterFactory();

    router.getAll().then(function (response: HttpResponse<Password[]>) {
      if (response.body) {
        setPasswords(response.body);
      }
    });
  }

  function renderCards() {
    return passwords.map(function (password, index) {
      return (
        <Card
          title={password.name}
          content={[
            {
              label: "Senha",
              text: password.password,
            },
          ]}
          key={index}
        />
      );
    });
  }

  useEffect(function () {
    getPasswordsFromApi();
  }, []);

  return (
    <>
      <Title title="Senhas:" />
      <FlexBody components={renderCards()} />
    </>
  );
}
