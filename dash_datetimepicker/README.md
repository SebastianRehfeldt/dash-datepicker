# dash-datepicker

This is a dash datetime range picker based on [react-datetime](https://github.com/YouCanBookMe/react-datetime).
In contrast to the dash datepicker from dash-core-components, it is also possible to specify hours and minutes on a certain day.

# Development

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
pip install -r requirements.txt
python usage.py

# Start react app
npm start

# Build datepicker
npm run build
```

# Test/publish created package

```bash
# Test fresh build
deactivate
python setup.py sdist
pip install dist/dash_datetimepicker-0.0.6.tar.gz
python usage.py

# eventually create pypi account
twine check dist/*
twine upload dist/*

rm -rf dist
# eventually authenticate at npm
npm login
npm publish

# check published module
pip install dash_datetimepicker
python dash_datetimepicker/usage.py
```
