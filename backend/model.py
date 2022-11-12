from transformers import AutoModelForQuestionAnswering, AutoTokenizer, pipeline
from typing import Dict
_MODEL_NAME = "deepset/roberta-base-squad2"

# a) Get predictions
nlp = pipeline('question-answering', model=_MODEL_NAME, tokenizer=_MODEL_NAME)

def get_answer(context: str, question: str) -> Dict[str:str]:

    QA_input = {
    'question': question,
    'context': context
    }
    return nlp(QA_input)