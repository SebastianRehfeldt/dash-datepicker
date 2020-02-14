FROM nikolaik/python-nodejs:latest
COPY requirements.txt ./
RUN npm set unsafe-perm true
RUN pip install --no-cache-dir -r requirements.txt