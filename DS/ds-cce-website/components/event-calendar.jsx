"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ChevronLeft, ChevronRight, CalendarIcon, Search } from "lucide-react"

export function EventCalendar({ events }) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [isSearchResults, setIsSearchResults] = useState(false)
  const [searchResultMonths, setSearchResultMonths] = useState(new Map())

  // Check if we're displaying search results
  useEffect(() => {
    // If we have a small number of events compared to the total, it's likely a search result
    setIsSearchResults(events.length < 20) // Assuming we have more than 20 events total

    // Create a map of months that have search results
    if (events.length < 20) {
      const months = new Map()
      events.forEach((event) => {
        const year = event.date.getFullYear()
        const month = event.date.getMonth()
        const key = `${year}-${month}`
        if (!months.has(key)) {
          months.set(key, { year, month })
        }
      })
      setSearchResultMonths(months)

      // If we have search results, set the current date to the first result's month
      if (events.length > 0) {
        const firstEvent = events[0]
        setCurrentDate(new Date(firstEvent.date.getFullYear(), firstEvent.date.getMonth(), 1))
      }
    }
  }, [events])

  // Get current year and month
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()

  // Navigate to previous month
  const prevMonth = () => {
    if (isSearchResults && searchResultMonths.size > 0) {
      // Find the previous month with search results
      const currentKey = `${currentYear}-${currentMonth}`
      const prevKey = null
      const prevEntry = null

      // Convert the map to an array and sort it
      const sortedMonths = Array.from(searchResultMonths.entries()).sort((a, b) => {
        const [keyA, valueA] = a
        const [keyB, valueB] = b
        return valueA.year === valueB.year ? valueA.month - valueB.month : valueA.year - valueB.year
      })

      // Find the current month's index
      const currentIndex = sortedMonths.findIndex(([key]) => key === currentKey)

      if (currentIndex > 0) {
        // Get the previous month with results
        const [key, value] = sortedMonths[currentIndex - 1]
        setCurrentDate(new Date(value.year, value.month, 1))
      }
    } else {
      // Normal navigation
      setCurrentDate(new Date(currentYear, currentMonth - 1, 1))
    }
  }

  // Navigate to next month
  const nextMonth = () => {
    if (isSearchResults && searchResultMonths.size > 0) {
      // Find the next month with search results
      const currentKey = `${currentYear}-${currentMonth}`
      const nextKey = null
      const nextEntry = null

      // Convert the map to an array and sort it
      const sortedMonths = Array.from(searchResultMonths.entries()).sort((a, b) => {
        const [keyA, valueA] = a
        const [keyB, valueB] = b
        return valueA.year === valueB.year ? valueA.month - valueB.month : valueA.year - valueB.year
      })

      // Find the current month's index
      const currentIndex = sortedMonths.findIndex(([key]) => key === currentKey)

      if (currentIndex < sortedMonths.length - 1) {
        // Get the next month with results
        const [key, value] = sortedMonths[currentIndex + 1]
        setCurrentDate(new Date(value.year, value.month, 1))
      }
    } else {
      // Normal navigation
      setCurrentDate(new Date(currentYear, currentMonth + 1, 1))
    }
  }

  // Get days in month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate()
  }

  // Get first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay()
  }

  // Format date as YYYY-MM-DD for comparison
  const formatDateKey = (date) => {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
  }

  // Get events for a specific date
  const getEventsForDate = (year, month, day) => {
    const date = new Date(year, month, day)
    const dateKey = formatDateKey(date)

    return events.filter((event) => {
      const eventStartKey = formatDateKey(event.date)

      // If event has an end date, check if the current date is between start and end
      if (event.endDate) {
        const eventEndKey = formatDateKey(event.endDate)
        return dateKey >= eventStartKey && dateKey <= eventEndKey
      }

      // Otherwise, just check if it's on the event date
      return dateKey === eventStartKey
    })
  }

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth)
    const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth)
    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-100 bg-gray-50"></div>)
    }

    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day)
      const isToday = new Date().toDateString() === date.toDateString()
      const dayEvents = getEventsForDate(currentYear, currentMonth, day)

      days.push(
        <div
          key={`day-${day}`}
          className={`h-24 border border-gray-200 p-1 overflow-hidden ${
            isToday ? "bg-cyan-50 border-cyan-200" : "bg-white"
          }`}
        >
          <div className="flex justify-between items-start">
            <span className={`text-sm font-medium ${isToday ? "text-cyan-700" : "text-gray-700"}`}>{day}</span>
            {dayEvents.length > 0 && (
              <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200 text-xs">{dayEvents.length}</Badge>
            )}
          </div>

          <div className="mt-1 space-y-1">
            {dayEvents.map((event) => (
              <TooltipProvider key={event.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={`text-xs truncate rounded px-1 py-0.5 cursor-pointer ${
                        event.featured ? "bg-cyan-600 text-white" : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                      }`}
                      onClick={() => setSelectedEvent(event)}
                    >
                      {event.title}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="max-w-xs">
                    <div>
                      <h4 className="font-semibold">{event.title}</h4>
                      <p className="text-xs text-gray-500">
                        {event.time} | {event.location}
                      </p>
                      <p className="text-xs mt-1">{event.description}</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>,
      )
    }

    return days
  }

  // Month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  // Day names
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <CalendarIcon className="h-5 w-5 text-cyan-600" />
          <h2 className="text-2xl font-bold text-slate-800">
            {monthNames[currentMonth]} {currentYear}
          </h2>
          {isSearchResults && (
            <Badge className="ml-2 bg-cyan-100 text-cyan-800">
              <Search className="h-3 w-3 mr-1" />
              Search Results
            </Badge>
          )}
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous month</span>
          </Button>
          <Button variant="outline" size="sm" onClick={() => setCurrentDate(new Date())}>
            Today
          </Button>
          <Button variant="outline" size="sm" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next month</span>
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div>
        {/* Day headers */}
        <div className="grid grid-cols-7 gap-px bg-gray-200">
          {dayNames.map((day) => (
            <div key={day} className="bg-gray-100 text-center py-2 text-sm font-medium text-gray-700">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-px bg-gray-200">{generateCalendarDays()}</div>
      </div>

      {/* Selected Event Details */}
      {selectedEvent && (
        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{selectedEvent.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-cyan-100 text-cyan-800">{selectedEvent.category}</Badge>
                  {selectedEvent.featured && <Badge className="bg-amber-100 text-amber-800">Featured</Badge>}
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setSelectedEvent(null)}>
                ×
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-700 mb-2">Event Details</h4>
                <div className="space-y-3 text-slate-600">
                  <div className="flex items-start">
                    <CalendarIcon className="h-5 w-5 mr-2 text-cyan-600 mt-0.5" />
                    <div>
                      <div>
                        {selectedEvent.date.toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      {selectedEvent.endDate && (
                        <div className="text-sm text-slate-500">
                          to{" "}
                          {selectedEvent.endDate.toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 text-cyan-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 text-cyan-600"
                    >
                      <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 7 6 13 6 13s6-6 6-13Z"></path>
                      <circle cx="12" cy="8" r="2"></circle>
                    </svg>
                    <span>{selectedEvent.location}</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 text-cyan-600"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span>{selectedEvent.organizer}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-700 mb-2">Description</h4>
                <p className="text-slate-600">{selectedEvent.description}</p>

                <div className="mt-6">
                  <Button className="bg-cyan-600 hover:bg-cyan-700">Register for Event</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Legend */}
      <div className="flex items-center justify-end space-x-4 text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-cyan-600 rounded-sm mr-1"></div>
          <span className="text-slate-600">Featured Event</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-slate-100 border border-slate-200 rounded-sm mr-1"></div>
          <span className="text-slate-600">Regular Event</span>
        </div>
      </div>
    </div>
  )
}
