import { signIn } from "@/lib/auth";

export default function Home() {
  return (
    <main>
      <form
        action={async (formData) => {
          "use server";
          await signIn();
        }}
      >
        <button type="submit">Signin with Resend</button>
      </form>
    </main>
  );
}
