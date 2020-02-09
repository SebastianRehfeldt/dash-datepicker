FROM nikolaik/python-nodejs:latest
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt