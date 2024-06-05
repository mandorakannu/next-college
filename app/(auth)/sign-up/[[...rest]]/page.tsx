import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <SignUp signInUrl="/sign-in" />
    </section>
  );
};

export default SignUpPage;