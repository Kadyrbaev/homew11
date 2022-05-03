import { useState } from "react"
import Button from "./Button"
import DeleteCard from "./DeleteCard"

function DeleteCardButton (props) {

    const [showConf,setShowConf] = useState(false)

    return (
        <div>
            <Button onClick={() => {
                setShowConf(true)
            }}>
                Delete
            </Button>
            { showConf && <DeleteCard onCloseHandler={props.onDeleteHandler} showConf={setShowConf} id={props.id} />}
            
        </div>
    )
}
export default DeleteCardButton













  











  
  