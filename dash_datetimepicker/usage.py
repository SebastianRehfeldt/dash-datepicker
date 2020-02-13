import dash_datetimepicker
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    dash_datetimepicker.DashDatetimepicker(
        id='input'
    ),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('input', 'startDate')])
def display_output(startDate):
    return 'You have entered {}'.format(startDate)


if __name__ == '__main__':
    app.run_server(debug=True, host="0.0.0.0")
