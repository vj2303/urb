import React from "react"
import { useState } from "react"
import { createContext } from "react"

export const PageContext = createContext(null)

const PageState = (props) => {
    const [page, setPage] = useState("AirPollution")

  return (
    <PageContext.Provider value={{page, setPage}}>
        {props.children}
    </PageContext.Provider>
  )
}

export default PageState
