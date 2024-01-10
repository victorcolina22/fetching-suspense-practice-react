import { Suspense } from "react";
import { fetchData } from "../services/fetchData";

const URL = "https://jsonplaceholder.typicode.com/users";
const apiData = await fetchData(URL);

export function Users() {
  const data = apiData;
  return (
    <>
      <h1>Render as you Fetch</h1>
      <Suspense fallback={<p>loading...</p>}>
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </Suspense>
    </>
  );
}
