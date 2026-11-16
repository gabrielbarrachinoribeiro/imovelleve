export const emptyFilters = {
  finalidade: '', localizacao: '', tipo: '', precoMin: '', precoMax: '',
  quartos: '', banheiros: '', vagas: '', areaMin: '', areaMax: '', ordem: 'relevantes',
}

export function readFilters() {
  const params = new URLSearchParams(window.location.search)
  const result = { ...emptyFilters }
  for (const key of Object.keys(result)) {
    if (params.has(key)) result[key] = params.get(key)
  }
  if (!params.has('finalidade')) {
    if (window.location.pathname === '/comprar') result.finalidade = 'comprar'
    if (window.location.pathname === '/alugar') result.finalidade = 'alugar'
  }
  return result
}

const normalize = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim()

export function filterProperties(properties, filters) {
  const result = properties.filter((property) => (
    (!filters.finalidade || (filters.finalidade === 'alugar' ? property.rent : !property.rent)) &&
    (!filters.localizacao || normalize(`${property.location} ${property.name}`).includes(normalize(filters.localizacao))) &&
    (!filters.tipo || normalize(property.type) === filters.tipo) &&
    (!filters.precoMin || property.price >= Number(filters.precoMin)) &&
    (!filters.precoMax || property.price <= Number(filters.precoMax)) &&
    (!filters.quartos || property.bedrooms >= Number(filters.quartos)) &&
    (!filters.banheiros || property.bathrooms >= Number(filters.banheiros)) &&
    (!filters.vagas || property.parking >= Number(filters.vagas)) &&
    (!filters.areaMin || property.area >= Number(filters.areaMin)) &&
    (!filters.areaMax || property.area <= Number(filters.areaMax))
  ))
  switch (filters.ordem) {
    case 'menor-preco': return result.sort((a, b) => a.price - b.price)
    case 'maior-preco': return result.sort((a, b) => b.price - a.price)
    case 'maior-area': return result.sort((a, b) => b.area - a.area)
    case 'recentes': return result // The demo dataset is ordered from newest to oldest.
    default: return result.sort((a, b) => Number(Boolean(a.rent)) - Number(Boolean(b.rent)))
  }
}
