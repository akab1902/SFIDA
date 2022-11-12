from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from collections import Counter
import os
from pathlib import Path
import datetime
import string
import re


DATABASE_DIRECTORY = Path(os.getcwd()) / "database"
UPLOAD_DIRECTORY = DATABASE_DIRECTORY / "upload_files"
GENERATE_DIRECTORY = DATABASE_DIRECTORY / "generate_files"
CORPUS_DIRECTORY = DATABASE_DIRECTORY / "corpus"


def remove_punct(text):
    table=str.maketrans('','',string.punctuation)
    return text.translate(table)


def remove_html(text):
    html=re.compile(r'<.*?>')
    return html.sub(r'',text)


def nlp_model(text):
    e_path = CORPUS_DIRECTORY / 'environment_words.txt'
    g_path = CORPUS_DIRECTORY / 'governance_words.txt'
    s_path = CORPUS_DIRECTORY / 'social_words.txt'

    e_words, g_words, s_words = [], [], []
    with open(e_path) as f:
        Lines = f.readlines()
        for line in Lines:
            e_words.append(line.strip())
    with open(g_path) as f:
        Lines = f.readlines()
        for line in Lines:
            g_words.append(line.strip())
    with open(s_path) as f:
        Lines = f.readlines()
        for line in Lines:
            s_words.append(line.strip())

    e_counts = Counter()
    g_counts = Counter()
    s_counts = Counter()
    text = remove_html(text)
    text = remove_punct(text)

    text_words = text.lower().split()
    for word in text_words:
        if word in e_words:
            e_counts[word] += 1
        if word in g_words:
            g_counts[word] += 1
        if word in s_words:
            s_counts[word] += 1

    e_total = sum(e_counts.values())
    g_total = sum(g_counts.values())
    s_total = sum(s_counts.values())
    total_word_num = len(text_words)
    e_ratio = e_total / len(e_words)
    g_ratio = g_total / len(g_words)
    s_ratio = s_total / len(s_words)

    e_score = min(round(e_ratio * 40), 95)
    g_score = min(round(g_ratio * 9), 95)
    s_score = min(round(s_ratio * 10), 90)
    ave_score = round((e_score + g_score + s_score) / 3)

    return {'E': e_score, 'G': g_score, 'S': s_score, 'ESG': ave_score}





