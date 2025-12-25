import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';
function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button
      type="small"
      className="px-2"
      onClick={() => dispatch(deleteItem(pizzaId))}
    >
      Delete
    </Button>
  );
}

export default DeleteItem;
