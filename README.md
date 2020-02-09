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