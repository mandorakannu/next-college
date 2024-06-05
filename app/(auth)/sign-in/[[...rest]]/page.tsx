import { SignIn } from "@clerk/nextjs";

const LoginPage = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <SignIn signUpUrl="/sign-up" />
    </section>
  );
};

export default LoginPage;
