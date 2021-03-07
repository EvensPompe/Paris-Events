export default function Error({message}){
    return(
        <div className="w-4/5 h-auto bg-red-400 border-2 border-red-600">
            <p className="text-center">{message}</p>
        </div>
    )
}