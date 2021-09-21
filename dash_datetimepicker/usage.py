import dash_datetimepicker
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div(
    [dash_datetimepicker.DashDatetimepicker(id="input", utc=True, locale="fr"), html.Div(id="output")]
)


@app.callback(Output("output", "children"), [Input("input", "startDate"), Input("input", "endDate")])
def display_output(startDate, endDate):
    return "You have entered range from {} to {}".format(startDate, endDate)


if __name__ == "__main__":
    app.run_server(debug=True, host="0.0.0.0")
