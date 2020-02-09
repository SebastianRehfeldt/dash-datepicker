# dash-datepicker

```bash
# Create and exec into docker image
docker-compose up
docker exec -it dash-datepicker bash

# From within the docker image run (only once when starting the project)
cookiecutter https://github.com/plotly/dash-component-boilerplate.git

# From within docker
cd dash_datetimepicker
. venv/bin/activate
python usage.py
```