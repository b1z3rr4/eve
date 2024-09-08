export type Labelly = {
    label: string
}

export enum EventType {
    PRESENCIAL = 'presencial',
    ONLINE = 'online'
}

export type Event = {
    cep: string
    descricao: string
    dia: string
    foto: string
    hora: string
    id: number
    nome: string
    pessoaReferencia: string
    tipo: EventType
    vagas: number
    valor: number
}