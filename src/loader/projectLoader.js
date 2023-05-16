import data from "../data/data.json";
export default async function projectLoader() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(data);
    }, 100);
  });
}
