from fastapi import FastAPI, Request
from pydantic import BaseModel
from langchain_huggingface import HuggingFaceEndpoint
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

HF_TOKEN = os.getenv("HF_TOKEN")

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a supportive mental health assistant. Provide three separate, individual tips on the given topic. Write each tip on a new line, without any paragraphs. Make sure each tip is brief and to the point."),
    ("user", "topic: {topic}")
])

llm = HuggingFaceEndpoint(
    endpoint_url="https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta",
    huggingfacehub_api_token=HF_TOKEN
)

output_parser = StrOutputParser()
chain = prompt | llm | output_parser

class TopicRequest(BaseModel):
    topic: str

@app.post("/get_tips")
async def get_tips(req: TopicRequest):
    response = chain.invoke({"topic": req.topic})
    return {"tips": response.strip()}
