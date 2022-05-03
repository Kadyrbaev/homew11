import Card from './UI/Card';
import DeleteCardButton from './UI/DeleteCardButton';
import styles from './UserList.module.css';

const UserList = ({users, setUserList}) => {
   
  function deleteCardWhithId(e){
     setUserList(
         users.filter((el)=> el.id !== e.target.id)
     )
  }

   return (
       <Card className={styles.users}>
          <ul >           
              {users.map( user => (                
                  <li key={user.id}>                               
                      {user.name} ({user.age} years old)
                   <DeleteCardButton  onDeleteHandler={deleteCardWhithId} id={user.id}/>
                  </li>
 
              ) )}

          </ul>
        
       </Card>
   )

}
export default UserList