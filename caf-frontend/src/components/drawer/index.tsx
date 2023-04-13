import { FormRegister } from "../forms/formRegister";
import { BoxRegister, DrawerPage } from "./styles";

export function DrawerRegister() {
  return (
    <DrawerPage>
      <BoxRegister>
        <FormRegister />
      </BoxRegister>
    </DrawerPage>
  );
}
