import React from "react";
import { HiOutlineLockClosed } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";
export default function Card({ id, location, createdAt, timing, category, deleteEvent }) {
    return (
        <div className="border border-slate-200 shadow-sm mb-5 p-4 flex flex-row justify-between">
            <div className=" ">
                <p>
                    <strong className="text-emerald-500">#: </strong>
                    {id}
                </p>
                <p>
                    <strong className="text-emerald-500">Location: </strong>
                    {location}
                </p>
                <p>
                    <strong className="text-emerald-500">Created: </strong>
                    {createdAt}
                </p>
                <p>
                    <strong className="text-emerald-500">Category: </strong>
                    {category}
                </p>
                <p>
                    <strong className="text-emerald-500">Timing: </strong>
                    {timing}
                </p>
            </div>

            <AiFillDelete
                className="text-2xl ml-[150px] cursor-pointer hover:text-emerald-600"
                onClick={() => deleteEvent(id)}
            />
        </div>
    );
}
