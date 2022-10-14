import { Checkbox } from "@radix-ui/react-checkbox";
import { FormEvent, useState } from "react";
import axios from "axios";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { Logo } from "../Logo";

import { Envelope, Lock } from "phosphor-react";

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await axios.post("/sessions", {
      email: "diego@rocketseat.com.br",
      password: "12345678",
    });

    setIsUserSignedIn(true);
  }
  return (
    <div className='w-screnn h-screen bg-gray-900 flex items-center justify-center text-gray-100 flex-col'>
      <header className='flex flex-col items-center'>
        <Logo />

        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>
        <Text size='lg' className='text-gray-400 mt-1'>
          Faça login e comece a usar!
        </Text>
      </header>

      <form
        onSubmit={handleSignIn}
        className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-4'
      >
        {isUserSignedIn && <Text>Login realizado!</Text>}

        <label htmlFor='email ' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id='email'
              type='email'
              placeholder='Digite seu e-mail'
            />
          </TextInput.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-3'>
          <Text className='font-semibold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              id='password'
              type='password'
              placeholder='***********'
            />
          </TextInput.Root>
        </label>

        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text size='sm' className='text-gray-200'>
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type='submit' className='mt-4'>
          Entrar
        </Button>

        <footer className='flex flex-col items-center gap-4 mt-8'>
          <Text size='sm' asChild>
            <a href='#' className='text-gray-400 underline hover:text-gray-200'>
              ESqueceu sua senha
            </a>
          </Text>
          <Text size='sm' asChild>
            <a href='#' className='text-gray-400 underline hover:text-gray-200'>
              Não possui conta? Crie uma agora!
            </a>
          </Text>
        </footer>
      </form>
    </div>
  );
}