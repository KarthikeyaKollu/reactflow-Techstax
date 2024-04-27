import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export  function Auth() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}