import axios from "axios";
import { register } from "../user";
import { verifyUsername } from "../verify";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", async () => {
    axios.post.mockResolvedValue({
      data: {
        name: "yanqin",
      },
    });
    await expect(register("yanqin", "123")).resolves.toEqual({
      name: "yanqin",
    });
  });

  test("should reject with Error when username is invalid", async () => {
    verifyUsername.mockImplementation(() => false);
    await expect(register("yanqin", "123")).rejects.toThrow(Error);
  });
});
