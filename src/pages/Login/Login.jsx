import AuthLayout, { AuthField, authLinkClass } from '../Auth/AuthLayout'

function Login() {
  return (
    <AuthLayout title="Que bom ter você aqui." description="Entre na sua conta e continue a busca pelo seu próximo lar." submitLabel="Entrar" footer={<>Ainda não tem uma conta? <a href="/cadastro" className={authLinkClass}>Cadastre-se</a></>}>
      <AuthField label="E-mail" name="email" type="email" autoComplete="email" placeholder="voce@exemplo.com" />
      <AuthField label="Senha" name="password" type="password" autoComplete="current-password" placeholder="Digite sua senha" />
      <a href="/esqueceu-senha" className={`${authLinkClass} self-end text-sm`}>Esqueceu sua senha?</a>
    </AuthLayout>
  )
}

export default Login
