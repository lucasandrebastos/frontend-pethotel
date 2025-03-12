import { NewReservationForm } from "./pages/NewOrder/components/NewReservationForm";
import { NewUserForm } from "./pages/NewOrder/components/NewUserForm";

export const Client = () => {
  return (
    <>
      <NewUserForm />
      <NewReservationForm />
    </>
  );
};
