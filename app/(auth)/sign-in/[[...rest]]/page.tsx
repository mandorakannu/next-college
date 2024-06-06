import { SignIn } from "@clerk/nextjs";

const LoginPage = () => {
  return <SignIn signUpUrl="/sign-up" />;
};

export default LoginPage;
