First Step -
  Create a Virtual Environment: python -m venv venv
Second Step-
  Activate the Virtual Environment:.\venv\Scripts\activate
Third Step-
  Add the two file thar mention above in one folder in your compuert
Fouth Step-
 Open that folder in Vs code and open the terminal
Fith Step-
  Install Dependencies from requirements.txt - Run this commond in therminal -pip install -r requirements.txt
Sixth Step-
 add.env file in your folder
Seventh Step:-
  To run the server (api_server.py)
  uvicorn api_server:app --host 0.0.0.0 --port 8000 --reload
