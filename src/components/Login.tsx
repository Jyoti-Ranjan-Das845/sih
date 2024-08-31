"use client";

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";  // Using ShadCN
import { Button } from "@/components/ui/button"; // Using ShadCN

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/user");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="text-gray-900" // Ensure input text is visible
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="text-gray-900" // Ensure input text is visible
        />
      </div>

      {error && <p className="text-red-500">{error}</p>} {/* Error text in red */}

      <Button
        type="submit"
        className="w-full bg-blue-600 text-white hover:bg-blue-700 hover:text-white"
      >
        Login
      </Button>
    </form>
  );
};

export default Login;
