% Auto-generated: do not edit by hand
\name{dashDatetimepickerSingle}

\alias{dashDatetimepickerSingle}

\title{DashDatetimepickerSingle component}

\description{
Dash Datetime Single Picker is a component for selecting a single date + time.
}

\usage{
dashDatetimepickerSingle(id=NULL, date=NULL, locale=NULL, utc=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{date}{Character. The date of the range picker. It will fire a dash callback if it is updated.}

\item{locale}{Character. Manually set the locale for the react-datetime instance. Moment.js locale needs to be loaded to be used, see i18n docs.}

\item{utc}{Logical. When true, input time values will be interpreted as UTC (Zulu time) by Moment.js. Otherwise they will default to the user's local timezone.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

