import { AiFillDelete, AiTwotoneLock, AiTwotoneUnlock } from 'react-icons/ai';
import { useDeleteEvent, useUpdateEvent } from '../../queries/events';
import classNames from 'classnames';
import { FiEdit } from 'react-icons/fi';

const Event = ({ id, location, createdAt, timing, category, status }) => {
    const eventData = { id, location, createdAt, timing, category, status };

    const { mutate: deleteEvent } = useDeleteEvent();
    const { mutate: updateEvent } = useUpdateEvent();

    const eventClass = classNames(
        'border',
        'border-slate-200',
        'shadow-sm',
        'mb-5',
        'p-4',
        'flex',
        'flex-row',
        'justify-between',
        {
            'bg-slate-300': status === 'close',
        }
    );
    return (
        <div className={eventClass}>
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
                <p>
                    <strong className="text-emerald-500">Status: </strong>
                    {status}
                </p>
            </div>
            <div className="flex flex-col">
                <AiFillDelete
                    className="text-2xl mb-4 cursor-pointer hover:text-emerald-600"
                    onClick={() => deleteEvent(id)}
                />
                {status === 'open' ? (
                    <AiTwotoneLock
                        className="text-2xl cursor-pointer hover:text-emerald-600"
                        onClick={() =>
                            updateEvent({ ...eventData, status: 'close' })
                        }
                    />
                ) : (
                    <AiTwotoneUnlock
                        className="text-2xl cursor-pointer hover:text-emerald-600"
                        onClick={() =>
                            updateEvent({ ...eventData, status: 'open' })
                        }
                    />
                )}
                <FiEdit
                    // onClick={() => {
                    //     fetchCategory(category.id).then(data => {
                    //         setCategory(data);
                    //     });
                    //     setEditToggle(true);
                    //     setMenuToggle(true);
                    // }}
                    className="text-xl ml-4 cursor-pointer hover:text-emerald-600"
                />
            </div>
        </div>
    );
};

export default Event;
