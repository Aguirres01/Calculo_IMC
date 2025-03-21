interface CampFormProps {
    label: string,
    state:any,
    funcState:any
}

export default function CampForm(props: CampFormProps) {
    return (
        <div  className="flex mx-2">
          <label className="w-[60px]">{props.label}</label>
          <input className="border p-1 w-full rounded-lg" value={props.state} onChange={(e) => props.funcState(e.target.value)}></input>
        </div>
    )
}