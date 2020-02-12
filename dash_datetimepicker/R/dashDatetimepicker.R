# AUTO GENERATED FILE - DO NOT EDIT

dashDatetimepicker <- function(id=NULL, value=NULL, startDate=NULL, endDate=NULL) {
    
    props <- list(id=id, value=value, startDate=startDate, endDate=endDate)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashDatetimepicker',
        namespace = 'dash_datetimepicker',
        propNames = c('id', 'value', 'startDate', 'endDate'),
        package = 'dashDatetimepicker'
        )

    structure(component, class = c('dash_component', 'list'))
}
