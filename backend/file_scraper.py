import os
from pdf2emb_nlp.scraper import DocumentScraper
from pdf2emb_nlp.arrange_text import CorpusGenerator
from PyPDF2 import PdfFileReader
import esg_predictor
from pathlib import Path

DATABASE_DIRECTORY = Path(os.getcwd()) / "database"
UPLOAD_DIRECTORY = DATABASE_DIRECTORY / "upload_files"
GENERATE_DIRECTORY = DATABASE_DIRECTORY / "generate_files"
CORPUS_DIRECTORY = DATABASE_DIRECTORY / "corpus"
neg_words = ['coal', 'oil', 'waste', 'metal']

def get_esg_score(path, filetype='pdf'):
    text = scrape_file(path, filetype)
    score_json = esg_predictor.nlp_model(text)
    return score_json


def scrape_file(path, filetype):
    if filetype == 'pdf':
        text = scrape_pdf(path)
    elif filetype == 'txt':
        with open(path) as f:
            text = f.read()
    else:
        text = "empty"
    return text


def scrape_pdf(path):
    path = Path(path)
    file_name = path.name
    txt_name = '.'.join(file_name.split('.')[:-1]) + '.txt'
    txt_path = GENERATE_DIRECTORY / txt_name
    if os.path.exists(txt_path):
        with open(txt_path) as f:
            text = f.read()
    else:
        scraper = DocumentScraper(path)
        df_by_page = scraper.document_corpus_to_pandas_df()
        generator = CorpusGenerator(df_by_page)
        text = generator.df_by_page_to_df_by_sentence()

    return text



if __name__ == '__main__':
    pdfs_folder = UPLOAD_DIRECTORY

    path = UPLOAD_DIRECTORY / '2019-Annual-Report.pdf'
    scraper = DocumentScraper(path)
    df_by_page = scraper.document_corpus_to_pandas_df()
    generator = CorpusGenerator(df_by_page)
    text = generator.df_by_page_to_df_by_sentence()

    score = get_esg_score(path)
    print(score)
