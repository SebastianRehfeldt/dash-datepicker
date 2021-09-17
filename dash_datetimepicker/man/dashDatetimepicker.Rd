% Auto-generated: do not edit by hand
\name{dashDatetimepicker}

\alias{dashDatetimepicker}

\title{DashDatetimepicker component}

\description{
Dash Datetime Range Picker is a component for selecting two dates (including times). It takes `startDate` and `endDate` as main properties and renders two inputs which open datepickers when they are clicked.
}

\usage{
dashDatetimepicker(id=NULL, endDate=NULL, locale=NULL, startDate=NULL, utc=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{endDate}{Character. The endDate of the range picker. It will fire a dash callback if it is updated.}

\item{locale}{Character. Manually set the locale for the react-datetime instance. Moment.js locale needs to be loaded to be used, see i18n docs.}

\item{startDate}{Character. The startDate of the range picker. It will fire a dash callback if it is updated.}

\item{utc}{Logical. When true, input time values will be interpreted as UTC (Zulu time) by Moment.js. Otherwise they will default to the user's local timezone.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

