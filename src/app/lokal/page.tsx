'use client'

import { Header } from '@/components/Header'
import { ReportForm } from '@/components/ReportForm'
import { CommentSection } from '@/components/CommentSection'
import { ChurchReport } from '@/lib/data'

export default function LokalPage() {
  const handleSubmit = (report: ChurchReport) => {
    console.log('New report submitted:', report)
    // In a real app, this would save to a database
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Header title="Admin Lokal" showHome />

      <div className="flex-1 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Page Header */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Form Relatóriu Finanseiru</h2>
            <p className="text-gray-600 mt-1">
              Hatama relatóriu finanseiru ba igreja ida ho detalla osan tama no gastu.
            </p>
          </div>

          {/* Report Form */}
          <ReportForm onSubmit={handleSubmit} />

          {/* Comment Section */}
          <CommentSection page="regional" />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">
            SIADTL - Sistema Informasaun Orsamentu Igreja Evangelika Asembleia de Deus Timor-Leste
          </p>
        </div>
      </footer>
    </main>
  )
}
