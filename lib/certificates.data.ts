export const certificates: Certificate[] =[
    {
        img: '/scrum.png',
        titulo: 'Scrum Fundamentals Certified',
        empresa: 'Scrum Study',
        fecha: 'February 2024',
    },
    {
        img: '/practicas.png',
        titulo: 'Practices Certificate',
        empresa: 'Invadion SAC',
        fecha: 'November 2023',
    },
    {
        img: '/impact.png',
        titulo: 'Impact Startup Competition',
        empresa: 'Scale Social Innovation Hub',
        fecha: 'January 2024',
    },{
        img: '/born.png',
        titulo: 'Innovation Challenge',
        empresa: 'PUCP, Equipu',
        fecha: 'June 2024',
    }
]

export interface Certificate {
    img: string
    titulo: string
    empresa: string
    fecha: string
}