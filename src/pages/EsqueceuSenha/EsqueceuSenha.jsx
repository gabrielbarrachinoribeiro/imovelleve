import AuthLayout, { AuthField, authLinkClass } from '../Auth/AuthLayout'

function EsqueceuSenha() {
  return (
    <AuthLayout title="Esqueceu sua senha?" description="Informe seu e-mail para solicitar as instruções de recuperação de acesso." submitLabel="Recuperar senha" footer={<>Lembrou sua senha? <a href="/login" className={authLinkClass}>Voltar para entrar</a></>}>
      <AuthField label="E-mail" name="email" type="email" autoComplete="email" placeholder="voce@exemplo.com" />
    </AuthLayout>
  )
}

export default EsqueceuSenha
