//loader function
import data from "../data/data.json";
export default async function ({ params }) {
  const { id } = params;
  console.log(id);

  return new Promise((res, rej) => {
    setTimeout(() => {
      const project = data.find((p) => p.id === parseInt(id));
      res(project);
    }, 100);
  });
}
