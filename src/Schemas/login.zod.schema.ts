import { z } from "zod";
export const loginZodSchema = z.object({
  email: z.string({ required_error: "Email is required!" }),
  password: z.string({ required_error: "Password is required!" }),
 
});
