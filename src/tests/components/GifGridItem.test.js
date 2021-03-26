import React from "react";
import { shallow } from "enzyme";

import GifGridItem from "../../components/GifGridItem";

describe("Pruebas en <GifGridItem />", () => {
  const title = "hola, soy un título";
  const url = "https://localhost/test.png";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);
  test("Debe mostrar <GifGridItem /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe tener un parrafo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });
  test("Debe tener la imagen con stc y alt", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });
  test("Debe tener animate__fadeIn", () => {
    const div = wrapper.find("div");
    expect(div.prop("className")).toContain("animate__fadeIn");
  });
});
