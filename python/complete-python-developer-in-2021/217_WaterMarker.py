import PyPDF2
import sys


template = PyPDF2.PdfFileReader(open('./pdf/supper.pdf', 'rb'))
watermark = PyPDF2.PdfFileReader(open('./pdf/wtr.pdf', 'rb'))
output = PyPDF2.PdfFileWriter()

for i in range(template.getNumPages()):
    page  = template.getPage(i)
    page.mergePage(watermark.getPage(0))
    output.addPage(page)

with open('./pdf/watermarked_output.pdf', 'wb') as file:
    output.write(file)