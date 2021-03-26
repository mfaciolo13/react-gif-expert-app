import { useFetchGifs } from "../../hooks/useFetchGifs";

describe.skip("Tests useFetchGifs.js", () => {
  const category = "Naruto";
  test("should ", () => {
    const fetch = useFetchGifs(category);
    console.log(fetch);
  });
});
