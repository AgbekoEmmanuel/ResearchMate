import React, { useState, useEffect } from 'react';
import { Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const ServiceAgreement: React.FC = () => {
    const pdfUrl = "/logos/RESEARCHMATE_SERVICE_AGREEMENT.pdf";
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [pageWidth, setPageWidth] = useState<number>(800);

    useEffect(() => {
        function handleResize() {
            setPageWidth(Math.min(window.innerWidth - 64, 800));
        }

        handleResize(); // Set initial width
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    const changePage = (offset: number) => {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    };

    const previousPage = () => changePage(-1);
    const nextPage = () => changePage(1);

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="p-6 md:p-8 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Service Agreement</h1>
                            <p className="text-gray-500 mt-1">Please review our terms of service before proceeding.</p>
                        </div>
                        <a
                            href={pdfUrl}
                            download="ResearchMate_Service_Agreement.pdf"
                            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm"
                        >
                            <Download size={18} />
                            Download PDF
                        </a>
                    </div>

                    <div className="bg-gray-100 p-8 flex flex-col items-center min-h-[600px] overflow-y-auto">
                        <Document
                            file={pdfUrl}
                            onLoadSuccess={onDocumentLoadSuccess}
                            className="flex flex-col gap-4"
                            loading={
                                <div className="flex items-center justify-center p-12">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600"></div>
                                </div>
                            }
                            error={
                                <div className="text-center p-8 text-red-600">
                                    <p>Failed to load PDF.</p>
                                    <a href={pdfUrl} download className="underline mt-2 inline-block">Download manually</a>
                                </div>
                            }
                        >
                            {numPages && Array.from(new Array(numPages), (el, index) => (
                                <div key={`page_${index + 1}`} className="flex justify-center w-full my-4">
                                    <Page
                                        pageNumber={index + 1}
                                        className="max-w-full shadow-lg"
                                        width={pageWidth}
                                        renderTextLayer={true}
                                        renderAnnotationLayer={true}
                                    />
                                </div>
                            ))}
                        </Document>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceAgreement;
