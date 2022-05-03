
import Card from './Card'
import styles from './DeleteCard.module.css'

const DeleteCard = (props) =>{

    function noCloseConf(){
        props.showConf(false)
    }

    return (
        <div className={styles.backdrop}>
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>Delete Card</h2>
            </header>
    
            <div className={styles.content}>
                <p>Are you sure to Delete this card?</p>
            </div>

            <footer className={styles.actions}>
            <div className={styles.footer_div}>          
            <button className={styles.but}  onClick={noCloseConf}>No</button>
            <button className={styles.but} id={props.id} onClick={props.onCloseHandler}>Yes</button>
            </div>
            </footer>
        </Card>
         
    </div>
    )
}
export default DeleteCard
