import { InputBody } from "./interfaces";

export async function process(
  input: InputBody
): Promise<{ status: number; data: InputBody }> {
  if (!input) {
    throw new Error("Invalid input: missing data");
  }

  return {
    status: 200,
    data: input
  };
}
