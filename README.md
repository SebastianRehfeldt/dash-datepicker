# dash-datepicker

```bash
# Create and exec into docker image
docker-compose up
docker exec -it dash-datepicker bash

# From within the docker image run (only once when starting the project)
cookiecutter https://github.com/plotly/dash-component-boilerplate.git

# From within docker
cd dash_datetimepicker

# Start python example app
. venv/bin/activate
python usage.py

# Start react app
npm start

# Build react component before running usage.py
npm run build
```

# Test/publish created package

```bash
# within dash_datetimepicker
npm run build
python setup.py sdist

# within root folder
virtualenv venv
. venv/bin/activate
pip install dash
pip install dash_datetimepicker/dist/dash_datetimepicker-0.0.1.tar.gz
python dash_datetimepicker/usage.py

# publish within root folder
deactivate
# eventually create pypi account
twine upload --repository-url https://test.pypi.org/legacy/ dash_datetimepicker/dist/* # test
twine upload dist/*

cd dash_datetimepicker
rm -rf dist
# eventually authenticate at npm
npm login
npm publish
cd ..

pip install dash
pip install dash_datetimepicker
python dash_datetimepicker/usage.py
```
