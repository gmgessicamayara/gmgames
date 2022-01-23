import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';
 
function Form(){
           
 const params = useParams();

    return (
      <FormCard gameId={`$params.gameId`}/>
    );
}

export default Form;