import React from "react";
import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "Naruto";

  test("<GifGrid /> funciona correctamente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
  test("should change the snapshot when useFetchGifs is executed", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://google.com",
        title: "ABC Title",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
});
