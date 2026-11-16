import AuthLayout, { AuthField, authLinkClass } from '../Auth/AuthLayout'

function Cadastro() {
  return (
    <AuthLayout title="Seu próximo passo começa aqui." description="Crie sua conta para salvar seus imóveis preferidos e encontrar seu novo endereço." submitLabel="Criar conta" footer={<>Já tem uma conta? <a href="/login" className={authLinkClass}>Entrar</a></>}>
      <AuthField label="Nome completo" name="name" autoComplete="name" placeholder="Como você se chama?" />
      <AuthField label="E-mail" name="email" type="email" autoComplete="email" placeholder="voce@exemplo.com" />
      <AuthField label="Senha" name="password" type="password" autoComplete="new-password" placeholder="Pelo menos 8 caracteres" minLength={8} />
    </AuthLayout>
  )
}

export default Cadastro
