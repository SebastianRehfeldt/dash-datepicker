from datetime import datetime, timedelta
import dash_datetimepicker
import dash
from dash.dependencies import Input, Output
from dash import html

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        html.Div(
            [
                html.H1("Range Picker"),
                dash_datetimepicker.DashDatetimepicker(
                    id="input-range",
                    utc=True,
                    locale="fr",
                ),
                html.Div(id="output-range"),
            ]
        ),
        html.Div(
            [
                html.H1("Single Picker"),
                dash_datetimepicker.DashDatetimepickerSingle(
                    id="input-single",
                    date=datetime.utcnow() - timedelta(days=1),
                    utc=True,
                ),
                html.Div(id="output-single"),
            ]
        ),
    ]
)


@app.callback(
    Output("output-range", "children"),
    [Input("input-range", "startDate"), Input("input-range", "endDate")],
)
def display_output_range(startDate, endDate):
    return "You have entered range from {} to {}".format(startDate, endDate)


@app.callback(
    Output("output-single", "children"),
    [Input("input-single", "date")],
)
def display_output_single(date):
    return "You have entered date {}".format(date)


if __name__ == "__main__":
    app.run_server(debug=True, host="0.0.0.0")
