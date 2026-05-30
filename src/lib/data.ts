// TypeScript Interface for Church Report
export interface ChurchReport {
  id: string
  churchName: string
  region: string
  month: string
  year: number

  // Dynamic revenue entries
  osanTama: OsanTamaEntry[]

  // Dynamic expense entries
  gastu: GastuEntry[]
}

// Dynamic revenue entry
export interface OsanTamaEntry {
  id: string
  deskrisaun: string
  montante: number
}

// Dynamic expense entry
export interface GastuEntry {
  id: string
  gastuBaSaida: string
  montante: number
}

// Comment interface
export interface Comment {
  id: string
  page: 'landing' | 'regional' | 'nasional'
  author: string
  content: string
  timestamp: Date
}

// Regions - Updated to only 4 regions
export const REGIONS = [
  'Baucau',
  'Lospalos',
  'Viqueque',
  'Manatuto',
] as const

export type Region = (typeof REGIONS)[number]

// Months in Tetum
export const MONTHS = [
  'Janeiru',
  'Fevereiru',
  'Marsu',
  'Abril',
  'Meiu',
  'Junhu',
  'Julhu',
  'Agostu',
  'Setembru',
  'Outubru',
  'Novembru',
  'Dezembru',
] as const

export type Month = (typeof MONTHS)[number]

// Generate unique ID
export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

// Calculate total revenue
export const calculateTotalRevenue = (report: Partial<ChurchReport>): number => {
  if (report.osanTama && report.osanTama.length > 0) {
    return report.osanTama.reduce((sum, entry) => sum + (entry.montante || 0), 0)
  }
  return 0
}

// Calculate total expenses
export const calculateTotalExpense = (report: Partial<ChurchReport>): number => {
  if (report.gastu && report.gastu.length > 0) {
    return report.gastu.reduce((sum, entry) => sum + (entry.montante || 0), 0)
  }
  return 0
}

// Calculate balance
export const calculateBalance = (report: Partial<ChurchReport>): number => {
  return calculateTotalRevenue(report) - calculateTotalExpense(report)
}

// Format number as USD
export const formatUSD = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

// Dummy data for 10 churches with dynamic entries
export const dummyReports: ChurchReport[] = [
  {
    id: 'report-001',
    churchName: 'Igreja Baucau Centro',
    region: 'Baucau',
    month: 'Junhu',
    year: 2024,
    osanTama: [
      { id: 'ot-1', deskrisaun: 'Persembahan Minggu', montante: 2500.0 },
      { id: 'ot-2', deskrisaun: 'Perpuluhan', montante: 3200.0 },
      { id: 'ot-3', deskrisaun: 'Donasaun Kaeruk', montante: 800.0 },
    ],
    gastu: [
      { id: 'g-1', gastuBaSaida: 'Lista Kirista', montante: 800.0 },
      { id: 'g-2', gastuBaSaida: 'Materia Construsaun', montante: 500.0 },
      { id: 'g-3', gastuBaSaida: 'Programa Juventude', montante: 400.0 },
    ],
  },
  {
    id: 'report-002',
    churchName: 'Igreja Lospalos',
    region: 'Lospalos',
    month: 'Junhu',
    year: 2024,
    osanTama: [
      { id: 'ot-4', deskrisaun: 'Persembahan Minggu', montante: 1800.0 },
      { id: 'ot-5', deskrisaun: 'Perpuluhan', montante: 2400.0 },
    ],
    gastu: [
      { id: 'g-4', gastuBaSaida: 'Operasional Gereja', montante: 900.0 },
      { id: 'g-5', gastuBaSaida: 'Reparasaun Tela', montante: 350.0 },
    ],
  },
  {
    id: 'report-003',
    churchName: 'Igreja Viqueque Centro',
    region: 'Viqueque',
    month: 'Junhu',
    year: 2024,
    osanTama: [
      { id: 'ot-6', deskrisaun: 'Persembahan', montante: 1200.0 },
      { id: 'ot-7', deskrisaun: 'Perpuluhan', montante: 1500.0 },
      { id: 'ot-8', deskrisaun: 'Donasaun Spesial', montante: 300.0 },
    ],
    gastu: [
      { id: 'g-6', gastuBaSaida: 'Gastu Listrik', montante: 250.0 },
      { id: 'g-7', gastuBaSaida: 'Buku Sekola Domingo', montante: 300.0 },
    ],
  },
  {
    id: 'report-004',
    churchName: 'Igreja Manatuto',
    region: 'Manatuto',
    month: 'Junhu',
    year: 2024,
    osanTama: [
      { id: 'ot-9', deskrisaun: 'Persembahan Minggu', montante: 1500.0 },
      { id: 'ot-10', deskrisaun: 'Perpuluhan', montante: 2000.0 },
    ],
    gastu: [
      { id: 'g-8', gastuBaSaida: 'Gastu Air', montante: 200.0 },
      { id: 'g-9', gastuBaSaida: 'Pemeliharaan Gedung', montante: 450.0 },
    ],
  },
  {
    id: 'report-005',
    churchName: 'Igreja Baucau Leste',
    region: 'Baucau',
    month: 'Meiu',
    year: 2024,
    osanTama: [
      { id: 'ot-11', deskrisaun: 'Persembahan', montante: 900.0 },
      { id: 'ot-12', deskrisaun: 'Perpuluhan', montante: 1100.0 },
    ],
    gastu: [
      { id: 'g-10', gastuBaSaida: 'Kontrak Pastor', montante: 500.0 },
    ],
  },
  {
    id: 'report-006',
    churchName: 'Igreja Lospalos Utara',
    region: 'Lospalos',
    month: 'Meiu',
    year: 2024,
    osanTama: [
      { id: 'ot-13', deskrisaun: 'Persembahan Minggu', montante: 1100.0 },
      { id: 'ot-14', deskrisaun: 'Donasaun', montante: 350.0 },
    ],
    gastu: [
      { id: 'g-11', gastuBaSaida: 'Gastu Operasional', montante: 600.0 },
      { id: 'g-12', gastuBaSaida: 'Alat Muzik', montante: 350.0 },
    ],
  },
  {
    id: 'report-007',
    churchName: 'Igreja Viqueque Sul',
    region: 'Viqueque',
    month: 'Meiu',
    year: 2024,
    osanTama: [
      { id: 'ot-15', deskrisaun: 'Persembahan', montante: 800.0 },
      { id: 'ot-16', deskrisaun: 'Perpuluhan', montante: 950.0 },
    ],
    gastu: [
      { id: 'g-13', gastuBaSaida: 'Programa Anak', montante: 180.0 },
      { id: 'g-14', gastuBaSaida: 'Gastu Transports', montante: 120.0 },
    ],
  },
  {
    id: 'report-008',
    churchName: 'Igreja Manatuto Timur',
    region: 'Manatuto',
    month: 'Meiu',
    year: 2024,
    osanTama: [
      { id: 'ot-17', deskrisaun: 'Persembahan Spesial', montante: 700.0 },
      { id: 'ot-18', deskrisaun: 'Perpuluhan', montante: 850.0 },
    ],
    gastu: [
      { id: 'g-15', gastuBaSaida: 'Gastu Listrik', montante: 180.0 },
      { id: 'g-16', gastuBaSaida: 'Kontrak Penjaga', montante: 200.0 },
    ],
  },
  {
    id: 'report-009',
    churchName: 'Igreja Baucau Oeste',
    region: 'Baucau',
    month: 'Abril',
    year: 2024,
    osanTama: [
      { id: 'ot-19', deskrisaun: 'Persembahan Paskah', montante: 1600.0 },
      { id: 'ot-20', deskrisaun: 'Perpuluhan', montante: 750.0 },
    ],
    gastu: [
      { id: 'g-17', gastuBaSaida: 'Dekorasi Paskah', montante: 320.0 },
      { id: 'g-18', gastuBaSaida: 'Gastu Makan', montante: 280.0 },
    ],
  },
  {
    id: 'report-010',
    churchName: 'Igreja Lospalos Selatan',
    region: 'Lospalos',
    month: 'Abril',
    year: 2024,
    osanTama: [
      { id: 'ot-21', deskrisaun: 'Persembahan', montante: 650.0 },
      { id: 'ot-22', deskrisaun: 'Donasaun Anggota', montante: 400.0 },
    ],
    gastu: [
      { id: 'g-19', gastuBaSaida: 'Gastu Umum', montante: 350.0 },
      { id: 'g-20', gastuBaSaida: 'Sosialisasi', montante: 150.0 },
    ],
  },
]

