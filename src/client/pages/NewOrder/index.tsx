import { NewReservationForm } from "./components/NewReservationForm";
import { NewUserForm } from "./components/NewUserForm";

export const NewOrder = () => {
  return (
    <>
      <NewUserForm />
      <NewReservationForm />
    </>
  );
};
