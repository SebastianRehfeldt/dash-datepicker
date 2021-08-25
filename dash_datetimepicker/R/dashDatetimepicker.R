# AUTO GENERATED FILE - DO NOT EDIT

dashDatetimepicker <- function(id=NULL, endDate=NULL, startDate=NULL, utc=NULL) {
    
    props <- list(id=id, endDate=endDate, startDate=startDate, utc=utc)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashDatetimepicker',
        namespace = 'dash_datetimepicker',
        propNames = c('id', 'endDate', 'startDate', 'utc'),
        package = 'dashDatetimepicker'
        )

    structure(component, class = c('dash_component', 'list'))
}
