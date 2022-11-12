import os
from PyPDF2 import PdfReader
from pathlib import Path

def parse_pdf(path:str) -> str:
    text = ''
    reader = PdfReader(path)
    for page_num in range(2, len(reader.pages)):
        page = reader.pages[page_num]
        text += page.extract_text() + '\n'

    return text

