import React from "react"
import {render} from "@testing-library/react"
import App from "./App"



it("should render without exploding" , ()=>{
    render(<App/>)
})

