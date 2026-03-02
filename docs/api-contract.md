# API Contract

## POST /calculate

Request Body:
{
  "num1": number,
  "num2": number,
  "operation": "add" | "subtract" | "multiply" | "divide"
}

Response:
{
  "result": number
}