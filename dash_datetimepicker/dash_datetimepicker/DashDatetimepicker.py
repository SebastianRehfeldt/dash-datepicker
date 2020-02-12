# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashDatetimepicker(Component):
    """A DashDatetimepicker component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- value (dict; optional): The value displayed in the input. value has the following type: dict containing keys 'startDate', 'endDate'.
Those keys have the following types:
  - startDate (string; optional)
  - endDate (string; optional)
- startDate (string; optional): The value displayed in the input.
- endDate (string; optional): The value displayed in the input."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, value=Component.UNDEFINED, startDate=Component.UNDEFINED, endDate=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'value', 'startDate', 'endDate']
        self._type = 'DashDatetimepicker'
        self._namespace = 'dash_datetimepicker'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'value', 'startDate', 'endDate']
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
