import { getGifs } from "../../helper/getGifs";

describe("Pruebas en getGifs.js", () => {
  const category = "Naruto";
  test("Debe retornar 10 gifs", async () => {
    const gifs = await getGifs(category);
    expect(gifs.length).toBe(10);
  });
  test("Debe retornar []", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
