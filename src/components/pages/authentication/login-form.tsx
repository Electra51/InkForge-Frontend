// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { Eye, EyeOff, Loader2 } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { toast } from "sonner";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Field,
//   FieldDescription,
//   FieldError,
//   FieldGroup,
//   FieldLabel,
//   FieldSeparator,
// } from "@/components/ui/field";
// import { Input } from "@/components/ui/input";
// import { authClient } from "@/lib/auth-client";
// import { cn } from "@/lib/utils";
// import { loginSchema, type LoginValues } from "@/lib/validations/auth";

// function GoogleIcon({ className }: { className?: string }) {
//   return (
//     <svg viewBox="0 0 24 24" className={className} aria-hidden>
//       <path
//         d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
//         fill="currentColor"
//       />
//     </svg>
//   );
// }

// export function LoginForm({
//   className,
//   ...props
// }: React.ComponentProps<"div">) {
//   const router = useRouter();
//   const [loading, setLoading] = useState(false);
//   const [googleLoading, setGoogleLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginValues>({
//     resolver: zodResolver(loginSchema),
//     defaultValues: { email: "", password: "" },
//   });

//   async function onSubmit(values: LoginValues) {
//     setLoading(true);
//     const { error } = await authClient.signIn.email({
//       email: values.email,
//       password: values.password,
//     });
//     setLoading(false);

//     if (error) {
//       toast.error(error.message ?? "Invalid email or password");
//       return;
//     }

//     toast.success("Welcome back!");
//     router.push("/");
//     router.refresh();
//   }

//   async function onGoogle() {
//     setGoogleLoading(true);
//     const { error } = await authClient.signIn.social({
//       provider: "google",
//       callbackURL: "/",
//     });
//     if (error) {
//       setGoogleLoading(false);
//       toast.error(error.message ?? "Could not login with Google");
//     }
//   }

//   return (
//     <div className={cn("flex flex-col gap-6", className)} {...props}>
//       <Card className="border shadow-sm">
//         <CardHeader className="text-center">
//           <CardTitle className="text-2xl font-bold tracking-tight">
//             Welcome back
//           </CardTitle>
//           <CardDescription>
//             Login to continue writing on Inkforge
//           </CardDescription>
//         </CardHeader>

//         <CardContent>
//           <form onSubmit={handleSubmit(onSubmit)} noValidate>
//             <FieldGroup>
//               <Field data-invalid={!!errors.email}>
//                 <FieldLabel htmlFor="email">Email</FieldLabel>
//                 <Input
//                   id="email"
//                   type="email"
//                   autoComplete="email"
//                   placeholder="you@example.com"
//                   aria-invalid={!!errors.email}
//                   {...register("email")}
//                 />
//                 {errors.email && (
//                   <FieldError>{errors.email.message}</FieldError>
//                 )}
//               </Field>

//               <Field data-invalid={!!errors.password}>
//                 <div className="flex items-center">
//                   <FieldLabel htmlFor="password">Password</FieldLabel>
//                   <Link
//                     href="/forgot-password"
//                     className="ml-auto inline-block text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
//                   >
//                     Forgot password?
//                   </Link>
//                 </div>
//                 <div className="relative">
//                   <Input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     autoComplete="current-password"
//                     placeholder="••••••••"
//                     className="pr-10"
//                     aria-invalid={!!errors.password}
//                     {...register("password")}
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword((v) => !v)}
//                     aria-label={
//                       showPassword ? "Hide password" : "Show password"
//                     }
//                     className="absolute inset-y-0 right-0 flex w-10 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
//                   >
//                     {showPassword ? (
//                       <EyeOff className="h-4 w-4" />
//                     ) : (
//                       <Eye className="h-4 w-4" />
//                     )}
//                   </button>
//                 </div>
//                 {errors.password && (
//                   <FieldError>{errors.password.message}</FieldError>
//                 )}
//               </Field>

//               <Field>
//                 <Button type="submit" disabled={loading || googleLoading}>
//                   {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
//                   Login
//                 </Button>
//               </Field>

//               <FieldSeparator>Or continue with</FieldSeparator>

//               <Field>
//                 <Button
//                   variant="outline"
//                   type="button"
//                   onClick={onGoogle}
//                   disabled={loading || googleLoading}
//                 >
//                   {googleLoading ? (
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   ) : (
//                     <GoogleIcon className="mr-2 h-4 w-4" />
//                   )}
//                   Login with Google
//                 </Button>
//                 <FieldDescription className="text-center">
//                   Don&apos;t have an account?{" "}
//                   <Link
//                     href="/register"
//                     className="font-medium text-primary underline-offset-4 hover:underline"
//                   >
//                     Sign up
//                   </Link>
//                 </FieldDescription>
//               </Field>
//             </FieldGroup>
//           </form>
//         </CardContent>
//       </Card>

//       <FieldDescription className="px-6 text-center">
//         By continuing, you agree to our{" "}
//         <Link href="/terms">Terms of Service</Link> and{" "}
//         <Link href="/privacy">Privacy Policy</Link>.
//       </FieldDescription>
//     </div>
//   );
// }

"use client";

import { Eye, EyeOff, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // TODO: tomar login logic ekhane boshao
    console.log({ email, password });

    setLoading(false);
  }

  function handleGoogle() {
    // TODO: Google login logic
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="border shadow-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold tracking-tight">
            Welcome back
          </CardTitle>
          <CardDescription>
            Login to continue writing on Inkforge
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Field>

              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    className="pr-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength={8}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute inset-y-0 right-0 flex w-10 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </Field>

              <Field>
                <Button type="submit" disabled={loading}>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Login
                </Button>
              </Field>

              <FieldSeparator>Or continue with</FieldSeparator>

              <Field>
                <Button variant="outline" type="button" onClick={handleGoogle}>
                  <GoogleIcon className="mr-2 h-4 w-4" />
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account?{" "}
                  <Link
                    href="/register"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Sign up
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      <FieldDescription className="px-6 text-center">
        By continuing, you agree to our{" "}
        <Link href="/terms">Terms of Service</Link> and{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  );
}