// Comments storage (simulated)
export let comments: Comment[] = [
  {
    id: 'comment-1',
    page: 'landing',
    author: 'Pastor João',
    content: "Sistema ida ne'e diak tebes! Obrigadu.",
    timestamp: new Date('2024-06-15T10:30:00'),
  },
  {
    id: 'comment-2',
    page: 'nasional',
    author: 'Admin Geral',
    content: 'Relatóriu husi Baucau tama ona. Diak!',
    timestamp: new Date('2024-06-16T14:20:00'),
  },
]

// Add comment function
export const addComment = (page: Comment['page'], author: string, content: string): Comment => {
  const newComment: Comment = {
    id: generateId(),
    page,
    author,
    content,
    timestamp: new Date(),
  }
  comments = [...comments, newComment]
  return newComment
}

// Get comments by page
export const getCommentsByPage = (page: Comment['page']): Comment[] => {
  return comments.filter((c) => c.page === page).sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
}

// Calculate national summary
export const calculateNationalSummary = (reports: ChurchReport[]) => {
  const totalRevenue = reports.reduce((sum, r) => sum + calculateTotalRevenue(r), 0)
  const totalExpense = reports.reduce((sum, r) => sum + calculateTotalExpense(r), 0)
  const balance = totalRevenue - totalExpense

  return {
    totalChurches: reports.length,
    totalRevenue,
    totalExpense,
    balance,
  }
}

// Get revenue by region for pie chart
export const getRevenueByRegion = (reports: ChurchReport[]) => {
  const regionMap = new Map<string, number>()

  reports.forEach((report) => {
    const revenue = calculateTotalRevenue(report)
    const current = regionMap.get(report.region) || 0
    regionMap.set(report.region, current + revenue)
  })

  return Array.from(regionMap.entries()).map(([name, value]) => ({
    name,
    value,
  }))
}

// Get chart data for reports
export const getChartData = (reports: ChurchReport[]) => {
  return reports.map((report) => ({
    name: report.churchName.replace('Igreja ', ''),
    revenue: calculateTotalRevenue(report),
    expense: calculateTotalExpense(report),
  }))
}

// Format date for comments
export const formatDateTime = (date: Date): string => {
  return new Intl.DateTimeFormat('pt-TL', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}
