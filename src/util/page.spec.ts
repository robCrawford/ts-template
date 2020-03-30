import { div } from "./page";

describe("Page utils", function(): void {

  it("should create a div with text", () => {
    const el = div("test");
    expect(el.innerHTML).toEqual("test");
  });

});
