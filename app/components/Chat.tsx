import { FaUser } from "react-icons/fa"

type Tprops = {
    name: string
    message: string
    date: string
    email: string
}

export default function Chat({message, name, email, date}: Tprops) {
    return (
        <div>
            <div className="chat chat-start">
                <div className="chat-image avatar size-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <FaUser size={18} color="white" />
                </div>
                <div className="chat-header">
                    <span className="font-bold">{name}</span>
                    <time className="text-xs opacity-80"> {date.replace('T', ' ').replace('.618Z', '')}</time>
                </div>
                <div className="chat-bubble">{message}</div>
                <div className="chat-footer opacity-80 text-xs text-blue-400">{email}</div>
            </div>
        </div>
    )
}