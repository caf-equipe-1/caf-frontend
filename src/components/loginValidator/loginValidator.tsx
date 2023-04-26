import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function LoginValidator() {
  const navigate = useNavigate();
  const loggedUser = useSelector((state: RootState) => state.user.value);

  useEffect(() => {
    if (loggedUser.id.trim() === "") {
      navigate("/");
    }
  }, []);

  return <></>;
}
