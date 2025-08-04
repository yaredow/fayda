"use client";

import { signInSchema, SignInValues } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";

export default function SignInForm() {
	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: zodResolver(signInSchema),
		mode: "onChange",
	});

	const onSubmit = async (values: SignInValues) => {
		console.log({ values });
	};

	return (
		<Card className="w-full max-w-[350px] mx-auto">
			<CardHeader>
				<CardTitle>Sign In</CardTitle>
				<CardDescription>Sign In to access your Fayda ID</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<div className="flex flex-col gap-4">
							<FormField
								name="email"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input {...field} placeholder="Email" type="email" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								name="password"
								control={form.control}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input {...field} placeholder="Email" type="password" />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button type="submit">Submit</Button>
						</div>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
