import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counterSlice";
import { nameAdded } from "../features/nameSlice";

const Test = () => {
  const count = useSelector((state) => state.counter.value);
  const names = useSelector((state) => state.name);
  const dispatch = useDispatch();
  const [content, setContent] = useState('')

  const formSubmit = (e)=> {
        e.preventDefault();
        dispatch(
            nameAdded({content})
        )
        setContent("")
  }
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>

      <div>
        <ul>
          {names.map((name, id) => {
            return <li key={id}>{name.content}</li>;
          })}
        </ul>

        <form onSubmit={formSubmit}>
            <input style={{color: '#000'}} type="text" value={content} onChange={(e)=> setContent(e.target.value)} placeholder="enter name" />
            <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Test;
