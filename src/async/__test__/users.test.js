import axios from "axios";
import getUser from "../users";

jest.mock("axios");
describe("users", () => {
  test("should get users data with mock axios get", async () => {
    axios.get.mockResolvedValue({
      data: {
        name: "yanqin",
      },
    });
    await expect(getUser()).resolves.toEqual({ name: "yanqin" });
  });
});
