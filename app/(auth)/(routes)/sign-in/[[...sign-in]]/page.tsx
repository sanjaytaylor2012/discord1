import { SignIn } from "@clerk/nextjs";

import React from "react";

type pageProps = {};

const SignInPage: React.FC<pageProps> = () => {
  return <SignIn />;
};
export default SignInPage;
