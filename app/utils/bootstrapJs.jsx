"use client"

import { useEffect } from "react"

export default function BootstrapJsUtil() {

    useEffect(() => {
      require('bootstrap/dist/js/bootstrap.js')
    }, [])

    return null

}