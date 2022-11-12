from transformers import AutoModelForQuestionAnswering, AutoTokenizer, pipeline
from typing import Dict
_MODEL_NAME = "deepset/roberta-base-squad2"

# a) Get predictions
nlp = pipeline('question-answering', model=_MODEL_NAME, tokenizer=_MODEL_NAME)

def read_text(path: str = 'database/text/text.txt'):
    with open(path, 'r') as file:
        text = file.read().rstrip()

    return text

def get_answer( question: str):

    context = read_text()

    QA_input = {
    'question': question,
    'context': context
    }

    return nlp(QA_input)