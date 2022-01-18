# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashDatetimepickerSingle(Component):
    """A DashDatetimepickerSingle component.
Dash Datetime Single Picker is a component for selecting a single date + time.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- date (string; default new Date()):
    The date of the range picker. It will fire a dash callback if it
    is updated.

- locale (string; optional):
    Manually set the locale for the react-datetime instance. Moment.js
    locale needs to be loaded to be used, see i18n docs.

- utc (boolean; default False):
    When True, input time values will be interpreted as UTC (Zulu
    time) by Moment.js. Otherwise they will default to the user's
    local timezone."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, date=Component.UNDEFINED, utc=Component.UNDEFINED, locale=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'date', 'locale', 'utc']
        self._type = 'DashDatetimepickerSingle'
        self._namespace = 'dash_datetimepicker'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'date', 'locale', 'utc']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DashDatetimepickerSingle, self).__init__(**args)
