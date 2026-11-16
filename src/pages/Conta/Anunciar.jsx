import { useState } from 'react'
import { ArrowRight, ImagePlus } from 'lucide-react'
import { properties } from '../../data/properties'
import ContaLayout, { DemoNotice, Field, inputClass, panelClass, primaryButton, secondaryButton } from './ContaLayout'

function Anunciar() {
  const editingId = new URLSearchParams(window.location.search).get('editar')
  const property = properties.find((item) => item.id === editingId)
  const [files, setFiles] = useState([])
  const [submitted, setSubmitted] = useState(false)
  return (
    <ContaLayout title={property ? 'Editar anúncio' : 'Um novo começo para seu imóvel.'} description="Conte um pouco sobre o espaço. Os detalhes certos ajudam alguém a se imaginar morando nele.">
      <form className="space-y-6" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
        <section className={panelClass} aria-labelledby="imovel-dados"><h2 id="imovel-dados" className="mb-6 text-lg font-semibold">01. Sobre o imóvel</h2><div className="space-y-5">
          <Field label="Título do anúncio" name="title" defaultValue={property?.name} placeholder="Ex.: Apartamento iluminado em Moema" required />
          <div className="grid gap-5 sm:grid-cols-2"><Field label="Finalidade"><select name="purpose" defaultValue={property?.rent ? 'alugar' : 'comprar'} className={inputClass}><option value="comprar">Venda</option><option value="alugar">Aluguel</option></select></Field><Field label="Tipo de imóvel"><select name="type" defaultValue={property?.type || 'Apartamento'} className={inputClass}>{['Apartamento', 'Casa', 'Cobertura', 'Studio'].map((type) => <option key={type}>{type}</option>)}</select></Field></div>
          <Field label="Cidade e bairro" name="location" defaultValue={property?.location} placeholder="Ex.: Moema, São Paulo" required />
          <Field label="Descrição"><textarea name="description" rows={4} placeholder="O que torna esse espaço especial?" className={`${inputClass} resize-y`} /></Field>
        </div></section>
        <section className={panelClass} aria-labelledby="imovel-detalhes"><h2 id="imovel-detalhes" className="mb-6 text-lg font-semibold">02. Detalhes e valores</h2><div className="grid gap-5 sm:grid-cols-2">
          <Field label="Preço (R$)" name="price" type="number" min="1" defaultValue={property?.price} placeholder="780000" required />
          <Field label="Área (m²)" name="area" type="number" min="1" defaultValue={property?.area} placeholder="120" required />
          <Field label="Quartos" name="bedrooms" type="number" min="0" defaultValue={property?.bedrooms} placeholder="3" />
          <Field label="Banheiros" name="bathrooms" type="number" min="0" defaultValue={property?.bathrooms} placeholder="2" />
          <Field label="Vagas de garagem" name="parking" type="number" min="0" defaultValue={property?.parking} placeholder="1" />
          <Field label="Condomínio (R$/mês)" name="condominium" type="number" min="0" placeholder="Opcional" />
        </div></section>
        <section className={panelClass} aria-labelledby="imovel-fotos"><h2 id="imovel-fotos" className="text-lg font-semibold">03. Fotos do espaço</h2><p className="mt-2 text-sm text-[#0A0D12]/55">Luz natural e bons ângulos fazem toda a diferença.</p>
          <label className="mt-5 flex cursor-pointer flex-col items-center gap-3 rounded-2xl border border-dashed border-[#FA5700]/40 bg-[#FFF9F5] px-5 py-9 text-center text-sm transition-colors duration-300 hover:bg-[#FFF0E7] focus-within:outline-2 focus-within:outline-[#FA5700]"><ImagePlus size={28} className="text-[#FA5700]" aria-hidden="true" /><span className="font-semibold">Selecionar fotos</span><span className="text-xs text-[#0A0D12]/45">JPG, PNG ou WebP · prévia demonstrativa, sem envio</span><input type="file" accept="image/jpeg,image/png,image/webp" multiple className="sr-only" onChange={(event) => setFiles(Array.from(event.target.files).map((file) => file.name))} /></label>
          {files.length > 0 && <ul className="mt-4 space-y-1 text-xs text-[#0A0D12]/60">{files.map((file, index) => <li key={`${file}-${index}`} className="break-all">{file}</li>)}</ul>}
        </section>
        {submitted && <DemoNotice>Seu anúncio foi preenchido nesta demonstração. Nenhum dado ou imagem foi enviado, salvo ou publicado.</DemoNotice>}
        <div className="flex flex-wrap items-center justify-end gap-3"><a href="/meus-anuncios" className={secondaryButton}>Cancelar</a><button type="submit" className={primaryButton}>{property ? 'Salvar alterações' : 'Concluir anúncio'}<ArrowRight size={18} aria-hidden="true" /></button></div>
      </form>
    </ContaLayout>
  )
}

export default Anunciar
