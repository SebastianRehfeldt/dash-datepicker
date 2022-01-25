# AUTO GENERATED FILE - DO NOT EDIT

dashDatetimepickerSingle <- function(id=NULL, date=NULL, locale=NULL, utc=NULL) {
    
    props <- list(id=id, date=date, locale=locale, utc=utc)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashDatetimepickerSingle',
        namespace = 'dash_datetimepicker',
        propNames = c('id', 'date', 'locale', 'utc'),
        package = 'dashDatetimepicker'
        )

    structure(component, class = c('dash_component', 'list'))
}
