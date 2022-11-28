import { useEffect, useState } from "react";
import { StudentsTable } from "../../components/StudentsTable/StudentsTable";
import { Loader } from "../../components/Loader/Loader";

export function SOSPage() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8000/api/v1/users/get-all-sos", {
      method: "GET",
      "Content-Type": "application/json",
    }).then((response) =>
      response.json().then((json) => {
        setIsLoading(false);
        setStudents(json);
      })
    );
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <StudentsTable students={students} />
      )}
    </>
  );
}
