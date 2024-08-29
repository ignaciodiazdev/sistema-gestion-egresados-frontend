import { DetailEmpleo } from "./DetailEmpleo";
import { CardUser } from "../../components/CardUser";

export const ListEmpleos = ({ empleos }) => {
  return (
    <>
      {empleos.map((empleo, index) => (
        <CardUser key={index}>
          <div className="min-h-[100px]">
            <DetailEmpleo empleo={empleo} />
          </div>
        </CardUser>
      ))}
    </>
  );
};
