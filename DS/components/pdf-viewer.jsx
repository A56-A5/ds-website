"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, ZoomIn, ZoomOut, RotateCw, ChevronLeft, ChevronRight } from "lucide-react"

export function PdfViewer({ pdfUrl, title }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [zoom, setZoom] = useState(100)
  const [rotation, setRotation] = useState(0)

  const handleZoomIn = () => {
    if (zoom < 200) setZoom(zoom + 25)
  }

  const handleZoomOut = () => {
    if (zoom > 50) setZoom(zoom - 25)
  }

  const handleRotate = () => {
    setRotation((rotation + 90) % 360)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    // This would need to check against total pages in a real implementation
    setCurrentPage(currentPage + 1)
  }

  return (
    <div className="flex flex-col h-full">
      {/* PDF Viewer Controls */}
      <div className="bg-slate-100 p-4 border-b flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center">
          <h3 className="font-medium text-slate-800 mr-4">{title}</h3>
          <span className="text-sm text-slate-600">Page {currentPage}</span>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={handleZoomOut}>
            <ZoomOut className="h-4 w-4" />
          </Button>
          <span className="text-sm text-slate-600 w-16 text-center">{zoom}%</span>
          <Button variant="outline" size="sm" onClick={handleZoomIn}>
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={handleRotate}>
            <RotateCw className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={handlePrevPage}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={handleNextPage}>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="default" size="sm" className="bg-cyan-600 hover:bg-cyan-700">
            <Download className="h-4 w-4 mr-1" />
            Download
          </Button>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="flex-grow bg-slate-200 p-4 overflow-auto">
        <div
          className="bg-white mx-auto shadow-lg transition-all duration-200 overflow-hidden"
          style={{
            width: `${zoom}%`,
            maxWidth: "1000px",
            transform: `rotate(${rotation}deg)`,
            height: "1200px", // This would be dynamic based on the PDF in a real implementation
          }}
        >
          <iframe src={`${pdfUrl}#view=FitH&toolbar=0&navpanes=0`} className="w-full h-full" title={title} />
        </div>
      </div>
    </div>
  )
}
