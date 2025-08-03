import z from "zod";

export const signInSchema = z.object({
  email: z.email(),
  password: z.string().min(8, "Min password should be 8"),
});

export type SignInValues = z.infer<typeof signInSchema>;

export const signUpSchema = z.object({
  name: z.string().min(1, "Name required"),
  email: z.email(),
  password: z.string().min(8, "Minimum password should be 8"),
});

export type SignUpValues = z.infer<typeof signUpSchema>;
