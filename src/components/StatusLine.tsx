import React,{ useState } from "react"

type StatusLineProps = {
    loginStatus: string
}

export default function StatusLine({loginStatus}: StatusLineProps) {
    return (
        <div className="border border-sky-800 rounded-lg h-[4%]">
            <div className="flex flex-row" >
                <div className="basis-1/5">{loginStatus}</div>
                <div className="basis-1/5">sec2</div>
                <div className="basis-1/5 self-end items-end">sec3</div>
                <div className="basis-1/5 self-end items-end">sec4</div>
            </div>
        </div>
    )
}
