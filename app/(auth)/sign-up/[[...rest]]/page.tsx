import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <section className="flex justify-center items-center h-screen scale-[80%]">
      <SignUp signInUrl="/sign-in" />
    </section>
  );
};

export default SignUpPage;