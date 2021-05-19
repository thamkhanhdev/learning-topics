import PyPDF2
import sys

inputs = sys.argv[1:]


def pdf_merging(pdf_lists):
    merger = PyPDF2.PdfFileMerger()
    for pdf in pdf_lists:
        print(pdf)
        merger.append(f'./pdf/{pdf}')
    merger.write('./pdf/supper.pdf')


pdf_merging(inputs)
