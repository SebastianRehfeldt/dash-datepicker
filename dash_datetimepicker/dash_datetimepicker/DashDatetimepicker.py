# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashDatetimepicker(Component):
    """A DashDatetimepicker component.
Dash Datetime Range Picker is a component for selecting two dates (including times).
It takes `startDate` and `endDate` as main properties and renders two inputs
which open datepickers when they are clicked.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- endDate (string; default new Date()):
    The endDate of the range picker. It will fire a dash callback if
    it is updated.

- startDate (string; default new Date(new Date() - 1000 * 60 * 60 * 24)):
    The startDate of the range picker. It will fire a dash callback if
    it is updated.

- utc (boolean; default False):
    When True, input time values will be interpreted as UTC (Zulu
    time) by Moment.js. Otherwise they will default to the user's
    local timezone."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, endDate=Component.UNDEFINED, startDate=Component.UNDEFINED, utc=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'endDate', 'startDate', 'utc']
        self._type = 'DashDatetimepicker'
        self._namespace = 'dash_datetimepicker'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'endDate', 'startDate', 'utc']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DashDatetimepicker, self).__init__(**args)
